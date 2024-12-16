import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';


// mapeo de productos filtrados

const ProductList = ({ products }) => {
  return (
    <Row>
      {products.map(product => (
        <Col key={product.id} sm={12} md={6} lg={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
