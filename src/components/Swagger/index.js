import React from 'react';
import SwaggerUI from 'swagger-ui';

class Swagger extends React.Component {
  componentDidMount() {
    SwaggerUI({
      dom_id: '#swaggerContainer',
      url: 'swagger.json',
    });
  }

  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default Swagger;
