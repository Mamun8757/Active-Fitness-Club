import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1>Blogs Related To Some Q/A</h1>
            <div className='blogs-elements'>
                <div>
                    <h2>How does React Work?</h2>
                    <p>
                        React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code, that makes it easier to reason about your application and aims to be both efficient and flexible.
                    </p>
                </div>
                <div>
                    <h2>What is the difference between props and state in React?</h2>
                    <p>
                        The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.
                    </p>
                </div>
                <div>
                    <h2>Except Data Load Why we use UseEffect ?</h2>
                    <p>
                        Beside the fetching data from API by UseEffect We can use UseEffect for updating Dom, setting up subscriptions or timers. And most important that useEffect Hook is to eliminate the side-effects of using class-based components.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;