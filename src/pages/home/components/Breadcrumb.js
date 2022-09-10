import React from 'react'
import { Link } from 'react-router-dom'
import './components.scss'

const Breadcrumb = () => {
    return (
        <div className="breadcrumb-wrappers d-none d-md-block">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={'/'}>Videos</Link></li>
                    <li className="breadcrumb-item"><Link to={'/'}>People</Link></li>
                    <li className="breadcrumb-item"><Link to={'/'}>Documents</Link></li>
                    <li className="breadcrumb-item"><Link to={'/'}>Events</Link></li>
                    <li className="breadcrumb-item"><Link to={'/'}>Comunities</Link></li>
                    <li className="breadcrumb-item"><Link to={'/'}>Favorites</Link></li>
                    <li className="breadcrumb-item"><Link to={'/'}>Channel</Link></li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumb