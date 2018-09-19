import "./ScrollBox.style"
import React, { Component, createRef } from "react"
import { findDOMNode } from "react-dom"
import { connect } from "react-redux"
import { BEM } from "../util/BEM"

const stateToProps = (state, ownProps) => {
	const { history } = state
	const { pathname } = history
	return { pathname }
}

const dispatchToProps = (dispatch, ownProps) => {
	return {}
}
class InternalScrollBox extends Component{
	constructor(props){
		super(props)
		this.elm = createRef()
		this.state = {
			knownPath:null
		}
	}
	componentDidUpdate(){
		const { props, state, elm } = this
		const { pathname } = props
		const { knownPath } = state
		const domElm = findDOMNode(elm.current)
		if(knownPath !== pathname){
			// if(domElm.scrollTop > 0){
			// 	domElm.scrollTop = 0
			// }
			this.setState({knownPath:pathname},()=>{
				console.log("SCROLL", domElm)
				domElm.scrollTop = 0
			})
		}
	}
	render(){ return ( <BEM block={'scroll-box'} { ...this.props } ref={ this.elm } /> ) }
}

const ScrollBox = connect( stateToProps, dispatchToProps )( InternalScrollBox )

export { ScrollBox }