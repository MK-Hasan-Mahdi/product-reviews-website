import React from 'react';
import './Home.css';
import laptop from '../images/laptop.jpg';
import { Button } from 'react-bootstrap';
import useReviews from '../../hook/useReviews';
import { useNavigate } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const navigate = useNavigate()
    const [reviews, setReviews] = useReviews();
    const sliceReview = reviews.slice(0, 3);
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='text-container px-5'>
                    <p className='heading'>Ultra Laptop</p>
                    <p className='heading'>Generation Exceed..</p>
                    <p className='heading-details'>Get immersed in your content, movies and games with vivid, true-to-life color on the new 3.5K (3456 x2160) OLED display option. Perfect black provides phenomenal contrast ratio (100,000:1) so content comes alive with breathtaking detail especially in dark areas. Wide color gamut (100% DCI-P3) is more true to life, great for content consumption.</p>
                    <Button onClick={() => navigate('/blogs')} variant='success btn-lg px-4'>Details</Button>
                </div>
                <div className='image-container'>
                    <img src={laptop} height={500} width={500} alt="laptop" />
                </div>
            </div>
            <div className='client-review py-5 text-center'>
                <h1 className='fw-bold p-5'>Happy Client Review</h1>
                <div className='review-container text-center'>
                    {
                        sliceReview.map(review => <Reviews
                            key={review.id}
                            review={review}
                        ></Reviews>)
                    }
                </div>
                <div className='buttonReview mt-5'>
                    <Button onClick={() => navigate('/reviews')} variant='success btn-lg px-4'>All Client Review</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;