import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  location = {
    city:  'Lviv',
    code : 'ua'
  };
  weather:any;
  value:any;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {

      this.value = localStorage.getItem('location');

      if (this.value!=null){
          this.location=JSON.parse(this.value);
      } else {
        this.location={
          city:  'Lviv',
          code : 'ua'
        }
      }

    this._weatherService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather=response;
      }
    );
  }

}
