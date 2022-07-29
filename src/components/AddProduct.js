import React, { Component } from 'react';
import { useDispatch } from "react-redux";
import * as Actions from '../controller/ActionTypes';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddProductForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      price: 0,
      vax: 0,
      description: '',
      image: ''      
    }
  }

  changeInputValue (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  validationForm() {
    let returnData = {
      error : false,
      msg: ''
    }
    const {price, vax, name} = this.state
    //Kiểm tra Name
    if(!name) {
      returnData = {
        error: true,
        msg: 'Điền tên sản phẩm'
      }
    }
    //Kiểm tra price
    if(price < 0) {
      returnData = {
        error: true,
        msg: 'Giá phải lớn hơn 0'
      }
    }
    //Kiểm tra gia
    if(vax < 0) {
      returnData = {
        error: true,
        msg: 'Thuế phải lớn hơn 0'
      }
    }
    return returnData;
  }
  submitForm(e) {
    const id = Math.floor(Math.random() * 1000) + 5;
    this.setState({id: id})
    //Chặn các event mặc định của form
    e.preventDefault();
    console.log('object');
    console.log(this.state);
   //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = this.validationForm()
    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg)
    }else{
      alert('Submit form success')
    }

  } 
  render() {
  //   const dispatch = useDispatch();
  //   const addPurchase = (e) => {
  //     dispatch({
  //         type: Actions.UPDATE_PRODUCT_SAGA,
  //         data: this.state
  //     })
  // };
    return(
      <div className="container">
      <form onSubmit={e => { this.submitForm(e) }} >
        <div className="form-group">
          <label htmlFor="text">Tên sản phẩm:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Tên sản phẩm"
            onChange={e => this.changeInputValue(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Thông tin sản phẩm:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Thông tin sản phẩm"
            onChange={e => this.changeInputValue(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Giá:</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder="Giá sản phẩm"
            onChange={e => this.changeInputValue(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Thuế %:</label>
          <input
            type="number"
            className="form-control"
            name="vax"
            placeholder="Thuế VAT"
            onChange={e => this.changeInputValue(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Link ảnh:</label>
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="Link hình ảnh sản phẩm"
            onChange={e => this.changeInputValue(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
    );
  }
}

// class AddProductForm extends Component {




//   // }  
export default AddProductForm;