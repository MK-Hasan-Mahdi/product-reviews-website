import React from 'react';
import useReviews from '../../hook/useReviews';
import Reviews from '../Reviews/Reviews';
import './ReviewPage.css'

const ReviewPage = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="container">
            <div className='review-container text-center'>
                {
                    reviews.map(review => <Reviews
                        key={review.id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default ReviewPage;