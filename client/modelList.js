import React from 'react';
import Model from './model';

const makeList = (props) => {
    const models = props.models;

    return (
        <div id='models'>
            {
                models.map(model => <Model model={model} key={model.id} make={model.make.name} year={model.year} selectModel={props.selectModel} />)
            }
        </div>
    );
};

export default modelList;