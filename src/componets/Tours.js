import Card from "./Card";

function Tours({tours, removeTour}) { //instead of the props we can write name of the props in curly braces
    return(
        <div className="container">
            <div>
              <h2 className="title">Plane tours</h2> 
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return<Card {...tour} removeTour={removeTour}></Card>  //tours is passed as an object clone not as props to cards components
                    })
                }
            </div>
        </div>
    );

}

export default Tours;