import React from 'react'
import '../css/main.css'
import CardsEditor from './CardsEditor'
import CardsLatestAr from './CardsLatestAr'
import CardsLatestRev from './CardsLatestRev'
import BeautyRoupUp from './BeautyRoundUp'
import PopularGroup from './PopularGroup'
import LatestVideo from './LatestVideo'
import Trending from './Trending'
import TopBrands from './TopBrands'


export default function Main() {
    return (
        <div className="container">
            <div className="container-1">
                <div className="iklan-0">
                    <div className="iklan-banner-0">
                    </div>
                </div>
                <div className="iklan-1">
                    <div className="iklan-banner-1">
                    </div>
                </div>
                <div className="editr-ch">
                    <h2 className="title">Editor's Choice</h2>
                    <h3 className="grey">Curated with love</h3>
                    <CardsEditor />
                </div>
            </div>
            <div className="banner">
                <div className="banner-content">
                    <h2 className="banner-title">Psst! We give product matches that will be perfect for you!</h2>
                    <h3 className="persuade-word">They will fit your skin, hair, body,<br></br> AND they solve your beauty <br></br>concerns at the same time. Sign <br></br>up and complete your Beauty ID now!</h3>
                    <div className="log-sgnup">
                        <h3>Log In / Sign Up</h3>
                    </div>
                </div>
            </div>
            <div className="container-2">
                <div className="iklan-2">
                    <div className="iklan-banner-2">
                    </div>
                </div>
                <div className="section-ar">
                    <h2 className="title">Latest Article</h2>
                    <div className="see-more">
                        <h3 className="grey">Unravel more beauty</h3>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h3 style={{ color: '#db284e' }}>See More</h3>
                            <i className="fas fa-angle-right fa-2x"></i>
                        </div>
                    </div>
                    <CardsLatestAr />
                </div>
                <BeautyRoupUp />
                <div className="section-ar">
                    <h2 className="title">Latest Reviews</h2>
                    <div className="see-more">
                        <h3 className="grey">So you can make better purchase decision</h3>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h3 style={{ color: '#db284e' }}>See More</h3>
                            <i className="fas fa-angle-right fa-2x"></i>
                        </div>
                    </div>
                    <CardsLatestRev />
                </div>
                <PopularGroup />
                <LatestVideo />
                <Trending />
                <TopBrands />
                <div className="closing">
                    <h4>Female Daily - Find everything you want to know about beauty on Female Daily</h4>
                    <p>Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!</p>
                </div>
            </div>
        </div>
    )
}