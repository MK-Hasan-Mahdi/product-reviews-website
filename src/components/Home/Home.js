import React from 'react';
import './Home.css';
import laptop from '../images/laptop.jpg';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='container'>
            <div className='home-container'>
                <div className='text-container'>
                    <h1>Ultra Laptop</h1>
                    <p>Get immersed in your content, movies and games with vivid, true-to-life color on the new 3.5K (3456 x2160) OLED display option. Perfect black provides phenomenal contrast ratio (100,000:1) so content comes alive with breathtaking detail especially in dark areas. Wide color gamut (100% DCI-P3) is more true to life, great for content consumption.</p>
                    <Button variant='success'>Details</Button>
                </div>
                <div className='image-container'>
                    <img src={laptop} height={500} width={500} alt="" />
                </div>
            </div>
            <div className='client-review'>
                <h2>Client Review</h2>
            </div>
        </div>
    );
};

export default Home;