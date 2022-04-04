import React from 'react';
import './Reviews.css';

const Reviews = (props) => {
    const { picture, name, clientReview, rating } = props.review;
    return (
        <div className='single-review'>
            <h5>Clinet Reviews</h5>
            <img src={picture} height={50} width={50} alt="" />
            <h6>Name: {name} </h6>
            <p> {clientReview} </p>
            <span> {rating} </span>
        </div>
    );
};

export default Reviews;