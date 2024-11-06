import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities: any[] = [];

  constructor(private http: HttpClient) { }

  loadCities(): void {
    const savedCities = localStorage.getItem('cities');
    if (savedCities) {
      this.cities = JSON.parse(savedCities);
    } else {
      this.http.get<any[]>('assets/cities.json')
        .subscribe(data => {
          this.cities = data;
          this.saveCities();
        });
    }
  }

  saveCities(): void {
    localStorage.setItem('cities', JSON.stringify(this.cities));
  }

  addCity(cityName: string): string | null {
    if (this.cities.some(city => city.name.toLowerCase() === cityName.toLowerCase())) {
      return 'City already exists!';
    }
    const newCity = { id: this.cities.length + 1, name: cityName };
    this.cities.push(newCity);
    this.saveCities();
    return null;
  }

  deleteCity(id: number): void {
    this.cities = this.cities.filter(city => city.id !== id);
    this.saveCities();
  }

  getCitiesSorted(): any[] {
    return this.cities.sort((a, b) => a.name.localeCompare(b.name));
  }

  filterCities(name: string): any[] {
    return this.cities.filter(city => city.name.toLowerCase().includes(name.toLowerCase()));
  }
}
