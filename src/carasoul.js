import React, { Component } from 'react';

const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}>
          <img src={url} alt={"image not found right now"}></img>
      </div>
    );
  }

  const imgUrl = "./1.png";

export class Carousel extends React.Component {
    render () {
      return (
          <div>
        <div className="carousel">Hey There !! From Carasoul Component -- Souvik.</div>
        <ImageSlide url={ imgUrl } />
        </div>
      );
    }
  }