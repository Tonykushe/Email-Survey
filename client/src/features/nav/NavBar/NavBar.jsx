import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapState = (state) => ({
    auth: state.auth
})

class NavBar extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 
                
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>
        
            default:
                return <li> <a href="/api/logout">Logout</a></li>
                
        }
    }
    render() {
        // const { auth } = this.props
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link 
                        to={ this.props.auth ? '/surveys' : '/'} 
                        className='left brand-logo'
                    >
                        Emaily
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default connect(mapState)(NavBar)
