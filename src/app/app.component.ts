import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course-2024';  
  constructor(){
    console.log('subtract', this.sub(8,4))
  }

  public sum (num1:number, num2:number): number {
    return num1 + num2
  }

  private sub (num1:number, num2:number): number {
    return num1 - num2
  }

  public getArray(){
    const persons:number[] = [1,2,3,4,5]
    for(let i = 0; i < persons.length; i++){
      if(persons[i]  % 2 === 0){
        console.log('person =', persons[i])
      }
    }
  }

}
