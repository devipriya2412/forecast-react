import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

    renderWeather(cityData){
        console.log(cityData);

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        const cityName = cityData.city.name;


        return (
            <tr key={cityData.city.id} >
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                    <p className="bold margin-bottom-0">{cityName}</p>
                </td>
                <td><Chart data={temps} color="orange" units="&deg;C" /></td>
                <td><Chart data={pressures} color="red" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        );

    }

    render(){

        if(!this.props.weather.length){
            return <div></div>;
        }

        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (&deg;C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);