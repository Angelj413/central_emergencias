import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Assets
import 'assets/styles/DashboardPage.css';

//Components
import Menu from 'components/menu/Menu';
import ContentList from 'components/content_list/ContentList';
import NavbarTop from 'components/navbar_top/NavbarTop';

const emergencias_entrantes = [
    {
        User : "Alex" ,
        TypeEmergency : "Accidente de Transito",
        Status : "No procesada",
        MsgEmergency : "Tuve un choque en la Av. Francisco Fajardo, Ayuda por favor!",
        Tlf : "+584168292312",
    },
    {
        User : "Maria" ,
        TypeEmergency : "Extravío",
        Status : "No procesada",
        MsgEmergency : "Salí al avila a pasear y me perdí, Ayuda por favor!",
        Tlf : "+584245454312",
    },
    {
        User : "Enrique" ,
        TypeEmergency : "Accidente de Transito",
        Status : "No procesada",
        MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
        Tlf : "+584168233312",
    },{
        User : "Enrique" ,
        TypeEmergency : "Accidente de Transito",
        Status : "No procesada",
        MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
        Tlf : "+584168233312",
    },{
        User : "Enrique" ,
        TypeEmergency : "Accidente de Transito",
        Status : "No procesada",
        MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
        Tlf : "+584168233312",
    },{
        User : "Enrique" ,
        TypeEmergency : "Accidente de Transito",
        Status : "No procesada",
        MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
        Tlf : "+584168233312",
    },{
        User : "Enrique" ,
        TypeEmergency : "Accidente de Transito",
        Status : "No procesada",
        MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
        Tlf : "+584168233312",
    },{
        User : "Enrique" ,
        TypeEmergency : "Accidente de Transito",
        Status : "No procesada",
        MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
        Tlf : "+584168233312",
    },
]

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Container 
                id="ContainerDashboard" 
                fluid={true}
            >
                <Row id="RowDashboard">
                    <div className="BarLeft">
                        <Menu />
                    </div>
                    <div className="BarRight">
                        <NavbarTop />
                        <ContentList
                            Title = {'Emergencias Entrantes'}
                            Data = { emergencias_entrantes }
                        />
                    </div>
                </Row>
            </Container>
        );
    }
}

export default DashboardPage;