import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherList: any[] = [];
  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.service.getWeather().subscribe((data) => (this.weatherList = data));
  }
}
