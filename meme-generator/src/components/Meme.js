import React from "react";

export default function Meme() {
    return (
        <main className="meme">
            <form className="form">
                <input type="text" placeholder="Top Text" className="form-input" />
                <input type="text" placeholder="Bottom Text" className="form-input" />
                <button className="form-button">Generate</button>
            </form>
            <div className="meme-image">
                <img src="https://i.imgflip.com/1bij.jpg" alt="meme" />
                <h2 className="top">Top Text</h2>
                <h2 className="bottom">Bottom Text</h2>
            </div>
        </main>
    );
    }