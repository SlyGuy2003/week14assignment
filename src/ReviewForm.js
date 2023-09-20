import React from 'react'
import { render } from 'react-dom'
import Stars from './Stars.js'
import './reviewform.css'

export default class ReviewForm extends React.Component{
    constructor(props){
    super(props)

    this.state = { //state used to hold the new reviews
        rating: 0,
        text: '',
        review: this.props.Reviews
    }
    } 

    handletext(e) { // updates the state based on what is written down in the text box
        this.setState({text: e.target.value})
    }

    handleStars(newRating) { // updates the state based on how many stars were selected
        this.setState({rating: newRating})
    }

    handleSubmit(e) { // updates the state and pushes the review to the review array.... but i cant get to work even after wataching the video:(
        e.preventDefault()
        const review = {
            rating: this.state.rating,
            text: this.state.text
        }
        this.props.Reviews.push(review)
        this.setState({review: this.props.Reviews})
    }


render() {
    return( // the review form with all of its event listeners added and styling
        <form onSubmit={(e) => this.handleSubmit(e)} className='bg-light text-center rounded'>
            <h3>\/ Leave a review here \/</h3>
            <Stars handleStars = {this.handleStars.bind(this)} className = 'text-center'></Stars>
            <input className='form-control' placeholder='Review' size="100" onChange={(e) => this.handletext(e)}></input>
            <button className='form-control btn btn-primary'>Submit</button>
        </form>
    ) 
}
}