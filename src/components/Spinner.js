import React from 'react';
import loading from '../components/loading.gif'
const Spinner = () => {

    return (
        <div>
            <div className="text-center">
                <img className='my-3' src={loading} alt="loading" />
            </div>
        </div>
    );

}

export default Spinner;
