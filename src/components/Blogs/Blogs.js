import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-5'>Blogs</h2>
            <h3>What is Context API?</h3>
            <p>Ans: <br />
                In react usually send data from one component to another component by props. It is used like from parent to child component as props. Sometimes child component can be much lower than our main component where data is. In that times for collect data we drill from parent to child that called props drilling. But react bring another way to reach to data from parent to child there have proceed global variables that can passes effectively.
                Context API can share data in multiple components without having pass data through manually. So, solving the props-drilling its much effective to use context API.

            </p>
            <h3>What is semantic tag?</h3>
            <p>Ans: <br />
                Semantic tag is useful and meaningful because its uses and naming are very similar. HTML5 introduces many semantic tag to make code meaningful to users and developers. Some semantic tag are – article, header, footer, main, section, nav, aside etc.
                Users can easily read and get a meaningful matter. It helps the search engine and users device importance of web pages and help to search specific searched criteria.  For accessibility user experience is better than previously used tags like that. It defines webpage’s meaningful block of it’s part.

            </p>
            <h3>What inline block and inline-block element?</h3>
            <p>Ans: <br />
                Block element always starts new line and fill up horizontal space left and right side of web page. div, p, form etc are example of block element.
                Inline element don’t start new line, there can be another inline elements in same line.
                Inline-block does not add line break after element, so the element can sit next to other elements.
            </p>
        </div>
    );
};

export default Blogs;