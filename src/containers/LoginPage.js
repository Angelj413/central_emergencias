import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

//Assets
import 'assets/styles/LoginPage.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path : this.props.match.path,
      username : '',
      password : '',
      showMsg : false
    };
  }

  componentDidMount(){
    if (localStorage.getItem('tokenUser')) {
      let from = {pathname: '/dashboard' }
      this.props.history.push(from);
    }
  }

  change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    this.setState({ showMsg : false }) 
    if(this.state.username == "central@rescate.com"){
      localStorage.clear();
      localStorage.setItem('tokenUser', "central@rescate.com");
      this.props.history.push({pathname: '/dashboard' });
    }else{
      this.setState({ showMsg : true })
    }
  }

  render () {
    return (
      <Container id="ContainerLogin" fluid={true}>
        <Row id="RowLogin">
          <Col id="ColLoginCenter" md={{ span: 6, offset: 3 }}>
          <div className="ContinerFormLogin">
            {
              this.state.showMsg ?
              <div className="MsgErrorLogin">
                <p>
                  Username or Password Incorrect
                </p>
              </div>
              :
              null
            }
            <Form>
              <div className="form-group">
                <label className="form-label">
                  Email
                </label>
                <input 
                  placeholder="Enter email" 
                  type="email" 
                  id="formBasicEmail"
                  className="form-control"
                  name = "username" 
                  onChange={ e => this.change(e) }  
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Password
                </label>
                <input 
                  placeholder="Password" 
                  type="password" 
                  className="form-control"
                  name = "password" 
                  onChange={ e => this.change(e) }  
                />
              </div>
              <div className="DivButtonLogin">
                <Button variant="primary"
                  onClick={ () => this.handleSubmit() }
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
          </Col>
        </Row>
      </Container>
    )
  }
}