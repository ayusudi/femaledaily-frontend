import React from 'react'
import { useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings';

export default function CardLatestRev() {
    const latest_rev = useSelector(state => state.latest_review)
    return (
        <div className="section-ltst-rev">
            <div className="scroll-x">
                {
                    latest_rev.map((el, i) => {
                        return (
                            <div key={i} className="card-ltst-rev">
                                <div className="round-card-rev">
                                    <div className="review">
                                        <div className="rev-inline">
                                            <img src={el.product.image} className="img-rect-pro" alt="rect-proo" />
                                            <div style={{ textAlign: 'start' }}>
                                                <h3>{el.product.name}</h3>
                                                <h4 style={{ fontWeight: 'normal' }}>{el.product.desc}</h4>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="star-time">
                                            <StarRatings rating={el.star} starRatedColor="#db284e" name="rating" starDimension="21px" starSpacing="0px" />
                                            <h4>a minute ago</h4>
                                        </div>
                                        <p style={{ textAlign: 'start', fontSize: '10pt', marginTop: '8px' }}>{el.comment}</p>

                                    </div>
                                </div>
                                <div className="user-rev">
                                    <img alt="user-rev-ph" src="http://image.femaledaily.com/dyn/640/images/user-pics/0a61e053591a91b861f9730e0d9efe19.jpg" className="img-user-rev" />
                                    <h4>{el.user}</h4>
                                    <p className="type-skin">{el.profile.join(', ')}</p>
                                </div>


                            </div>
                        )
                    })
                }
            </div>
            <div className="iklan-1per3">
            </div>

        </div>
    )
}