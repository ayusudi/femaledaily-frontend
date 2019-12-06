import React from 'react'
import { useSelector } from 'react-redux'

export default function CardLatestAr() {
    const latest_choice = useSelector(state => state.latest_choice)

    return (
        <div className="section-ltst-ar">
            {
                latest_choice.map((el, i) => {
                    return (
                        <div key={i} className="card-article">
                            <img src={el.image} className="img-article" alt="latest-ar" />
                            <div className="title-article">
                                <h3 className="font-weight-bold">{el.title}</h3>
                                <span className="author-article">{el.author} <p className="publish-article">| {el.published_at}</p></span>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
