import { WeatherData } from './../models/weather.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-data',
  templateUrl: './lower-data.component.html',
  styleUrls: ['./lower-data.component.css'],
})
export class LowerDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() weatherData?: WeatherData;
}
