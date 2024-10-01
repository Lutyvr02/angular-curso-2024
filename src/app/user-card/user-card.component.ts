import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges{
  
  @Input() name: string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()
  public onSendData(){
    this.sendData.emit('hola desde el hijo')
  }

  password:string = ''

  constructor(){
    console.log("user card constructor")
  }

  ngOnInit(): void{
    console.log('user cad on init')
    this.password = this.email + this.name
  }

  ngOnDestroy(): void {
    console.log('user card destroy')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: '+changes)

    this.password = changes['name'].currentValue + changes['email'].currentValue + 'password'
  }
}
