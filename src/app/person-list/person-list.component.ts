import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Person {
  name: string;
  gender: 'male' | 'female';
  age: number;
  discount?: boolean;
}


@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})

export class PersonListComponent {
  persons: Person[] = [
    { name: 'Ana', gender: 'female', age: 19 },
    { name: 'Carlos', gender: 'male', age: 15 },
    { name: 'Maria', gender: 'female', age: 20 }
  ];

  totalFemales = this.persons.filter(p => p.gender === 'female').length;
  totalMales = this.persons.filter(p => p.gender === 'male').length;

  applyDiscount() {
    this.persons.forEach(person => {
      if (person.age > 18) {
        person.discount = true;
      }
    });
  }

  removeDiscountedPersons() {
    this.persons = this.persons.filter(person => !person.discount);
  }
}