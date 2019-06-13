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
            <List
                Title = {this.state.Title}
                Data = {this.state.Data }
            />
        );
    }
}

export default ContentList;