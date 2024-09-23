import React from "react";

export default function Card(props){
    return(
        <div className="cardHold">
            <div className="imagehold">
                <img className="imAger" src={props.photo} alt="" />
                <div className="tag">{props.status}</div>
            </div>
            <div className="details">
                <div className="FirstLine_OF-Details">
                    <img className="star" src="/star.png" alt="" />
                    <span>{props.Rating}</span>
                    <span>({props.NoOfRating}){props.Country}</span>
                </div>
                <div className="SecondLine">{props.course}</div>
                <div className="ThirdLine">From ${props.Price} <span>/Person</span></div>
            </div>
        </div>
    )
}