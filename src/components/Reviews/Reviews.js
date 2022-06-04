import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import './Reviews.css';

const Reviews = (props) => {
    const { picture, name, clientReview, rating } = props.review;
    return (
        <div className='single-review shadow'>
            <img src={picture} height={100} width={100} alt="" />
            <div className='review-details mt-5'>
                <h6>{name} </h6>
                <p>Review: {clientReview} </p>
                <p>Ratings: {rating}</p>
                <span> <BsStarFill className='ratings'></BsStarFill> <BsStarFill className='ratings'></BsStarFill> <BsStarFill className='ratings'></BsStarFill> <BsStarFill className='ratings'></BsStarFill> <BsStarFill className='ratings'></BsStarFill> </span>
            </div>
        </div>
    );
};

export default Reviews;