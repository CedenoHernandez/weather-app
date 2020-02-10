import React, { Component } from 'react';
import apiConfig from '../apiKeys';
import Moment from 'moment';

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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.ZIP_code}&units=imperial&appid=${apiConfig.apiKey}`)
    .then(results => {
      return results.json();
    }).then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("00:00:00")) //filter help from Leizl Samano
      console.log(dailyData);
      this.setState({city: data.city.name});
      this.setState({temp1: Math.round(dailyData[0].main.temp)});
      this.setState({temp2: Math.round(dailyData[1].main.temp)});
      this.setState({temp3: Math.round(dailyData[2].main.temp)});
      this.setState({temp4: Math.round(dailyData[3].main.temp)});
      this.setState({temp5: Math.round(dailyData[4].main.temp)});
      // this.setState({day1 : dailyData[0].weather[0].description});
      // if (dailyData[0].weather[0].description === "clear sky"){
      //   return <img src="../images/sunny.png" alt=""/>
      // }
    })
  }


  render(){
    return(
      <div className="main">
        <div className="search">
          <form className="form" action="submit">
            <p className="form-label">Enter ZIP Code:</p>
            <input className="city-input" type="text" placeholder="ZIP code" value={this.state.ZIP_code} onChange={e => this.handleChange(e)} />
            <button type="submit" className="button" onClick={e => this.onSubmit(e)}>Search</button>
          </form>
        </div>
        <div className="city">
          {this.state.city}
        </div>
        <div className="weather-cards">
          <div className="card1">
            <div className="day">
              <p>Today</p>
            </div>
            <div className="day-img">
              <img src="../images/sunny.png" alt=""/>
              {/* {this.state.day1} */}
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp1}°</p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="day">
                <p>{Moment().add(1, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <img src="../images/sunny.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp2}°</p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="day">
              <p>{Moment().add(2, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <img src="../images/cloudy.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp3}°</p>
              </div>
            </div>
          </div>
          <div className="card4">
            <div className="day">
              <p>{Moment().add(3, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <img src="../images/partial-cloudy.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp4}°</p>
              </div>
            </div>
          </div>
          <div className="card5">
            <div className="day">
              <p>{Moment().add(4, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <img src="../images/sunny.png" alt=""/>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp5}°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;