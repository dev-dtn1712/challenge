import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './loading.css';

const LoadingComponent = () => {
  return (
    <div className="d-flex d-flex justify-content-center align-items-center loading">
      <Spinner animation="border" role="status" />
    </div>
  )
}

export default LoadingComponent;