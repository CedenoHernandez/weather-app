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
    // checkZip(value) {
    //   return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
    // };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ZIP_code: this.state.ZIP_code
    })
    this.componentDidMount(); /*allows page to reload with new API data*/
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.ZIP_code}&units=imperial&appid=${apiConfig.apiKey}`)
    .then(results => {
      return results.json();
    }).then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("00:00:00")); //filter help from Leizl Samano
      console.log(dailyData);
      this.setState({city: data.city.name});

      // pull daily temperature highs
      this.setState({temp1: Math.round(dailyData[0].main.temp)});
      this.setState({temp2: Math.round(dailyData[1].main.temp)});
      this.setState({temp3: Math.round(dailyData[2].main.temp)});
      this.setState({temp4: Math.round(dailyData[3].main.temp)});
      this.setState({temp5: Math.round(dailyData[4].main.temp)});

      // pull icon id to be matched with class in render below
      this.setState({day1 : dailyData[0].weather[0].id});
      this.setState({day2 : dailyData[1].weather[0].id});
      this.setState({day3 : dailyData[2].weather[0].id});
      this.setState({day4 : dailyData[3].weather[0].id});
      this.setState({day5 : dailyData[4].weather[0].id});

      // pull daily weather descriptions
      this.setState({des1 : dailyData[0].weather[0].description});
      this.setState({des2 : dailyData[1].weather[0].description});
      this.setState({des3 : dailyData[2].weather[0].description});
      this.setState({des4 : dailyData[3].weather[0].description});
      this.setState({des5 : dailyData[4].weather[0].description});
      
    })
  }


  render(){
    // use owfont stylesheet to render weather icons
    let imgURL1 = `owf owf-${this.state.day1} owf-5x`;
    let imgURL2 = `owf owf-${this.state.day2} owf-5x`;
    let imgURL3 = `owf owf-${this.state.day3} owf-5x`;
    let imgURL4 = `owf owf-${this.state.day4} owf-5x`;
    let imgURL5 = `owf owf-${this.state.day5} owf-5x`;


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
              <p>{Moment().add(1, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <i className={imgURL1}></i>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp1}°</p>
              </div>
            </div>
            <div className="description">
              {this.state.des1}
            </div>
          </div>

          <div className="card2">
            <div className="day">
                <p>{Moment().add(2, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <i className={imgURL2}></i>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp2}°</p>
              </div>
            </div>
            <div className="description">
              {this.state.des2}
            </div>
          </div>

          <div className="card3">
            <div className="day">
              <p>{Moment().add(3, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <i className={imgURL3}></i>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp3}°</p>
              </div>
            </div>
            <div className="description">
              {this.state.des3}
            </div>
          </div>

          <div className="card4">
            <div className="day">
              <p>{Moment().add(4, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <i className={imgURL4}></i>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp4}°</p>
              </div>
            </div>
            <div className="description">
              {this.state.des4}
            </div>
          </div>

          <div className="card5">
            <div className="day">
              <p>{Moment().add(5, 'days').format('dddd')}</p>
            </div>
            <div className="day-img">
              <i className={imgURL5}></i>
            </div>
            <div className="temperatures">
              <div className="high-temp">
                <p>{this.state.temp5}°</p>
              </div>
            </div>
            <div className="description">
              {this.state.des5}
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Main;