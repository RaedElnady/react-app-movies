import React, { Component } from 'react'
import axios from 'axios'
import Movie from '../Movie/Movie'


export default class Search extends Component {

    state={
        movies:[],
        apiKey:'eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2pGmmMJfL53BxRog3ai3uoUrlo2nCynnkjo2c37XBxFaBcO6dfIQXPJHI',
        searchKey:'',
        searchStore:''
      }
    
      searchMovies= async()=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&language=en-US&page=1&include_adult=false&query=${this.state.searchKey}`)
        this.setState({movies:data.results})
      }
      
      searchValue(){
        let searchInput =document.getElementsByClassName('search-input');
        this.setState({searchKey:searchInput[0].value})
        
        if(this.state.searchKey !==''){
          this.searchMovies()
        }
        
      }


  render() {
    return (
        <>
        <div className="search-body min-vh-100">
        <div className='mt-3 d-flex justify-content-center'>
        
        <input onKeyUp={()=>{this.searchValue()}} 
        className="form-control search-input w-50" 
        type="search" 
        placeholder="Search By Movie Name"/>
        

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
      </>
    )
  }
}
