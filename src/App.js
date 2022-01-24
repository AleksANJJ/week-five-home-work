
// Home work 1
/*import './App.css';
import { Component } from "react";

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: "Alexandra"
    }
  }
  
  updateName() {
    this.setState({name:"Anna"})
  }

  render() {
    return(
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={() => this.updateName()}>Click here</button>
      </div>
    )
  }
}*/

// тоже самое помощью Hooks

/*import { useState } from "react";
import './App.css';

function App () {
  const [name, setName] = useState("Nina");
  const updateName =() => {
    setName("Jane");
  }

  return(
    <div>
      <h1>Hello {name}</h1>
      <button onClick={updateName}>click here</button>
    </div> 
  )
}

export default App;*/

// HW 2

/*import { useState } from "react";
import './App.css';

function App () {
  const [name, setName] = useState("Nina");
  const [age, setAge] = useState(6);
  const updateName =() => {
    setName("Jane");
    setAge(4);
  }

  return(
    <div>
      <h1>Hello {name}</h1>
      <h2>I am {age} years old</h2>
      <button onClick={updateName}>click here</button>
    </div> 
  )
}

export default App;*/

// HW3

/*import { useState } from "react";
 
function App () {
  const [count, setCount] = useState(100);
  const updateCount =() => {
    setCount(count+15);
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}> Click here</button>
    </div>
  )
}

export default App;*/

// Home work 4

/*import { useState } from "react";

function App () {
  const [text, setText] = useState("I love JS");

  const changeText =() => {
    if(text === "I love JS") {
      setText("I love React");
    }
    else{
      setText("I love JavaScript")
    }
  }

  return(
    <div>
      <h1>{text}</h1>
      <button onClick={changeText}>Click me</button>
    </div>
  )
}

export default App;*/

//HW 5

/*import { useState } from "react";
import { data } from "./Data";

function App() {
  const [movies, setMovies] = useState(data);
  return(
    <div>
      {movies.map((element =>{
        const {id, moviesData} = element;
        return(
          <div key = {id}>
            <p>{id} - {moviesData}</p>
          </div>
        )}))}
        <button onClick={() =>setMovies([])}>DELETE ALL</button>
    </div>
    )
}

export default App;*/

//HW 6

import { useState } from "react";
import { data } from "./Data";
import './App.css';

function App() {
  const [hotels, setHotels] = useState(data);

  const [showMore, setShowMore] = useState(false);

  const removeHotel = (id) => {
    let newHotels = hotels.filter(hotel => hotel.id !==id);
    setHotels(newHotels)
  }

  return(
    <div>
      <div className="container">
        <h1>NYC TOP {hotels.length} HOTELS</h1>
      </div>
      {hotels.map((elementHotel => {
        const {id, hotelName, description, image, source} = elementHotel;

        return(
          <div key = {id}>
            <div className="container">
              <h2>{id} - {hotelName}</h2>
            </div>
            <div className="container">
              <p>{showMore ? description : description.substring(0,210)+ "......"}
              <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
              </p>
            </div>
            <div className="container">
              <img src={image} width="600px" alt="fotoHotel"/>
            </div>
            <div className="container">
            <p>{source}</p>
            </div>
            <div className="container">
            <button className="btn" onClick={() =>removeHotel(id)}>REMOVE</button>
            </div>  
          </div>
        )
      }))}
    </div>

  )

}

export default App;

