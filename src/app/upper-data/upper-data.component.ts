import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-upper-data',
  templateUrl: './upper-data.component.html',
  styleUrls: ['./upper-data.component.css'],
})
export class UpperDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() weatherData?: WeatherData;
}
