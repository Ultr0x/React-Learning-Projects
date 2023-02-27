import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt={props.place} className="card-img" />
            </div>
            <div className="card-content">
                <div className="card-location">
                <img src="../images/navigation.png" alt="pin" className="card-pin" />
                    <h2 className="card-country">{props.country}</h2>
                    <a href={props.link} className="card-link">View on Google Maps</a>
                </div>
                <div className="card-main">
                    <h1 className="card-title">{props.place}</h1>
                    <h3 className="card-date">{props.date}</h3>
                    <p className="card-text">{props.description}</p>
                </div>
                
            </div>
        </div>
        
    );
    }
    