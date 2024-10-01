import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy{
  
  @Input() name: string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()
  public onSendData(){
    this.sendData.emit('hola desde el hijo')
  }

  constructor(){

  }

  ngOnInit(): void{
    console.log('user cad on init')
  }

  ngOnDestroy(): void {
    console.log('user card destroy')
  }
}
