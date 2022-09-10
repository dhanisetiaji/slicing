import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpShort, BsArrowRightShort } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { HiUpload } from 'react-icons/hi'
import { IoReorderThreeOutline, IoCloseSharp } from 'react-icons/io5'

const Navbar = () => {
    return (<>
        <nav className="navbar navbar-expand-md mt-2 mb-3">
            <button className="navbar-toggler" data-bs-toggle="modal" data-bs-target="#modalmenu" type="button" >
                <IoReorderThreeOutline className='toggle-icon' />
            </button>
            <div className="navbar-brand">
                <Link className='navbar-brand' to="/"><b>Social</b>Network</Link>
            </div>
            <div className="d-block d-md-none">
                <HiUpload className='icon-nav-mobile' data-bs-toggle="modal" data-bs-target="#modalupload" />
                <FaUserAlt className='icon-nav-mobile-user' data-bs-toggle="modal" data-bs-target="#modalupload" />
            </div>
            <div className="navbar-collapse d-none d-md-block">
                <ul className="navbar-nav mx-auto px-3 search">
                    <div className="article-search-bar">
                        <input type="text" placeholder="Find..." />
                        <FiSearch className="search-icon" />
                    </div>
                </ul>
                <div className="btn-group">
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalupload"><BsArrowUpShort className='icon-nav' /> Upload</button>
                    <div className="row p-0 user-nav" data-bs-toggle="modal" data-bs-target="#modalupload">
                        <div className="col-md-6 p-0">
                            <div className="bg-icon d-flex"><FaUserAlt className='icon-user' /></div>
                        </div>
                        <div className="col-md-6 text-start text-wrappers">
                            <div className="text-wrapper">
                                <p className='name m-0 p-0'>Waseem</p>
                                <p className='name-sec m-0 p-0'>Arshad</p>
                            </div>
                            <p className='notification'>10</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
        <div className="modal fade" id="modalupload" tabIndex="-1" aria-labelledby="modalupload" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-centered">
                <div className="modal-content">
                    <div className="container">
                        <div className="modal-header justify-content-center align-content-center uploadpadding">
                            <div className="img-fly">
                                <img src="../../img/user.jpg" className='img-rounded' alt="user" />
                            </div>
                            <div className='namemodaluser w-100'>
                                <h5>Waseem Ahmad</h5>
                                <h6>UI/UX Desainer</h6>
                                <button className='btn btn-secondary w-100' ><HiUpload className='icon-nav-modal' />Start Upload</button>
                            </div>

                        </div>
                    </div>
                    <div className="modal-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Edit Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Security</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer text-center justify-content-center">
                        <p className="logout">logout <BsArrowRightShort className='icon-logout' /> </p>
                        <button type="button" className="btn-close btn-overlay" data-bs-dismiss="modal" aria-label="Close"><IoCloseSharp className='closeModal' /></button>
                    </div>

                </div>
            </div>
        </div>
        <div className="modal fade" id="modalmenu" tabIndex="-1" aria-labelledby="modalmenu" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-centered">
                <div className="container">
                    <div className="modal-content">
                        <div className="container">
                            <div className="modal-header justify-content-center">
                                <h5 className="modal-title text-center" id="modal-title">Main Menu</h5>
                            </div>
                        </div>
                        <div className="modal-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Videos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">People</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Document</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Events</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Comunities</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Favorites</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Channel</Link>
                                </li>
                            </ul>
                            <div className="text-center justify-content-center">
                                <button type="button" className="btn-close btn-overlay-body" data-bs-dismiss="modal" aria-label="Close"><IoCloseSharp className='closeModal' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Navbar