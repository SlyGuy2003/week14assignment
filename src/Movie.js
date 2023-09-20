import React from 'react'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import './movie.css'
export default class Movie extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            review: props.Review
        }

        this.moviecard = this.moviecard.bind(this) // binding the named function so it properly works
        } 

       

        moviecard(props) { // function that creates the entire movie component including all the review peices
            return(
                <div id = 'movie-div'className='col-sm text-center p-1'>
                <div className='row card bg-dark'>
                    <div className='card-header'>
                    <h3 className='text-white'>{props.Title}</h3>
                    <img className='rounded' src = {props.coverImage}></img>
                    <div className='card-body'>
                    <p className='text-white'>{props.Rating}</p>
                    <ReviewList {...props} ></ReviewList>
                    
                    </div>
                    </div>
                </div>
                </div>
                )}

    render() {
        return(
            this.moviecard(this.props)
        )
        }
    }

