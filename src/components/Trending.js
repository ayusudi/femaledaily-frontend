import React from 'react'
import StarRatings from 'react-star-ratings';

export default function Trending() {
    const items = [
        "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1545206288_Nature_Rep_800x800.jpg",
        "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1545203672_Cetaphil_G_800x800.jpg",
        "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1552546007_2091603_70_800x800.jpg",
        "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1545206288_Nature_Rep_800x800.jpg",
        "https://static.femaledaily.com/dyn/155/images/prod-pics/product_1535101658_Marcks_Bed_800x800.jpg"
    ]

    return (
        <div className="section-ar">
            <h2 className="title">Trending This Week</h2>
            <div className="see-more">
                <h3 className="grey">See our weekly most reviewed products</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{ color: '#db284e' }}>See More</h3>
                    <i className="fas fa-angle-right fa-2x"></i>
                </div>
            </div>
            <div className="trending-items">
                {
                    items.map((el, i) => {
                        return (

                            <div className="trending-item" key={i}>
                                <img src={el} style={{ width: '200px', height: '200px' }} alt="item-phot" />
                                <div className="rating-pro-editr">
                                    <p className="int-rating">4</p>
                                    <StarRatings rating={4} starRatedColor="#db284e" name="rating" starDimension="18px" starSpacing="0px" />
                                </div>
                                <div style={{ textAlign: 'start' }}>
                                    <h4>Item Brand</h4>
                                    <h5 style={{ fontWeight: 'normal' }}>Item Name</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}