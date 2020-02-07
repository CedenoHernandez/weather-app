import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
  constructor(props) {
    super(props)
        this.state = {
        currentDate: new Date(),
        markedDate: Moment(new Date()).format("YYYY-MM-DD")
    };
  }
  render(){
    const today = this.state.currentDate;
    const day = Moment(today).format("dddd");
    const date = Moment(today).format("MMMM D, YYYY");
    return(
      <div className="header">
          {day},
          {date}
      </div>
    )
  }
}

export default Header;