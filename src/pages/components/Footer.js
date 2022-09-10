import React from 'react'
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <button className="btn btn-primary" style={{ 'marginRight': '10px' }}><BsTwitter className='icon-footer' /></button>
                <button className="btn btn-primary" style={{ 'marginRight': '10px' }}><BsLinkedin className='icon-footer' /></button>
                <button className="btn btn-primary" style={{ 'marginRight': '10px' }}><BsFacebook className='icon-footer' /></button>
            </div>
            <div className="breadcrumb-footer mb-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'} className='footer-b'>About</Link></li>
                        <li className="breadcrumb-item"><Link to={'/'} className='footer-b'>For Business</Link></li>
                        <li className="breadcrumb-item"><Link to={'/'} className='footer-b'>Help & Faq</Link></li>
                        <li className="breadcrumb-item"><Link to={'/'} className='footer-b'>Contact</Link></li>
                    </ol>
                </nav>
            </div>
            <div className="text">
                <p className='m-0'>© Copyright 2022. Company Inc</p>
            </div>
            <div className="breadcrumb-footer">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={'/'} className='footer-b'>Privacy</Link></li>
                        <li className="breadcrumb-item"><Link to={'/'} className='footer-b'>Terms</Link></li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default Footer