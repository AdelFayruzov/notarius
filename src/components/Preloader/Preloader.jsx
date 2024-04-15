import {useEffect, useState} from "react";

const Preloader = ({children}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return loading ? <div className="loader"></div> : children;
};

export default Preloader;
