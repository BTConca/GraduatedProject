import React, {Component} from 'react';
import bg from '../../../assets/img/manga.jpg';
import image from 'assets/img/manga.jpg';
export class UserHome extends Component {
  render() {
    const sidebarBackground = {
      backgroundImage: 'url(' + 'https://imgur.com/ytXNA3z' + ')',
    };

    return (
      <div style={{backgroundImage: 'url(${bg})'}}>
        <div style={sidebarBackground}>This is User Home screen</div>
      </div>
    );
  }
}

export default UserHome;
