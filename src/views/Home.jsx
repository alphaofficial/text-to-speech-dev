import React, {Component, Fragment} from 'react'
import Main from './../components/Main'
import Nav from './../components/Nav'

export default class Home extends Component{
    constructor(){
        super();
        this.state = {}
    }

    render(){
        return(
           <Fragment>
            <Nav />
            <Main />
           </Fragment>
        )
    }
}