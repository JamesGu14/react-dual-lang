import React, { Component } from 'react'

export default class ForyoungPty extends Component {
    render () {
        return (
            <div className="trd-about-us-details-section trd-section">
            <br /><br /><br />
                <div className="container">

                    <div className="row">
                        <div className="col-md-8 col-md-offset-2" style={{textAlign: 'center'}}>
                            <h2 className="trd-content-inner-title" style={{ marginBottom: '0' }}>For Young Pty Ltd</h2>
                            <h5 className="trd-content-inner-title" style={{ fontSize: '16px' }}>(ACN 167 191 200)</h5>    
                        </div>
                    </div>


                    <div className="row">
                        {/* Image with details */}
                        <div className="trd-inner-section">
                            <div className="trd-left-half">
                            
                                <h2 className="trd-content-inner-title">IGA Supermarket</h2>
                                <p style={{textAlign: 'justify'}}>
                                    In August 2014, For Young Pty Ltd acquired the IGA Hutt Street supermarket in Adelaide, South Australia. Under the 
                                    long-term layout and efficient management of For Young Pty Ltd, the sale performance of the supermarket had great 
                                    progress, and in just one year’s time, it has been listed among the most profitable IGA stores in South Australia.
                                    <br /><br />
                                    
                                    IGA Hutt Street supermarket was invited by South Australia's most well-known newspaper Advertiser for an exclusive 
                                    interview (the picture shows the supermarket manager LEE WU been interviewed). At the same time, IGA Suppermarket as 
                                    a For Young Investments Pty Ltd’s subsidiary, adheres to the fine tradition of the mother company in the creation of 
                                    their own value, as well as rewarding the community, e.g. support community activities, donate to charity organizations, 
                                    and received a number of recognition. The charity activities include supporting charity organizations for disabled 
                                    people like SCOSA, the Royal Institute for Deaf and Blind Children, and others.
                                    
                                </p>
                                <br />
                            </div>
                
                            <div className="trd-right-half">
                                <div className="trd-image-wrapper">
                                <img src="../../../content/images/foryoung-pty.jpg" alt="About us" /><br /><br />
                                
                                </div>
                            </div>
                        </div>
                        {/* End */}
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="trd-image-wrapper">
                                <img src="../../../content/images/foryoung-pty-2.jpg" alt="About us" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="trd-image-wrapper">
                                <img src="../../../content/images/foryoung-pty-3.png" alt="About us" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="trd-image-wrapper">
                                <img src="../../../content/images/foryoung-pty-4.jpg" alt="About us" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}