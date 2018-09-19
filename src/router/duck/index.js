import * as types from "./types"

export const routesReducer = (state={}, {type, payload}) => {
    switch(type){
        case types.REGISTER_PATH:{
            const { path, component } = payload
            return Object.assign({}, state, {[path]:component})
        }
        default:{
            return state
        }
    }
}

export default routesReducer

export const RegisterPath = (path, component) => ({ type:types.REGISTER_PATH, payload:{path, component} })

export const MakeRegisterPathBatch = (pages) => {
	const output = []
    if(typeof pages === "object" && pages){
        const pageArray = Object.keys(pages).map((key)=>(pages[key])) || []
        pageArray.map(page=>{
            if(typeof page.path === "function"){
                const path = page.path()
                const component = page
                if(path && component){
                    output.push(RegisterPath(path, component))
                }
            }else if(typeof page.path === "string"){
                const {path} = page
                const component = page
                if(path && component){
                    output.push(RegisterPath(path, component))
                }
            }
        })
	}
	return output
}
