import React from 'react';
import Make from './make';
// import Model from './model'

const thisMake = (props) => {
    const { make } = props;

    return (
        <div id='single-Make' className='column'>
            <Make make={make} />
            {/* call modelList */}
        </div>
    );
};

export default thisMake;