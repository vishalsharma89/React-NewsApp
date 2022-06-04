import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, source, author, date } = props;
    return (
        <div className='my-3  text-white'>
            <div className="card bg-dark" >
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1' }}>
                    {source}
                </span>
                <img src={!imageUrl ? "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/HNW_illustrations_v3-29.max-1000x1000.png" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-secondary">Read More</a>
                </div>
            </div>
        </div >
    )

}

export default NewsItem
