import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  searchForm: FormGroup = new FormGroup({});

  @Output() getWeatherData = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      cityName: new FormControl(''),
    });
  }

  get searchInput() {
    return this.searchForm.get('cityName');
  }

  onSubmit() {
    this.getWeatherData.emit(this.searchInput?.value);
    this.searchForm.patchValue({ cityName: '' });
  }
}
