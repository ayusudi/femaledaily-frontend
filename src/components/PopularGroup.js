import React from 'react'

export default function PopularGroup() {
    const popular = [[], [], [], []]

    return (
        <div className="section-ar">
            <h2 className="title">Beauty Roundup</h2>
            <div className="see-more">
                <h3 className="grey">Your beauty answers, delivered fast and quick</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ color: '#db284e' }}>See More</h3>
                    <i className="fas fa-angle-right fa-2x"></i>
                </div>
            </div>
            <div className="section-popular-group">
                {
                    popular.map((el, i) => {
                        return (
                            <div className="card-pg" key={i}>
                                <div className="img-pg">
                                    <img alt="fdd" src="//static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_skincare_newbies.png" />
                                </div>
                                <h1 style={{ width: '50%', margin: '5px' }}>Skin Newbie</h1>
                                <div className="media-count">
                                    <div className="icon">
                                        <i className="fas fa-list-ul black"></i>
                                        <p className="p-small">2852</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-users black"></i>
                                        <p className="p-small">136</p>
                                    </div>
                                    <div className="icon">
                                        <i className="far fa-comment-alt black"></i>
                                        <p className="p-small">200</p>
                                    </div>
                                </div><p className="popular-desc">All those skincare tips your skin will thank you for</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}