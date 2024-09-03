import React from 'react';
import ProductCard from '../components/ProductCard';
import { Row, Col } from 'react-bootstrap';

const ProductList = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
