import React, { Component } from 'react';

import RowList from 'components/row_list/RowList';

import './List.css';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Title : "",
            Data : {}
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

    proccesProps (propieties) {
        let background = "";

        if(propieties.Title === "Emergencias Entrantes"){
            background = "red"
        }else if( propieties.Title === "Emergencias Procesadas" ){
            background = "green"
        }

        this.setState({ 
            Title: propieties.Title,
            Data: propieties.Data,
            backTitle : background
        })
    }

    componentWillMount () {
        this.proccesProps(this.props)
    }
    
    componentWillReceiveProps (props) {
        this.proccesProps(props)
    }

    render() {
        let counterid = 0;
        return (
                <div className="List">
                    <div className={`TitleList ${this.state.backTitle}`}>
                        {this.state.Title}
                    </div>
                    <div className="cardList">
                        {
                            Object.keys(this.state.Data).map( (index) => {
                                counterid++
                                return <RowList 
                                    key = {counterid}
                                    User = {this.state.Data[index].id}
                                    id = {this.state.Data[index].id}
                                    location = {this.state.Data[index].location}
                                    date = {this.state.Data[index].date}
                                    time = {this.state.Data[index].time}
                                    name = {this.state.Data[index].name}
                                    handleEmergency = {this.props.handleEmergency}
                                    type = {this.props.Title}
                                />
                            })
                        }
                    </div>
                </div>
        );
    }
}

export default List;