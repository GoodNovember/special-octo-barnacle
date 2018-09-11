import React, {Component} from "react"

import { createBEM } from "./createBEM"

// export const BEM = ({block,element,modifier,className,...props}) => <div className={createBEM({block,element,modifier,className})} {...props}/>
export class BEM extends Component{
	render(){
		const {block,element,modifier,className,...props} = this.props
		return (
			<div className={createBEM({block,element,modifier,className})} {...props}/>
		)
	}
}