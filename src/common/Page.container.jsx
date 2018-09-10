import React, { Component } from "react"
import { Page as PageComp } from "./Page.component"
export class Page extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const {props} = this
		return <PageComp {...props}/>
	}
} 