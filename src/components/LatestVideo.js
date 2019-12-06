import React from 'react'

export default function LatestVideo() {
    return (
        <div className="section-ar">
            <h2 className="title">Latest Video</h2>
            <div className="see-more">
                <h3 className="grey">Watch and learn, ladies</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ color: '#db284e' }}>See More</h3>
                    <i className="fas fa-angle-right fa-2x"></i>
                </div>
            </div>
            <div className="videos">
                <div className="big-video"><i className="fab fa-youtube fa-8x"></i></div>
                <div className="minis-video">
                    <div className="mini-video"><i className="fab fa-youtube fa-4x"></i></div>
                    <div className="mini-video"><i className="fab fa-youtube fa-4x"></i></div>
                </div>
            </div>
        </div>

    )
}