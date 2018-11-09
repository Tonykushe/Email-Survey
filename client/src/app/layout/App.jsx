import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchUser } from "../../features/auth/authActions";
import { Route } from "react-router-dom";
import NavBar from "../../features/nav/NavBar/NavBar";
import landing from '../../features/landing/landing'
import SurveyDashboard from '../../features/survey/SurveyDashboard/SurveyDashboard'


const actions = {
    fetchUser
}


class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return <div className="container">
            <NavBar />
            <Route exact path="/" component={landing} />
            <Route path="/surveys" component={SurveyDashboard} />
          </div>
    }
}


export default connect(null, actions)(App);