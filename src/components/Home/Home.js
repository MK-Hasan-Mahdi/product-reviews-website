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
                    <h1 className='text-lg'>Ultra Laptop</h1>
                    <p>Get immersed in your content, movies and games with vivid, true-to-life color on the new 3.5K (3456 x2160) OLED display option. Perfect black provides phenomenal contrast ratio (100,000:1) so content comes alive with breathtaking detail especially in dark areas. Wide color gamut (100% DCI-P3) is more true to life, great for content consumption.</p>
                    <Button variant='success'>Details</Button>
                </div>
                <div className='image-container'>
                    <img src={laptop} height={500} width={500} alt="" />
                </div>
            </div>
            <div className='client-review'>
                <h2>Happy Client Review</h2>
                <div className='review-container text-center'>
                    {
                        sliceReview.map(review => <Reviews
                            key={review.id}
                            review={review}
                        ></Reviews>)
                    }
                </div>
                <div className='buttonReview'>
                    <Button onClick={() => navigate('/reviews')} variant='success'>All Client Review</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;