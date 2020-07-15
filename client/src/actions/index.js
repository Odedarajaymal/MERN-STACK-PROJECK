import axios from 'axios'
import {FETCH_USER} from './type'
import {FETCH_SURVEY_USER} from './type'


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
  
    dispatch({ type: FETCH_USER, payload: res.data });
  };

  export const handletoken = (token)=>{
      return async(dispatch)=>{
       const res = await axios.post('/api/stripe',token)
         dispatch({ type: FETCH_USER, payload: res.data})
      }
  }

  export const submitSurvey = (values,history)=> {
    return async (dispatch)=>{
         const res = await axios.post('/api/surveys',values)
          history.push('/surveys')
         dispatch({ type: FETCH_USER, payload: res.data })
    }
  }

  export const fetchSurvey = ()=>{
    return async (dispatch)=>{
      const res= await axios.get('/api/surveys')
      dispatch({type:FETCH_SURVEY_USER, payload:res.data})
    }
  }

 


  