import React, {useState} from 'react';
import LoaderImg from '../bg.png';

const Loader = () => {

    const useLoader = () => {
        const [loading, setLoading] = useState(false);
        return [
            loading ? <Loader /> : null,
            () => setLoading(true), //Show loader
            () => setLoading(false) //Hide loader
        ];
    };


    return (
        <div className="loader-container">
            <img src={LoaderImg} className="loader-img" alt="loading"/>
            <h1 className="loader-heading">Tasty</h1>
        </div>
    );
};

export default Loader;