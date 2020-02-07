import React, { Component } from 'react';

class Main extends Component {
  
  async componentDidMount() {
    const url = "https://api.openweathermap.org/data/2.5/forecast?zip=95008&appid=";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render(){
    return(
      <div className="main">
        <div className="search">
          <form className="form" action="submit">
            <input className="city-input" type="text"placeholder="Enter ZIP code" />
            <button className="button">Search</button>
          </form>
        </div>
        <div className="weather-cards">
          <div className="card1">
            <div className="day">
              <p>Friday</p>
            </div>
            <div className="day-img">
              <img src="../images/sunny.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="low-temp">
                <p>44°</p>
              </div>
              <div className="high-temp">
                <p>69°</p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="day">
                <p>Saturday</p>
            </div>
            <div className="day-img">
              <img src="../images/sunny.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="low-temp">
                  <p>40°</p>
              </div>
              <div className="high-temp">
                  <p>72°</p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="day">
              <p>Sunday</p>
            </div>
            <div className="day-img">
              <img src="../images/cloudy.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="low-temp">
                <p>41°</p>
              </div>
              <div className="high-temp">
                <p>65°</p>
              </div>
            </div>
          </div>
          <div className="card4">
            <div className="day">
              <p>Monday</p>
            </div>
            <div className="day-img">
              <img src="../images/partial-cloudy.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="low-temp">
                <p>44°</p>
              </div>
              <div className="high-temp">
                <p>69°</p>
              </div>
            </div>
          </div>
          <div className="card5">
            <div className="day">
              <p>Tuesday</p>
            </div>
            <div className="day-img">
              <img src="../images/sunny.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="low-temp">
                <p>48°</p>
              </div>
              <div className="high-temp">
                <p>71°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;