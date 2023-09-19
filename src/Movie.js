import React from 'react'
import ReviewList from './ReviewList'
import Stars from './Stars'
import ReviewForm from './ReviewForm'
import './movie.css'
export default class Movie extends React.Component{
    constructor(props){
        super(props)

        this.moviecard = this.moviecard.bind(this)
        } 

        movie1ReviewArray = [
            {review1: ""}
        ]
       

        moviecard(props) {
            return(
                <div id = 'movie-div'className='col-sm container p-1'>
                <div className='row card bg-dark'>
                    <div className='card-header'>
                    <h3 className='text-white'>{props.Title}</h3>
                    <img className='rounded' src = {props.coverImage}></img>
                    <div className='card-body'>
                    <Stars></Stars>
                    <p className='text-white'>{props.Rating}</p>
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

