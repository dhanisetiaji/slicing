import React from 'react'
import Navbar from '../components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import './home.scss'
import { BsArrowRightShort, BsArrowUpCircle } from 'react-icons/bs'
import { AiFillCamera } from 'react-icons/ai'
import Footer from '../components/Footer'

const IndexHome = () => {
    return (<>
        <div className="container">
            <Navbar />
            <Breadcrumb />
            <div className="main-content">
                <div className="row">
                    <div className="col-md-8 d-none d-md-block">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Videos</h4>
                            </div>
                            <div className="col-md-4">
                                <p className='my-auto text-end' style={{ 'font-size': '12px', 'cursor': 'pointer' }}>Browse all videos</p>
                            </div>
                        </div>
                        <div className="row dekstop">
                            <div className="col-md-8  mb-3">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <h6 className='title-news'>How to imporve your skills</h6>
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <div className="list-item">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <div className="d-flex justify-content-between">
                                            <p className="name-news m-0">Wareen Ahmad</p>
                                            <p className="like-news m-0">12.1k views</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news my-auto">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item-upload d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-between upload-wrappers">
                                        <BsArrowUpCircle className='upload-news' />
                                        <p className='upload-name-news'>Upload Your Own Video</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 d-block d-md-none">
                        <div className="d-flex justify-content-between mb-3">
                            <h4>Videos</h4>
                            <p className='my-auto' style={{ 'cursor': 'pointer' }}>Browse all videos <BsArrowRightShort /> </p>
                        </div>
                        <div className="list-wrapers-mobile">
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <div className="title-activiy d-flex justify-content-between">
                                <h4>Activity</h4>
                                <p className='my-auto text-end' style={{ 'font-size': '12px', 'cursor': 'pointer' }}>View timeline/View activities</p>
                            </div>
                            <div className="row mt-4 sidebar-wrapper">
                                <div className="col-4">
                                    <div className="list-activiy">
                                        <div className="list-sidebar-item">
                                            <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="list-activiy">
                                        <div className="w-100">
                                            <span className='name-activity'><b className='name-title-activity'>Warren Hue</b> added new photo</span>
                                            <p className="desc-activity m-0">"How to become an expert"</p>
                                            <p className='time-activity'><AiFillCamera className='icon-time-activity' />2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="list-activiy">
                                        <div className="list-sidebar-item">
                                            <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="list-activiy">
                                        <div className="w-100">
                                            <span className='name-activity'><b className='name-title-activity'>Warren Hue</b> added new photo</span>
                                            <p className="desc-activity m-0">"How to become an expert"</p>
                                            <p className='time-activity'><AiFillCamera className='icon-time-activity' />2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="list-activiy">
                                        <div className="list-sidebar-item">
                                            <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="list-activiy">
                                        <div className="w-100">
                                            <span className='name-activity'><b className='name-title-activity'>Warren Hue</b> added new photo</span>
                                            <p className="desc-activity m-0">"How to become an expert"</p>
                                            <p className='time-activity'><AiFillCamera className='icon-time-activity' />2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="list-activiy">
                                        <div className="list-sidebar-item">
                                            <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="list-activiy">
                                        <div className="w-100">
                                            <span className='name-activity'><b className='name-title-activity'>Warren Hue</b> added new photo</span>
                                            <p className="desc-activity m-0">"How to become an expert"</p>
                                            <p className='time-activity'><AiFillCamera className='icon-time-activity' />2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="list-activiy">
                                        <div className="list-sidebar-item">
                                            <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="list-activiy">
                                        <div className="w-100">
                                            <span className='name-activity'><b className='name-title-activity'>Warren Hue</b> added new photo</span>
                                            <p className="desc-activity m-0">"How to become an expert"</p>
                                            <p className='time-activity'><AiFillCamera className='icon-time-activity' />2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="list-activiy">
                                        <div className="list-sidebar-item">
                                            <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="list-activiy">
                                        <div className="w-100">
                                            <span className='name-activity'><b className='name-title-activity'>Warren Hue</b> added new photo</span>
                                            <p className="desc-activity m-0">"How to become an expert"</p>
                                            <p className='time-activity'><AiFillCamera className='icon-time-activity' />2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 d-none d-md-block mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>People</h4>
                            </div>
                            <div className="col-md-4">
                                <p className='my-auto text-end' style={{ 'font-size': '12px', 'cursor': 'pointer' }}>View all</p>
                            </div>
                        </div>
                        <div className="row dekstop">
                            <div className="col-md-8  mb-3">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <h6 className='title-news'>How to imporve your skills</h6>
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <div className="list-item">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <div className="d-flex justify-content-between">
                                            <p className="name-news m-0">Wareen Ahmad</p>
                                            <p className="like-news m-0">12.1k views</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news my-auto">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item-upload d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-between upload-wrappers">
                                        <BsArrowUpCircle className='upload-news' />
                                        <p className='upload-name-news'>Show your work</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-4">
                                <h4>Documents</h4>
                            </div>
                            <div className="col-md-4">
                                <p className='my-auto text-end'>Browse all documents</p>
                            </div>
                        </div>
                        <div className="row dekstop">
                            <div className="col-md-8  mb-3">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <h6 className='title-news'>How to imporve your skills</h6>
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mb-3">
                                    <div className="list-item">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <div className="d-flex justify-content-between">
                                            <p className="name-news m-0">Wareen Ahmad</p>
                                            <p className="like-news m-0">12.1k views</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news my-auto">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item">
                                    <img src="../../img/news.jpg" className='img-news' alt="news" />
                                    <div className="d-flex justify-content-between">
                                        <p className="name-news m-0">Wareen Ahmad</p>
                                        <p className="like-news m-0">12.1k views</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="list-item-upload d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-between upload-wrappers">
                                        <BsArrowUpCircle className='upload-news' />
                                        <p className='upload-name-news'>Share your documents</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 d-block d-md-none mt-5">
                        <div className="d-flex justify-content-between mb-3">
                            <h4>People</h4>
                            <p className='my-auto' style={{ 'font-size': '12px', 'cursor': 'pointer' }}>View all <BsArrowRightShort /> </p>
                        </div>
                        <div className="list-wrapers-mobile">
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 d-block d-md-none mt-5">
                        <div className="d-flex justify-content-between mb-3">
                            <h4>Document</h4>
                            <p className='my-auto' style={{ 'font-size': '12px', 'cursor': 'pointer' }}>Browse all document <BsArrowRightShort /> </p>
                        </div>
                        <div className="list-wrapers-mobile">
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                            <div className="list-item-mobile">
                                <img src="../../img/news.jpg" className='img-news' alt="news" />
                                <h6 className='title-news'>How to imporve your skills</h6>
                                <p className='name-news p-0'>Wareen Ahmad</p>
                                <p className='like-news p-0 m-0'>12.1K views</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4   mt-5">
                        <div className="container">
                            <div className="title-activiy d-flex justify-content-between">
                                <h4>Channel</h4>
                                <p className='my-auto' style={{ 'font-size': '12px', 'cursor': 'pointer' }}>Browse your channels</p>
                            </div>
                            <div className="row sidebar-wrapper">
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="list-sidebar-item mt-3">
                                        <img src="../../img/news.jpg" className='img-news' alt="news" />
                                        <h4 className='title'>Google</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default IndexHome