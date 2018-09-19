import createHistory from "history/createBrowserHistory"

import { combineReducers } from "redux"

import * as TYPES from "./types"

export const history = createHistory()

const INITIAL_PATHNAME = '/'

const pathnameReducer = (state=INITIAL_PATHNAME, {type, payload}) => {
	switch(type){
		case TYPES.RESET:{
			return INITIAL_PATHNAME
		}
		case TYPES.SET_PATHNAME:{
			const { pathname } = payload
			if(typeof pathname === 'string'){
				return pathname
			}else{
				return state
			}
		}
		default: return state
	}
}

const historyReducer = combineReducers({
	pathname:pathnameReducer,
})

export default historyReducer

export const SetPathname = (pathname) => ({type:TYPES.SET_PATHNAME, payload:{pathname}})
export const ResetPathname = () => ({types:TYPES.RESET, payload:{}})