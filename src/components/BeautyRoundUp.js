import React from 'react'

export default function BeautyRounUp() {
    const beautyRounUp = [
        'https://static.femaledaily.com/dyn/320/images/fdn-collections/d022f4cedc1015fd5c45f4e00e774288-thumbnail.jpg',
        'https://static.femaledaily.com/dyn/320/images/fdn-collections/2346f58a96b1de74b666c260d9470633-thumbnail.jpg',
        'https://static.femaledaily.com/dyn/320/images/fdn-collections/917cdc57703294a866f136e30e03865b-thumbnail.jpg',
        'https://static.femaledaily.com/dyn/320/images/fdn-collections/b8e7777015e3ddaec248ddfd871c4e98-thumbnail.jpg'
    ]
    
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
            <div className="section-img-round">
                {
                    beautyRounUp.map((el, i) => {
                        return <img src={el} className="img-broudup" key={i} alt="phot-bp" />
                    })
                }
            </div>
        </div>
    )
}