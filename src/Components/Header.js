import React from 'react'
import './Header.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            expand: false
        }
    }

    menuClick = () => {
        console.log('click')
        this.setState({
            expand: !this.state.expand
        })
    }

    render() {
        return (
            <header id='header-container'>
                <div>
                    <div className='header'>
                        <div>
                            <span className='start-bootstrap'>Start Bootstrap</span>
                        </div>
                        <div id='hamburger-menu' onClick={this.menuClick}><span>MENU </span><i className="fas fa-bars"></i></div>
                        <ul id={this.state.expand ? 'site-nav-expand' : 'site-nav-contract'}>
                            <li className='menu-text'>SERVICES</li>
                            <li className='menu-text'>PORTFOLIO</li>
                            <li className='menu-text'>ABOUT</li>
                            <li className='menu-text'>TEAM</li>
                            <li className='menu-text'>CONTACT</li>
                        </ul>
                    </div>
                </div>
                <div className='welcome-container'>
                    <h3>Welcome To Our Studio!</h3>
                    <h2>IT'S NICE TO MEET YOU</h2>
                    <button>TELL ME MORE</button>
                </div>
            </header>
        )
    }
}