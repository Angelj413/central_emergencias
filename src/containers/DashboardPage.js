import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import socketIOClient from 'socket.io-client';
import Firebase from 'firebase';
//Assets
import 'assets/styles/DashboardPage.css';

//Components
import Menu from 'components/menu/Menu';
import ContentList from 'components/content_list/ContentList';
import NavbarTop from 'components/navbar_top/NavbarTop';
import config from 'config';

// const socket = socketIOClient('http://redesapp.herokuapp.com:80')

// const emergencias_entrantes = [
//     {
//         User : "Alex" ,
//         TypeEmergency : "Accidente de Transito",
//         Status : "No procesada",
//         MsgEmergency : "Tuve un choque en la Av. Francisco Fajardo, Ayuda por favor!",
//         Tlf : "+584168292312",
//     },
//     {
//         User : "Maria" ,
//         TypeEmergency : "Extravío",
//         Status : "No procesada",
//         MsgEmergency : "Salí al avila a pasear y me perdí, Ayuda por favor!",
//         Tlf : "+584245454312",
//     },
//     {
//         User : "Enrique" ,
//         TypeEmergency : "Accidente de Transito",
//         Status : "No procesada",
//         MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
//         Tlf : "+584168233312",
//     },{
//         User : "Enrique" ,
//         TypeEmergency : "Accidente de Transito",
//         Status : "No procesada",
//         MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
//         Tlf : "+584168233312",
//     },{
//         User : "Enrique" ,
//         TypeEmergency : "Accidente de Transito",
//         Status : "No procesada",
//         MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
//         Tlf : "+584168233312",
//     },{
//         User : "Enrique" ,
//         TypeEmergency : "Accidente de Transito",
//         Status : "No procesada",
//         MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
//         Tlf : "+584168233312",
//     },{
//         User : "Enrique" ,
//         TypeEmergency : "Accidente de Transito",
//         Status : "No procesada",
//         MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
//         Tlf : "+584168233312",
//     },{
//         User : "Enrique" ,
//         TypeEmergency : "Accidente de Transito",
//         Status : "No procesada",
//         MsgEmergency : "Tuve un choque en la Av. Panteón, Ayuda por favor!",
//         Tlf : "+584168233312",
//     },
// ]

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        Firebase.initializeApp(config);

        this.state = {
            emergencias : {},
            process : {}
        }
    }

    async getMarker() {
        let emergencias = {...this.state.emergencias}
        let process = {...this.state.process}
        const snapshot = await Firebase.firestore().collection('alarms-data').get()
        snapshot.docs.map(doc => {
            let res = doc.data()
            if(!process[res.id]){
                emergencias[res.id] = res
            }
        });
        this.setState({ emergencias : emergencias })
    }

    handleEmergency = (emergency_id) => {

        
        let process_aux ={...this.state.process}
        let emergencias_aux ={...this.state.emergencias}
        
        if(!!this.state.emergencias[emergency_id]){
            console.log(emergency_id)
            process_aux[emergency_id] = this.state.emergencias[emergency_id]
            delete emergencias_aux[emergency_id]
            this.setState({emergencias: emergencias_aux,process : process_aux})
        }

    }

    componentDidMount () {

        this.getMarker();
        setInterval(() => {
            this.getMarker();
        }, 5000);

        // if(socket && !socket.connected) socket.connect()

        // socket.on('connect',() => console.log('CONECTADO SOCKET'));

        // socket.on('alarms',(msg) => {
        //     console.log(msg)
        // });
        // let ref = Firebase.database().ref('alarms-data');
        // ref.set({
        //     'hola': 'hola'
        //   });
        // ref.on('value', snapshot => {
        //     const state = snapshot.val();
        //     console.log(state)
        //     // this.setState(state);
        // });
       
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
                        <Container 
                            fluid={true}
                            id="ContainerOfList" 
                        >
                            <ContentList
                                Title = {'Emergencias Entrantes'}
                                Data = { this.state.emergencias }
                                handleEmergency = {this.handleEmergency}
                            />
                            <ContentList
                                Title = {'Emergencias Procesadas'}
                                Data = { this.state.process }
                            />
                        </Container>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default DashboardPage;