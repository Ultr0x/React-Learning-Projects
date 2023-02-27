import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  // map over the array of data and return a new array of <Card /> components
    const cards = data.map(item => {
      return (
        <Card
          key={item.id}//this is a unique identifier for each card component that React needs to keep track of the components
          {...item}
        />  
      )
    })

    return (
        <div className="App">
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}