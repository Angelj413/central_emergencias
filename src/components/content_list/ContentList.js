import React, { Component } from 'react';

import List from 'components/lists/List';

import './ContentList.css';

class ContentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title: "",
            Data : []
        }
    }

    componentWillReceiveProps(props) {
        if (props) {
            this.setState({ 
                Title: props.Title,
                Data : props.Data
            })
        }
    }

    componentWillMount () {

        this.setState({ 
            Title: this.props.Title,
            Data: this.props.Data,
        })
    }

    render() {
        return (
            <div className="ContainerContentList">
                <div className="ContentList">
                    <List
                        Title = {this.state.Title}
                        Data = {this.state.Data }
                    />
                    {/* <List
                        Title = {'Emergencias Atendidas'}
                        Data = { emergencias_entrantes }
                    />
                    <List
                        Title = {'Emergencias Procesadas'}
                        Data = { emergencias_entrantes }
                    /> */}
                </div>
            </div>
        );
    }
}

export default ContentList;