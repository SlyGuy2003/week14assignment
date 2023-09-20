import React from 'react'
import './review.css'
import { Rating } from '@mui/material'

export default class Review extends React.Component{
    constructor(props) {
        super(props)

        this.review = props.review
    }

    render() {
        return(// compiles and creates the review part of the movie 
            <div className='bg-light text-center rounded'>
                <Rating className='text-center' value = {this.review.rating} readOnly ></Rating>
                <p>{this.review.text} </p>
            </div>
        )
    }
}