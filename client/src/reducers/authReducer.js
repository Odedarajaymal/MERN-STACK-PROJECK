import {FETCH_USER} from '../actions/type'


export default  (state={},action)=>{
    console.log(action)
    switch(action.type){
        case FETCH_USER :
            return action.payload || false
        default:
            return state
    }
}