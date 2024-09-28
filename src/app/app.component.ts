import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';

interface IPerson{
  name:string,
  lastname:string,
  age:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  result = 0
  title = 'angular-course-2024';  
  animals:string[] = ['a','b','c','d','e','f','g']

  person: IPerson = {
    name: 'juan',
    lastname: 'perez',
    age: 12
  }

  students:number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9,10]

  var1 = 0
  var2 = null
  var3 = 'hola'

  constructor(){
    const {name, age} = this.person
    console.log('desustruraccion', name, age)

    let both = [...this.students,...this.parents]
    console.log("spread proyector: "+both)

    console.log('REST operator: ', this.sum2(2,4,6))

    console.log('Nullish Coalesing: ', this.var2 ??  this.var3)
    
    console.log('OR: ', this.var1 ||  this.var2)

    /*console.log('MAP: ', this.animals.map( (animal) => {animal + 'new'}))
    console.log('FOREACH: ', this.animals.forEach((animal)=>{animal + 'new'}))
    console.log('FIND', this.animals.find((animal)=> animal == 'b'))
    console.log('FILTER', this.animals.filter((animal)=> animal == 'c'))
    console.log('INDEXOF', this.animals.indexOf('c'))*/
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

  public sum2(...persons:number[]){
    //return persons[0] + persons[1]
    return persons.reduce((acumulador, valorActual) => (acumulador+ valorActual))
  }

  public recieveData(data:any){
    console.log('Print: '+data) 
  }

  public onResult(event:any){
    this.result = event ?? 0
  }
}
