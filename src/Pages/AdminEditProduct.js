/* NPM packages */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* CSS */

import styles from './AdminEditProduct.module.css';

/* Action creators */

import {
  createProduct,
  closeProductEditedModal,
  getProduct,
  updateProductOnServer,
  deleteImageFromServer,
  uploadImageToServer,
  clearSelectedProduct,
} from '../Actions/products.js';

class AdminEditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      imagesToDisplay: [],
      imagesArrayForMulter: [],
      brand: '',
      small: 0,
      medium: 0,
      large: 0,
      size: '',
      category: '',
      subcategory: [],
      chosenSubCat: '',
      description: '',
      errors: [],
      colour: '',
      showModal: false,
    };

    // Set the default state immediately, I will use this to reset state and clear it once the form is completed
    this.initialState = this.state;
  }

  componentDidMount = () => {
    let { getProductFromServer } = this.props;
    let id = this.props.location.pathname.split('/')[3];
    getProductFromServer(id);
  };

  // I use component did update to get the props from the redux store to prepopulate
  // form by updating state. I do this by mkaing sure the props have changed ( except the
  // images which are deleted and added to the server separately )

  componentDidUpdate = (newProps, nextState) => {
    let {
      name,
      price,
      brand,
      colour,
      category,

      subcategory,
      description,
    } = this.props.product;

    if (this.props.images === newProps.images) {
      if (this.props.product !== newProps.product) {
        if (this.props.product.size !== undefined) {
          this.setState({
            name: name,
            price: price,
            brand: brand,
            colour: colour,
            chosenSubCat: subcategory,
            small: this.props.product.size[0].small,
            medium: this.props.product.size[0].medium,
            large: this.props.product.size[0].large,
            category: category,
            subcategory: [subcategory],
            description: description,
          });
        }
      }
    }
  };

  componentWillUnmount = () => {
    this.props.clearProduct();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ errors: [] });
    let { user } = this.props;
    this.setState({ errors: [] });
    let readyToSubmit = true;

    if (this.state.name === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for name'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.small === '' ||
      !Number.isInteger(parseInt(this.state.small))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for small'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.medium === '' ||
      !Number.isInteger(parseInt(this.state.medium))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for medium'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.large === '' ||
      !Number.isInteger(parseInt(this.state.large))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for large'],
      }));
      readyToSubmit = false;
    }
    if (this.state.colour === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for colour'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.price === 0 ||
      !Number.isInteger(parseInt(this.state.price))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for price'],
      }));
      readyToSubmit = false;
    }

    if (this.props.product.images.length === 0) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide at least one image'],
      }));
      readyToSubmit = false;
    }

    if (this.state.brand === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for brand'],
      }));
      readyToSubmit = false;
    }

    if (this.state.category === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for category'],
      }));
      readyToSubmit = false;
    }

    if (this.state.description === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for description'],
      }));
      readyToSubmit = false;
    }
    if (this.state.chosenSubCat === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for subcategory'],
      }));
    }
    if (readyToSubmit) {
      //The images have already been deleted or uploaded to the server on this route, therefore
      //i can send the data as json rather than formData

      // Note you have to append each key/value pair individually
      let productUpdateInfo = {
        name: this.state.name,
        price: this.state.price,
        brand: this.state.brand,
        colour: this.state.colour,
        size: {
          small: this.state.small,
          medium: this.state.medium,
          large: this.state.large,
        },
        category: this.state.category,
        subcategory: this.state.chosenSubCat,
        description: this.state.description,
      };

      let data = {
        data: productUpdateInfo,
        admin: { email: user.email, token: user.token },
        productId: this.props.product._id,
      };

      this.props.updateProduct(data);
    }
  };

  viewProduct = () => {
    this.props.history.push(`/product/${this.props.product._id}`);
    this.props.closeModal();
  };

  removeImage = (index) => {
    let { email, token } = this.props.user;
    // Below the images are removed from the actual image files being sent to express and multer, the other is
    // the image files being displayed as previews on the page ( using the filereader API)
    this.props.deleteImage({
      index: index,
      id: this.props.product._id,
      admin: { email: email, token: token },
    });
  };

  updateCat = (e) => {
    if (e.target.value !== 'blank') {
      let subCats = Object.keys(this.props.categories[e.target.value]);
      let allSubCats = [];
      subCats.forEach((cat) => [
        this.props.categories[e.target.value][cat].forEach((subsubcat) => {
          return allSubCats.push(subsubcat);
        }),
      ]);
      console.log(allSubCats);
      this.setState({ category: e.target.value, subcategory: allSubCats });
    }
  };

  updateSubCat = (e) => {
    this.setState({ chosenSubCat: e.target.value });
  };

  handleChange = (e) => {
    // This first if statement checks if I am dealing with an image upload, if so then it firstly adds the actual image file to
    // to array in state which I can then send to the back end, this is added to the formData in the submit function, the second part uses the file reader
    // to produce images which can be actually viewed as a preview on the page, both are stored in different arrays in state as they contain different files
    if (e.target.files) {
      let { email, token } = this.props.user;
      // Below the images are removed from the actual image files being sent to express and multer, the other is
      // the image files being displayed as previews on the page ( using the filereader API)
      let form = new FormData();
      form.append('image', e.target.files[0]);

      this.props.uploadImage({
        formData: form,
        id: this.props.product._id,
        admin: { email: email, token: token },
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  editMore = () => {
    this.props.closeModal();
    this.props.history.push('/admin');
  };

  render() {
    let { categories } = this.props;
    let { product } = this.props;
    let { showModal } = this.props;
    let options = Object.keys(categories).map((category, index) => (
      <option key={`category${index}`} name='category' value={category}>
        {category}
      </option>
    ));
    options.unshift(
      <option key={'blank-option'} defaultValue value='blank'>
        -- select an option --{' '}
      </option>
    );

    return (
      <>
        <div className={styles.editproductcontainer}>
          {showModal && (
            <div className={styles.productmodal}>
              <div className={styles.product}>
                <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>
                  {' '}
                  <i className='fas fa-check'></i>
                  &nbsp;Product edited successfully! Would you like to{' '}
                </h2>
                <button
                  onClick={() => this.viewProduct()}
                  className={styles.viewproductbtn}>
                  View the product in our store
                </button>
                <button
                  onClick={() => this.editMore()}
                  className={styles.editproductbtn}>
                  Edit another product
                </button>
              </div>
            </div>
          )}
          <h4>
            <button className={styles.gobackbtn}>
              <Link style={{ color: '#ecf0f1' }} to='/admin'>
                Go back
              </Link>{' '}
            </button>
          </h4>
          <h2>EDIT PRODUCT</h2>
          <div className={styles.editformcontainer}>
            <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
              <label>
                Name:
                <input
                  placeholder={product && product.name}
                  name='name'
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Price
                <input
                  type='text'
                  name='price'
                  value={this.state.price}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              Please upload the images below
              <label htmlFor='uploadbtn' class={styles.uploadbtn}>
                {' '}
                Upload Images
              </label>
              <input
                style={{ display: 'none' }}
                onChange={(e) => this.handleChange(e)}
                id='uploadbtn'
                type='file'
                accept='.jpg, .png,.jpeg'
                multiple=''
              />
              <div className={styles.imagecontainer}>
                {product.length !== 0 &&
                  product.images.map((image, index) => (
                    <div
                      key={`image${index}`}
                      onClick={() => this.removeImage(index)}
                      className={styles.imagebtn}>
                      <div className={styles.imagehover}>X</div>
                      <img
                        style={{
                          height: '4rem',
                          width: '6rem',
                          padding: '0 0.5rem',
                        }}
                        src={`https://my-ecommerce-site-fitness.herokuapp.com/${image}`}
                        alt=''></img>
                    </div>
                  ))}
              </div>
              <label>
                Brand
                <input
                  type='text'
                  placeholder={this.props.product && this.props.product.brand}
                  name='brand'
                  value={this.state.brand}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Colour
                <input
                  type='text'
                  name='colour'
                  value={this.state.colour}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Stock :
                {this.state.small !== '' &&
                this.state.medium !== '' &&
                this.state.large !== ''
                  ? parseInt(this.state.small) +
                    parseInt(this.state.medium) +
                    parseInt(this.state.large)
                  : null}
                <br />
                Please enter amounts in each size below
                <div className={styles.sizecontainer}>
                  <div className={styles.smallcontainer}>
                    <span> Small </span>
                    <input
                      className={styles.sizeinput}
                      type='text'
                      name='small'
                      value={this.state.small}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span> Medium</span>
                    <input
                      className={styles.sizeinput}
                      type='text'
                      name='medium'
                      value={this.state.medium}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span> Large </span>
                    <input
                      className={styles.sizeinput}
                      type='text'
                      name='large'
                      value={this.state.large}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>
              </label>
              <label>
                Category
                <br />
                <select
                  className={styles.dropdown}
                  value={this.state.category}
                  onChange={(e) => this.updateCat(e)}>
                  {options}
                </select>
              </label>
              <label>
                Subcategory
                <br />
                <select
                  className={styles.dropdown}
                  disabled={this.state.subcategory.length === 1}
                  value={this.state.chosenSubCat}
                  onChange={(e) => this.updateSubCat(e)}>
                  <option value='blank'>-- select an option -- </option>
                  {this.state.subcategory.length &&
                    this.state.subcategory.map((subcategory, index) => (
                      <option
                        key={`subcategory${index}`}
                        name='subcategory'
                        value={subcategory}>
                        {subcategory}
                      </option>
                    ))}
                </select>
              </label>
              <label>
                Description
                <textarea
                  placeholder={
                    this.props.product && this.props.product.description
                  }
                  className={styles.description}
                  type='textarea'
                  name='description'
                  value={this.state.description}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <input
                className={styles.submitbtn}
                type='submit'
                value='Submit'
              />
            </form>
            {this.state.errors &&
              this.state.errors.map((error, index) => (
                <p key={`error${index}`} className={styles.error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.products.categories,
    user: state.user.user,
    product: state.products.selectedProduct,
    productCreated: state.products.productCreatedModal,
    showModal: state.products.productEditedModal,
    editedProductId: state.products.latestEditedProductId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewProduct: (data) => dispatch(createProduct(data)),
    closeModal: () => dispatch(closeProductEditedModal()),
    getProductFromServer: (id) => dispatch(getProduct(id)),
    updateProduct: (data) => dispatch(updateProductOnServer(data)),
    deleteImage: (data) => dispatch(deleteImageFromServer(data)),
    uploadImage: (data) => {
      dispatch(uploadImageToServer(data));
    },
    clearProduct: () => dispatch(clearSelectedProduct()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminEditProduct)
);
