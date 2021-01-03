import React, {useState} from 'react';
import Loader from '../components/Loader';


const useLoader = () => {
    const [loading, setLoading] = useState(false);
    return [
        loading ? <Loader /> : null,
        () => setLoading(true), //Show loader
        () => setLoading(false) //Hide loader
    ];
};


export default useLoader;