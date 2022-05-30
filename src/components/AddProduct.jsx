import userEvent from "@testing-library/user-event";
// import React, { useRef } from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import { useState } from "react";
// import { useEffect } from "react";
const AddProduct = ({data}) => {

  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Modal = () => <div />;
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;
  // const value = e.target.value;
  


const [form,setForm] = useState({
  title:"",
  category:"",
  gender:"",
  price:"",

});
// const ref = useRef();
const handleChange=(e)=>{
  const name =e.target.name;
  console.log(e);
  const value = e.target.value;

  setForm({...form,[name]:value})
   
}
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(form);
}

  return (
    <>
      <Button my={4} data-cy="add-product-button">Add New Product</Button>
      <Modal onSubmit={handleSubmit}>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" type="text" placeholder="Title" value={form.title} name="title" onChange={handleChange}/>
          <Select data-cy="add-product-category" name="category" value={form.category} onChange={handleChange}>
            <option data-cy="add-product-category-shirt" value="" >Shirt</option>
            <option data-cy="add-product-category-pant" value="">Pant</option>
            <option data-cy="add-product-category-jeans" value="">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name="gender" value={form.gender} onChange={handleChange}>
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" text="number" placeholder="Price" name="price" value={form.price} onChange={handleChange}/>
          <Button data-cy="add-product-submit-button" type="submit">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
