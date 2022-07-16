import axios from 'axios'
import React, { Component } from 'react'
import Movie from '../Movie/Movie'

export default class Upcoming extends Component {

    state ={
        movies:[],
        apiKey:'eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2pGmmMJfL53BxRog3ai3uoUrlo2nCynnkjo2c37XBxFaBcO6dfIQXPJHI',
        apiCategory:'https://api.themoviedb.org/3/movie/upcoming',
        imgStart : 'https://image.tmdb.org/t/p/w500/'
    }
    getMovies= async()=>{
        let {data} = await axios.get(`${this.state.apiCategory}?api_key=${this.state.apiKey}`)
        this.setState({movies:data.results})
    }
    componentDidMount(){
        this.getMovies()
    }

  render() {
    
    return (
      <>
      
      <div className="row mt-4">
        {this.state.movies.map(
            (movie)=>
            <Movie 
            key={movie.id} 
            movie={movie}
            
            />)}
        
      </div>
      </>
    )
  }
}
