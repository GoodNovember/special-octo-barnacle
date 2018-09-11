import React, {Component} from "react"

import { createBEM } from "./createBEM"

const modChildren = (block, children) => Array.isArray(children) ? (children.map((Child)=><Child block={block} />)) : []

export class BEM extends Component{
	render(){
		const {block,elm,element,modifier,className,...props} = this.props
		const SubElm = elm
		return (!SubElm)?(
			<div className={createBEM({block,element,modifier,className})} {...props}/>
		):(
			<SubElm className={createBEM({block,element,modifier,className})} {...props}/>
		)
	}
}

export class Block extends Component{
	render(){
		const {name, elm, modifier, className, children, props} = this.props
		const moddedChildren = modChildren(name, children)
		const SubElm = elm
		return (!SubElm)?(
			<div className={createBEM({block:name, modifier, className})} {...props}>{moddedChildren}</div>
		):(
			<SubElm className={createBEM({block:name, modifier, className})} {...props}>{moddedChildren}</SubElm>
		)
	}
}

export class Element extends Component{
	render(){
		const {name, elm, block, modifier, className, children, props} = this.props
		const moddedChildren = modChildren(name, children)
		const SubElm = elm
		return (!SubElm)?(
			<div className={createBEM({block, element:name, modifier, className})} {...props}>{moddedChildren}</div>
		):(
			<SubElm className={createBEM({block, element:name, modifier, className})} {...props}>{moddedChildren}</SubElm>
		)
	}
}