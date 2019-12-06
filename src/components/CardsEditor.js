import React from 'react'
import { useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings';
import annedean from '../assets/annedean.jpg'


export default function CardEditor() {
    const editor_choice = useSelector(state => state.editor_choice)
    return (
        <div className="section-editr">
            {
                editor_choice.map((el, i) => {
                    return (
                        <div className="card-editr" key={i}>
                            <div className="user-editr">
                                <img alt="annedean" src={annedean} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                                <div className="fd-editr">
                                    <h4>{el.editor}</h4>
                                    <h5 className="desc-editr">{el.role}</h5>
                                </div>
                            </div>
                            <div className="choice-item">
                                <img src={el.product.image} alt="product" className="img-pro-editr" />
                                <div>
                                    <div className="rating-pro-editr">
                                        <p className="int-rating">{el.product.rating}</p>
                                        <StarRatings rating={el.product.rating} starRatedColor="#db284e" name="rating" starDimension="18px" starSpacing="0px" />
                                    </div>
                                    <h3>{el.product.name}</h3>
                                    <h4 className="pro-edtr-desc">{el.product.description}</h4>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

// product: {name: "Y.O.U Makeups", rating: 4.1, description: "Rouge Velvet Matte Lip Cream", image: "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png"}
// role: "Associate Editor"