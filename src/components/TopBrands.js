import React from 'react'

export default function TopBrands() {
    const brands = [
        "https://pbs.twimg.com/profile_images/664687523210268672/o7wQpGTi_400x400.jpg",
        "https://pbs.twimg.com/profile_images/664687523210268672/o7wQpGTi_400x400.jpg",
        "https://pbs.twimg.com/profile_images/664687523210268672/o7wQpGTi_400x400.jpg",
        "https://pbs.twimg.com/profile_images/664687523210268672/o7wQpGTi_400x400.jpg",
        "https://pbs.twimg.com/profile_images/664687523210268672/o7wQpGTi_400x400.jpg",
        "https://pbs.twimg.com/profile_images/664687523210268672/o7wQpGTi_400x400.jpg",
    ]

    return (
        <div className="section-ar">
            <br></br><br></br>
            <h2 className="title">Top Brands</h2>
            <div className="see-more">
                <h3 className="grey">We all know and love</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ color: '#db284e' }}>See More</h3>
                    <i className="fas fa-angle-right fa-2x"></i>
                </div>
            </div>
            <div className="trending-items">
                {
                    brands.map((el, i) => {
                        return <img src={el} style={{ width: '150px', height: '150px' }} key={i} alt="brand" />
                    })
                }
            </div>
            <br></br><br></br>

        </div>
    )
}