import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";

const FavouriteDetailPage = () => {
    console.log("FavouriteDetailPage rendered!"); // Add this line
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q');
    const size = searchParams.get('size');

    return (
        <>
            <Navbar />
            <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
                <h2>Favourite Detail Page</h2>
                <p>Your favourite post is {query}. Post ID is {id}. Size is {size}.</p>
            </div>
        </>
    );
};

export default FavouriteDetailPage;