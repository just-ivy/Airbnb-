import React from "react"
import Card from "./Cards"
import data from "./data"
export default function Hero() {
    return (
        <>
            <section className="hero">
                <img src="\photo-grid.png" className="hero--photo" />
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by
                    one-of-a-kind hosts—all without leaving home.</p>
            </section>
            <div className="cardCona">
                {data.map((item) => (
                    <Card
                        photo={item.photo}
                        course={item.course}
                        status={item.status}
                        Rating={item.Rating}
                        NoOfRating={item.NoOfRating}
                        Country={item.Country}
                        Price={item.Price}
                    />
                ))
                }
            </div>
        </>
    )
}