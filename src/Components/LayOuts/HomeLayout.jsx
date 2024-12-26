import React, { useEffect } from 'react';
import Banner from '../Pages/Banner';
import Feature from '../Pages/Feature';
import Partner from '../Pages/Partner';
import LetsHelp from '../Pages/LetsHelp';
import GiveReview from '../Pages/GiveReview';


const HomeLayout = () => {
    useEffect(() => {
        document.title = "FamView - Home";
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Partner></Partner>
            <LetsHelp></LetsHelp>
            <GiveReview></GiveReview>
        </div>
    );
};

export default HomeLayout;