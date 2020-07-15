import React, { Component } from 'react';
import Surveyform from './surveyform'
import Surveyfieldreview from './Surveyfieldreview'
import {reduxForm} from 'redux-form'


class SurveyNew extends Component {
   state = {
       surveyreview: false
   }
   renderContent(){
       if(this.state.surveyreview){
           return <Surveyfieldreview onCancel={()=>this.setState({surveyreview:false})}/>
       }

     return  <Surveyform onSurveySubmit={()=>this.setState({surveyreview:true}) }/>
   }


    render(){
        return(
            <div style={{marginTop:'15px'}}>
           {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form:'surveyForm'
})(SurveyNew)