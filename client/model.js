import React from 'react';

const Model = (props) => {
    const selectModel = props.selectModel;

    return (
        <div className='model'>
            <a onClick={selectModel(props.model.id)}>
                <img src={props.model.imageUrl} />
                <p>{props.model.year} {props.model.make.name} {props.model.name}</p>
            </a>
        </div>
    );
};

export default Model;