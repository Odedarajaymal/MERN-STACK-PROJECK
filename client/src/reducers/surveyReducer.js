import{FETCH_SURVEY_USER} from '../actions/type'


export default (state=[],action)=>{
  
     switch(action.type){
         case FETCH_SURVEY_USER:
             return action.payload
              default:
                 return state
     }
}