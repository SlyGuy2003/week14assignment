import React from 'react'
import { render } from 'react-dom'
import Stars from './Stars.js'
import './reviewform.css'

export default class ReviewForm extends React.Component{
    constructor(props){
    super(props)

    this.state = {
        rating: 0,
        text: '',
        review: this.props.Reviews
    }
    } 

    handletext(e) {
        this.setState({text: e.target.value})
    }

    handleStars(newRating) {
        this.setState({rating: newRating})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.props)
        const review = {
            rating: this.state.rating,
            text: this.state.text
        }
        this.props.Reviews.push(review)
        this.setState({review: this.props.Reviews})
    }


render() {
    return(
        <form onSubmit={(e) => this.handleSubmit(e)} className='bg-light text-center rounded'>
            <h3>\/ Leave a review here \/</h3>
            <Stars handleStars = {this.handleStars.bind(this)} className = 'text-center'></Stars>
            <input className='form-control' placeholder='Review' size="100" onChange={(e) => this.handletext(e)}></input>
            <button className='form-control btn btn-primary'>Submit</button>
        </form>
    ) 
}
}