import React, { useState } from "react";
import data from "./data";
import Tours from "./componets/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  // for taking id data from child-cards to parent-App
  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
 }

  if(tours.length === 0) {
    return (
      <div className="refresh">
      <h2>No tours left</h2>
        <button  className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>

  );
};

export default App;
