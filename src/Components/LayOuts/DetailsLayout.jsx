import React from 'react';
import Details from '../Services/Details';
import AddReview from '../Services/AddReview';
import Reviews from '../Services/Reviews';

const DetailsLayout = () => {
    return (
        <div>
            <Details></Details>
            <AddReview></AddReview>
            <Reviews></Reviews>
        </div>
    );
};

export default DetailsLayout;