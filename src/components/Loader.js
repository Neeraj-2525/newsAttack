import React, { Component } from 'react'
import loading from './loading.gif'

export class Loader extends Component {
    render() {
        return (
            <div className='container text-center'>
                <img src={loading} alt="loading" className="my-3" style={{width:'30px'}} />
            </div>
        )
    }
}


export default Loader
