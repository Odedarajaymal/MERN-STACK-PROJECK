import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import * as actions from '../actions'
import {connect} from 'react-redux'
import SurveyNew from './surveys/newsurvey'


import Deshbord from './desabord'

const Leading = ()=>{
  return(
    <div style={{textAlign: 'center'}}>
      <h1>Emaily</h1>
       Collect feedback form user
    </div>
  )
} 


class App extends Component {
   componentDidMount() {
     this.props.fetchUser();
   }
 
   render() {
     return (
       <div className="container">
         <BrowserRouter>
           <div>
             <Header />
             <Route exact path="/" component={Leading} />
             <Route exact path="/surveys" component={Deshbord} />
             <Route path="/surveys/new" component={SurveyNew} />
           </div>
         </BrowserRouter>
       </div>
     );
   }
 }
 
 export default connect(null, actions)(App);