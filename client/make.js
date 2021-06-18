import React from 'react';

const Make = (props) => {
    const selectMake = props.selectMake;

    return (
        <div className='make'>
            <a onClick={selectMake(props.make.id)}>
                <img src={props.make.logoUrl} />
                <p>{props.make.name}, a {props.make.manufacturer.name} brand</p>
            </a>
        </div>
    );
};

export default Make;