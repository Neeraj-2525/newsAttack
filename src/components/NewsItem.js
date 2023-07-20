import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;

        return (

            <div className='my-3'>
                <div className="card" >
                    <span className="badge rounded-pill bg-danger" style={{display:'flex', justifyContent:'flex-end', position: 'absolute', right:'0'}}>
                        {!source?"Unknown":source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
