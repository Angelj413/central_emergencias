import React, { Component } from 'react';

import { Row ,Col } from 'react-bootstrap';

import './RowList.css';

class RowList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            User : "",
            TypeEmergency : "",
            Status : "",
            MsgEmergency : "", 
            Tlf : ""
        }
    }

    componentWillMount () {
        this.setState({ 
            User: this.props.User,
            TypeEmergency: this.props.TypeEmergency,
            Status: this.props.Status,
            MsgEmergency: this.props.MsgEmergency,
            Tlf: this.props.Tlf
        })
    }

    componentWillReceiveProps(props) {
        if (props) {
            this.setState({ 
                User: props.User,
                TypeEmergency: props.TypeEmergency,
                Status: props.Status,
                MsgEmergency: props.MsgEmergency,
                Tlf: props.Tlf
            })
        }
    }

    render() {
        return (
            <div className="ContainerRowList">
                <Row>
                    <Col>
                        Usuario: <span>{this.state.User} </span> <br/>
                        Tipo de Emergencia: <span>{this.state.TypeEmergency}</span> <br/>
                        Estatus: <span>{this.state.Status} </span>
                    </Col>
                    <Col>
                        Mensaje: <span>{this.state.MsgEmergency}</span> <br/>
                        Tlf: <span>{this.state.Tlf}</span>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default RowList;