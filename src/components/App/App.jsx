import React,{ Component } from "react";
import { Routes,Route } from "react-router-dom";
import Upcoming from "../Upcoming/Upcoming";
import Home from "../Home/Home";
import TopRated from "../TopRated/TopRated";
import Navbar from "../Navbar/Navbar";
import Trending from "../Trending/Trending";
import Notfound from "../NotFound/Notfound";
import Popular from "../Popular/Popular";
import NowPlaying from "../NowPlaying/NowPlaying";
import './app.css'
import Search from "../Search/Search";
import Genres from "../Genres/Genres";

export default class App extends Component
{
  
  render(){
    return (
      <>
      <div className="app-body">
      <Navbar/>
      <div className="container">
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="react-app-movies" element={<Home/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="search" element={<Search/>}></Route>
        <Route path="upcoming" element={<Upcoming/>}></Route>
        <Route path="toprated" element={<TopRated/>}></Route>
        <Route path="nowplaying" element={<NowPlaying/>}></Route>
        <Route path="trending" element={<Trending/>}></Route>
        <Route path="popular" element={<Popular/>}></Route>
        <Route path="genres" element={<Genres/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
        
      </Routes>
      </div>
      </div>
      </>
    )
  }
}