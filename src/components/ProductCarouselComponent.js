import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel className="bg-primary">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://saysach.com/wp-content/uploads/2021/05/tho-bay-mau-1.jpg"
          style={{ height: "600px", objectFit: "contain" }}
          alt="First slide"
        />
        <LinkContainer style={cursorP} to="/product-details">
          <Carousel.Caption>
            <h3
              style={{
                color: "red",
                textShadow: "black 0.1em 0.1em 0.2em",
                // fontSize: "45px",
                fontWeight: 700,
              }}
            >
              Tho Bay Mau
            </h3>
            <p style={{ color: "blue", fontWeight: 700 }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://saysach.com/wp-content/uploads/2021/05/tho-bay-mau-1.jpg"
          style={{ height: "600px", objectFit: "contain" }}
          alt="First slide"
        />
        <LinkContainer style={cursorP} to="/product-details">
          <Carousel.Caption>
            <h3
              style={{
                color: "red",
                textShadow: "black 0.1em 0.1em 0.2em",
                // fontSize: "45px",
                fontWeight: 700,
              }}
            >
              Tho Bay Mau
            </h3>
            <p style={{ color: "blue", fontWeight: 700 }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://saysach.com/wp-content/uploads/2021/05/tho-bay-mau-1.jpg"
          style={{ height: "600px", objectFit: "contain" }}
          alt="First slide"
        />
        <LinkContainer style={cursorP} to="/product-details">
          <Carousel.Caption>
            <h3
              style={{
                color: "red",
                textShadow: "black 0.1em 0.1em 0.2em",
                // fontSize: "45px",
                fontWeight: 700,
              }}
            >
              Tho Bay Mau
            </h3>
            <p style={{ color: "blue", fontWeight: 700 }}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
