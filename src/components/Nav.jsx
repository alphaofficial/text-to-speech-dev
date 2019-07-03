import React, {Fragment, Component} from 'react'


export default class Nav extends Component{
    
    render(){
        return(
            <Fragment>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
                </nav>
            </Fragment>
        )
    }
}