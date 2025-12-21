import React from "react"
import Card from "./component/card.jsx"

const App = () => {
  return (
    <div className="parent">
      <Card 
        user = 'Rajnish Kumar' 
        age = {18} 
        img = 'https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        />
        <Card
          user = "Tanuj Kumar"
          age = {20}
          img = 'https://plus.unsplash.com/premium_photo-1721681765444-10e3e82600a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          user = "Karnam Sriram"
          age = {20}
          img = 'https://plus.unsplash.com/premium_photo-1765830764975-64cd3a5441cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D'
        />
        <Card 
        user = 'Rajnish Kumar' 
        age = {18} 
        img = 'https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        />
        <Card
          user = "Tanuj Kumar"
          age = {20}
          img = 'https://plus.unsplash.com/premium_photo-1721681765444-10e3e82600a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D'
        />
        <Card
          user = "Karnam Sriram"
          age = {20}
          img = 'https://plus.unsplash.com/premium_photo-1765830764975-64cd3a5441cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D'
        />
    </div>
  )
}

export default App