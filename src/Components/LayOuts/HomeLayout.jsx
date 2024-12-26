import React, { useEffect } from 'react';
import Banner from '../Pages/Banner';
import Feature from '../Pages/Feature';
import Partner from '../Pages/Partner';


const HomeLayout = () => {
    useEffect(() => {
        document.title = "FamView - Home";
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Partner></Partner>
        </div>
    );
};

export default HomeLayout;