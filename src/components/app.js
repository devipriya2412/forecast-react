import React, { Component } from 'react';

import HeaderLogo from './header_logo';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderLogo />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
