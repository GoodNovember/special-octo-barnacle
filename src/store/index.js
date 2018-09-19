import { createStore, combineReducers } from "redux"
import historyReducer, { history, SetPathname } from "../history/duck"
import routesReducer, { MakeRegisterPathBatch } from "../router/duck"

import * as PAGES from "../pages"

const masterReducer = combineReducers({
	history:historyReducer,
	routes:routesReducer,
})

export const store = createStore(masterReducer)

const {dispatch} = store

const SetHistoryPathname = (pathname) => dispatch(SetPathname(pathname))

const ignoreHistoryUpdates = history.listen((location)=>{ 
	SetHistoryPathname(location.pathname)
})

SetHistoryPathname(history.location.pathname)

// this is to help ensure we only register the pages once and only once.
window.addEventListener("load",()=>{
	MakeRegisterPathBatch(PAGES).map(action=>store.dispatch(action))
})
