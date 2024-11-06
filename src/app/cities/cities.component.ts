import { Component, OnInit} from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})

export class CitiesComponent implements OnInit {
  cities: any[] = [];
  newCityName = '';
  searchQuery = '';
  errorMessage = '';

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.citiesService.loadCities();
    this.cities = this.citiesService.getCitiesSorted();
  }

  addCity(): void {
    const error = this.citiesService.addCity(this.newCityName);
    if (error) {
      this.errorMessage = error;
    } else {
      this.errorMessage = '';
      this.newCityName = '';
      this.loadCities();
    }
  }

  deleteCity(id: number): void {
    this.citiesService.deleteCity(id);
    this.loadCities();
  }

  searchCity(): void {
    this.cities = this.citiesService.filterCities(this.searchQuery);
  }
}