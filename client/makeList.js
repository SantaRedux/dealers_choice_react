import React from 'react';
import Make from './make';

const makeList = (props) => {
    const makes = props.makes;

    return (
        <div id='makes' className='row wrap'>
            {
                makes.map(make => <Make make={make} key={make.id} manufacturer={make.manufacturer.name} selectMake={props.selectMake} />)
            }
        </div>
    );
};

export default makeList;