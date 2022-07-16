import React, { Component } from 'react';
import './Movie.css';


export default class Movie extends Component {
  render() {
    let {original_title,title,poster_path,overview,vote_average,release_date}=this.props.movie;

    return (
      <>
      <div className="col-md-4 col-sm-6">
        <div className="mov text-center position-relative overflow-hidden rounded mb-3">
        <img className="w-100 mov-img" src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt="" />            
            <div className="mov-layer d-flex justify-content-center align-items-center text-center p-1">
                <h4>{original_title || title}</h4>
                <p>{overview}</p>
                <p>Rate :{vote_average}</p>
                <p>{release_date}</p>
            </div>
            
        </div>
        {/* Test Comment */}
      </div>
      </>
    )
  }
}
