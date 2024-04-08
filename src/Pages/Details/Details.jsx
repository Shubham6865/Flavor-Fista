import React from 'react'

const Details = ({ title, url }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={url} alt={title} />
            {/* Add more details or content here */}
            <h2>Detail page</h2>
        </div>
    );
}

export default Details
