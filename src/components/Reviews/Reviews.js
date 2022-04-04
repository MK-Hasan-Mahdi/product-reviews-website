import React from 'react';
import './Reviews.css';

const Reviews = (props) => {
    const { picture, name, clientReview, rating } = props.review;
    return (
        <div className='single-review'>
            <img src={picture} height={100} width={100} alt="" />
            <h6>Name: {name} </h6>
            <p>Review: {clientReview} </p>
            <span> {rating} </span>
        </div>
    );
};

export default Reviews;