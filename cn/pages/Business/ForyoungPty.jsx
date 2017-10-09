import React, { Component } from 'react'

export default class ForyoungPty extends Component {
    render () {
        return (
            <div className="trd-about-us-details-section trd-section">
            <br /><br /><br />
                <div className="container">
                    <div className="row">
                        {/* Image with details */}
                        <div className="trd-inner-section">
                            <div className="trd-left-half">
                            
                                <h2 className="trd-content-inner-title">IGA连锁超市</h2>
                                <p>
                                澳洲飞扬有限公司在2014年8月全资收购南澳州阿德莱德IGA Hutt Street超市，在飞扬管理层的长远布局和精心管理下，超市销售业绩得到了长足的进步，
                                并在短短一年时间内，跻身南澳州IGA商店利润排行榜前列.
                                <br /><br />
                                
                                IGA Hutt Street超市被受邀参加南澳州最为知名报业Advertiser的独家专访（图为超市经理LEE WU接受采访的图片）。于此同时，IGA HUTT ST作为
                                飞扬子公司秉承了飞扬的优良传统，在创造自身价值的同时，积极的回馈社会例如支持社区活动，捐助慈善组织，并获得了多项表彰。慈善组织包括帮助致力残
                                疾人的慈善组织SCOSA还有澳洲盲聋慈善机构Royal Institute for Deaf and Blind Children等其他慈善机构。
                                
                                </p>
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
                                <img src="../../../content/images/foryoung-pty-2.jpg" alt="About us" /><br /><br />
                                <img src="../../../content/images/foryoung-pty-5.jpg" alt="About us" />
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