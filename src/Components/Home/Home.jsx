import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h3>This is from home: {tshirts.length}</h3>
        </div>
    );
};

export default Home;