import React, { Component } from 'react'
import axios from 'axios'

import Movie from '../Movie/Movie'

export default class Genres extends Component {

    state ={
        genres:[],
        movies:[],
        apiKey:'eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2pGmmMJfL53BxRog3ai3uoUrlo2nCynnkjo2c37XBxFaBcO6dfIQXPJHI',
        apiCategory:'https://api.themoviedb.org/3/genre/movie/list',
        imgStart : 'https://image.tmdb.org/t/p/w500/',
        genreSearch:'Action',
        genreID:'18'
    }
    getGenres= async()=>{
        let {data} = await axios.get(`${this.state.apiCategory}?api_key=${this.state.apiKey}&language=en-US`)
        this.setState({genres:data.genres})
        // console.log(data);
    }

    getMovies= async()=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.state.apiKey}&with_genres=${this.state.genreID}`)
        this.setState({movies:data.results})
        // console.log(data);
    }

    updateGen =(e)=>{
        this.state.genreSearch = e.target.innerHTML
        this.state.genreID = e.target.attributes.genreID.value
        this.setState({ genereSearch:this.state.genreSearch})
        this.getMovies()
    }
    componentDidMount(){
        this.getGenres()
        this.getMovies()
        
    }

  render() {
    
    return (
      <>
      <div className="row">

        <div className="col-md-2">
            <div className="genre">
            <ul className='navbar-nav'>
            {this.state.genres.map((item)=>
                
                <li key={item.id}
                    onClick={(e)=>(this.updateGen(e))}
                    className='nav-item mt-2 btn btn-warning'
                    genreID={item.id}
                    >
                    
                    {item.name}
                
                </li>
                
      
            )}
            </ul>
            </div>
        </div>
        <div className="col-md-10">
            <div className="genre-title text-white">
               <h2>Genre : {this.state.genreSearch}</h2> 
            </div>
            
            <div className="row mt-4">
            {this.state.movies.map(
            (movie)=>
            <Movie 
            key={movie.id} 
            movie={movie}
            
            />)}
        
      </div>
        </div>
      </div>

      
      </>
    )
  }
}
