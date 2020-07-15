import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash';
import formFields from './formFields';
import {withRouter} from 'react-router-dom'
import * as actions from '../../actions'
const SurveyFieldreview = ({onCancel, formValue,submitSurvey,history})=>{
   const reviewform = _.map(formFields,field =>{
       return (
           <div key={field.name}>
               <div>
                 <label>{field.label}</label>
               </div>
               <div>
                   {formValue[field.name]}
               </div>
           </div>
       )
   })

    return(
        <div>
            <h1>please comform deatial</h1>
            {reviewform}
            <button style={{marginTop:'5px'}} onClick={onCancel} className="yellow darken-3 btn-flat"> 
               Back
            </button>
            <button style={{marginTop:'5px'}} onClick={()=> submitSurvey(formValue,history)} className='green btn-flat right'>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    )
}

const mapStateToProps =(state)=>{
  return {formValue:state.form.surveyForm.values}
}

export default connect(mapStateToProps,actions)(withRouter(SurveyFieldreview))