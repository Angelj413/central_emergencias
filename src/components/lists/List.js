import React, { Component } from 'react';

import RowList from 'components/row_list/RowList';

import './List.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title : "",
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

        let background = "";

        if(this.props.Title === "Emergencias Entrantes"){
            background = "red"
        }

        this.setState({ 
            Title: this.props.Title,
            Data: this.props.Data,
            backTitle : background
        })
    }

    render() {
        return (
            <div className="ContainerList">
                <div className="List">
                    <div className={`TitleList ${this.state.backTitle}`}>
                        {this.state.Title}
                    </div>
                    <div className="cardList">
                        {
                            this.state.Data.map( (index) => {
                                return <RowList 
                                    User = {index.User}
                                    TypeEmergency = {index.TypeEmergency}
                                    Status = {index.Status}
                                    MsgEmergency = {index.MsgEmergency}
                                    Tlf = {index.Tlf}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default List;