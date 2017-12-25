import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
// import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {

  apiKey= 'f4eaffdbb918b135cb8733d889950f35';
  url;

  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).map( res => res.json());;
  }

}
