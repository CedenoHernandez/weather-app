import React, { Component } from 'react';
import apiConfig from '../apiKeys';

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      ZIP_code: 95124
    }
  }

  handleChange = (e) => {
    this.setState({
      ZIP_code: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ZIP_code: this.state.ZIP_code
    })
    this.componentDidMount();
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.ZIP_code}&appid=${apiConfig.apiKey}`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({city: data.city.name});
    })
  }


  render(){
    return(
      <div className="main">
        <div className="search">
          <form className="form" action="submit">
            <p className="form-label">Enter ZIP Code:</p>
            <input className="city-input" type="text" placeholder="Enter ZIP code" value={this.state.ZIP_code} onChange={e => this.handleChange(e)} />
            <button type="submit" className="button" onClick={e => this.onSubmit(e)}>Search</button>
          </form>
        </div>
        <div className="city">
          {this.state.city}
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