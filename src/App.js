import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from "react-bootstrap";
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import './App.css';
import React from 'react';
import Dropdown from "./Modal/dropdown";

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      show:false
  }
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  render(){
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <img src="\icon.JPG" width="75" height="75" alt=" "/>
        <Container>
          <Navbar.Brand href="#Home">Location</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">CREATE DATA TEMPLATE</Nav.Link>
              <Nav.Link variant='light' onClick={()=>{this.handleModal()}}>ADD USER LAYER</Nav.Link>
              <Modal  show={this.state.show} onHide={()=>this.handleModal()}>
                <Modal.Header closeButton>
                  <Modal.Title style={{color: "#1f7fce"}}>Add a new user layer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <label className='label'>Select a file format of your document :</label>
                  <Dropdown/><br/>
                  <label className='label'>Name of the layer to be added</label><br/>
                  <input type="text" class="form-control newLayerInp" id="file_name" placeholder=""></input> <br/><br/>
                  <label className='label'>Upload file</label><br/>
                  <input type="file" id="file1" name="file" accept=".csv,.json,.geojson,.zip"></input>
                  <br/><br/>
                </Modal.Body>

                <Modal.Footer>
                <button type="submit" class="btnclr">Add Uploaded Layer</button>
                </Modal.Footer>
              </Modal>
              <Nav.Link href="#">DASHBOARD</Nav.Link>
              <Nav.Link href="#">CONFIGURE MAP</Nav.Link>
              <Nav.Link href="#">HELP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
}}

export default App;
