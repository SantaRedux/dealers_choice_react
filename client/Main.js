import React from 'react';
import axios from 'axios';
import thisMake from './thisMake';
import thisModel from './thisModel';
import makeList from './makeList';
import modelList from './modelList';

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            makes: [],
            selectMakes: [],
            models: [],
            selectModel: []
        }
        this.selectMake = this.selectMake.bind(this)
        this.deselectMake = this.deselectMake.bind(this)
        this.selectModel = this.selectModel.bind(this)
        this.deselectModel = this.deselectModel.bind(this)
    }
    selectMake(makeId) {
        return async () => {
            const { data } = await axios.get(`/api/makes/${makeId}`)
            this.setState({
                selectMakes: data
            })
        }
    }
    deselectMake() {
        this.setState({
            selectMakes: []
        })
    }
    selectModel(modelId) {
        return async () => {
            const { data } = await axios.get(`/api/models/${modelId}`)
            this.setState({
                selectModel: data
            })
        }
    }
    deselectModel() {
        this.setState({
            selectModel: []
        })
    }
    render() {
        const { next, prev, thisModel, thisMake } = this.props

        return (
            <div id='main'>
                <div id='container'>
                    {
                        this.state.selectMake.id
                            ? <thisMake
                                make={this.state.selectMake}
                                thisModel={thisModel}
                            />
                            : <makeList makes={this.state.makes} selectMake={this.selectMake} />
                    }
                </div>
            </div>
        )
    }
};