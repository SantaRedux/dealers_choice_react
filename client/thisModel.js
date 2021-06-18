import React from 'react';
import Model from './model';
// import Make from './make'

const thisModel = (props) => {
    const { model } = props;

    return (
        <div id='single-Model' className='column'>
            <Model model={model} make={model.make.name}/>
            {/* add model.make */}
        </div>
    );
};

export default thisModel;