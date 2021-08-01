import React from 'react'

const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeInLeft">
            <img src={url} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default GifGridItem
