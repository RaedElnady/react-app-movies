import React, { Component } from 'react'
import notFound from '../../images/not-found-3.png'

export default class Notfound extends Component {
  render() {
    return (
        <>
      <div className='text-center p-5 mt-5'>
      <img className='w-50' src={notFound} alt="" />
      </div>
      
    </>
    )
  }
}
