import React, {Component} from "react"

import { FourOhFourPage } from "../pages"

import { connect } from "react-redux"

const getPage = (routes, pathname) => {
    let Output = FourOhFourPage
    if(typeof routes[pathname] === "function"){
        Output = routes[pathname]
    }
    return <Output/>
}

class InternalPageRouter extends Component{
    render(){
        return getPage(this.props.routes, this.props.pathname)
    }
}

const mapStateToProps = (state, ownProps) => {
    const { history, routes } = state
    const { pathname } = history

    const outputProps = {
        routes,
        pathname
    }

    return outputProps
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {}
}

export const PageRouter = connect(mapStateToProps,mapDispatchToProps)(InternalPageRouter)