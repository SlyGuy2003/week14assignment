import React from 'react'
import { render } from 'react-dom'

export default class ReviewForm extends React.Component{
    constructor(props){
    super(props)
    } 


render() {
    return(
        <form>
            <h3>Leave a review here:</h3>
            <input className='form-control' placeholder='Review'></input>
            <button className='form-control btn btn-primary'>Submit</button>
        </form>
    ) 
}
}