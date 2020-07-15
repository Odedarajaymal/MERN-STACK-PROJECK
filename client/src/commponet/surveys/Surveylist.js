import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchSurvey} from '../../actions/index'


class Surveylist extends Component {
    componentDidMount(){
        this.props.fetchSurvey()
      
    }
 
    renderSurvey(){
        return this.props.surveys.reverse().map(survey =>{
            return (
                <div  className="card blue-grey darken-1" key={survey._id}>
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <div className="card-action">
                            <a>YES : {survey.yes}</a>
                            <a>NO : {survey.no}</a>
                        </div>
                </div>
                </div>
            )
        })
     
    }

    render() {
        return (
            <div>
               {this.renderSurvey()}
            </div>
        )
    }
}

const mapStateToProps =({ surveys})=>{
 return {surveys}
}

export default connect(mapStateToProps,{fetchSurvey})(Surveylist)