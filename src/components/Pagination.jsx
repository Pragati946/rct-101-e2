import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const ButtonGroup = () => <div />;
  const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" disabled={page<=1} onClick={()=>setPage(page-1)}>First</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="add-product-category" name="category" value={form.category} onChange={handleChange}>
            <option data-cy="add-product-category-shirt" value={3} >3</option>
            <option data-cy="add-product-category-pant" value={6}>6</option>
            <option data-cy="add-product-category-jeans" value={9}>9</option>
          </Select>


          {toHaveDescription.map((todo)=>{
            <div key ={todo.id}>
              {todo.id} {`:`} {todo.value}
            </div>
          })}
      <Button data-cy="pagination-next-button" disabled={page<=1} onClick={()=>{if(page>1){setPage(page-1)}}}>Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
