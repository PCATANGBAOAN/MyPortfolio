import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Contact from './Contact'


function Footer() {
    return (
        <div id="Footer">
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-sm-12 contact-form">
                            <h4 className="f-title">Let's talk!</h4>
                            <Contact/>
                        </div>

                        <div className="col-md-6 col-sm-12">

                        </div>
                        {/* <div className="col-md-4 col-sm-12">
                            <h4 className="f-title">Resources</h4>           
                            <ul className="list-unstyled">
                                <li className="s-items"><a href="/"><i class="fa fa-facebook"></i></a>https://www.brandcrowd.com</li>
                                <li className="s-items">https://unsplash.com/</li>
                                <li className="s-items">https://www.netlify.com/</li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <h4 className="f-title">Address</h4>
                            <li className="s-items"><a href="/"><i class="fa fa-facebook"></i></a>Antipolo, Philippines</li>
                                <li className="s-items">+639214768640</li>
                                <li className="s-items">paultangbaoan.pt@gmail.com</li>
                        </div> */}
                    
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Copyright | Paul Christian Armando Tangbaoan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
