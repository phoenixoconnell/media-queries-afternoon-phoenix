import React from 'react'
import './Header.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <header>
                <div>
                    <h2 className='start-bootstrap'>Start Bootstrap</h2>
                </div>
                <div>
                    <ul id='site-nav'>
                        <li className='menu-text'>SERVICES</li>
                        <li className='menu-text'>PORTFOLIO</li>
                        <li className='menu-text'>ABOUT</li>
                        <li className='menu-text'>TEAM</li>
                        <li className='menu-text'>CONTACT</li>
                    </ul>
                </div>
            </header>
        )
    }
}