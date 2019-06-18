import React, { Component } from 'react';

import { Row ,Col, Modal, Button } from 'react-bootstrap';

import './RowList.css';

class RowList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            User : "",
            location : "",
            time : "",
            location : "", 
            date : "",
            show: false,
            name : "",
            id: ""
        }
    }

    componentWillMount () {
        this.setState({ 
            User: this.props.User,
            id: this.props.id,
            location: this.props.location,
            time: this.props.time,
            date: this.props.date,
            name: this.props.name
        })
    }

    componentWillReceiveProps(props) {
        if (props) {
            this.setState({ 
                User: props.User,
                id: props.id,
                location: props.location,
                time: props.time,
                date: props.date,
                name: props.name
            })
        }
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleEmergency = () => {
        this.props.handleEmergency(this.state.id)
        this.handleClose()
    }

    render() {
        return (
            <div className="Container-RowList">
                <div className="ContainerRowList">
                    
                    <Row onClick={this.handleShow}>
                        <Col>
                            usuario: <span>{this.state.name} </span> <br/>
                            lugar: <span>Lat-{!!this.state.location && !!this.state.location._lat ? this.state.location._lat : null }, Long-{!!this.state.location && !!this.state.location._long ? this.state.location._long : null }</span> <br/>
                        </Col>
                        <Col>
                            fecha: <span>{this.state.date}</span> <br/>
                            hora: <span>{this.state.time}</span>
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
                            usuario: <span>{this.state.name} </span> <br/>
                            lugar: <span>Lat-{!!this.state.location && !!this.state.location._lat ? this.state.location._lat : null }, Long-{!!this.state.location && !!this.state.location._long ? this.state.location._long : null } </span> <br/>
                        </Col>
                        <Col>
                            fecha: <span>{this.state.date}</span> <br/>
                            hora: <span>{this.state.time}</span>
                        </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Cerrar
                    </Button>
                    {/* <Button variant="primary">
                        Enviar Correo
                    </Button> */}
                    {
                        this.props.type === 'Emergencias Procesadas' ?
                            null
                        :
                            <Button variant="success" onClick={this.handleEmergency}>
                                Procesar
                            </Button>
                    }
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default RowList;