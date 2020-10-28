import react from 'react';

const Product = ( {product: { title, price, description }}) => (
  <>
    <h3>{title}</h3>
    <p>${price}</p>
    <p>{description}</p>
  </>
)

export default Product;
