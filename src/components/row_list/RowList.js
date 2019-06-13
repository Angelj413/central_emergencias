import React, { Component } from 'react';

import { Row ,Col, Modal, Button } from 'react-bootstrap';

import './RowList.css';

class RowList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            User : "",
            TypeEmergency : "",
            Status : "",
            MsgEmergency : "", 
            Tlf : "",
            show: false
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

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
                <div className="ContainerRowList">
                    
                    <Row onClick={this.handleShow}>
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
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Información de la Emergencia</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row onClick={this.handleShow}>
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
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary">
                        Enviar Correo
                    </Button>
                    <Button variant="success">
                        Procesar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default RowList;