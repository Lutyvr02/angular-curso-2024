import { Component } from "@angular/core";
import { CitiesComponent } from "./cities/cities.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CitiesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor() {

  }
}