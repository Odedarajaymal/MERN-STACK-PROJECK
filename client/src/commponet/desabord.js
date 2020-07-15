import React from 'react'
import {Link}from 'react-router-dom'
import Surveylist from './surveys/Surveylist'


const Deshbord = ()=>{
    return(
        <div>
            <Surveylist/>
              <div className="fixed-action-btn">
              <Link to={'/surveys/new'} class="btn-floating btn-large waves-effect waves-light red">
                  <i class="material-icons">add</i>
                </Link >
                </div>
        </div>
    )
}

export default Deshbord