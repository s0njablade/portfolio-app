import React, { Component } from 'react'
import reactDOM from 'react-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import BackgroundMain from './components/BackgroundMain'
import SideDrawer from './components/Hamburger/SideDrawer'
import Backdrop from './components/Backdrop'
import './App.css'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop unclick={this.backdropClickHandler}/>
    }


    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {Backdrop}
        <Homepage />
        <BackgroundMain />
        
      </div>
    );
  }
}

export default App;

