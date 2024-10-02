import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit{
  
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

  ngDoCheck(): void{
    console.log("do check")
  }

  ngAfterContentInit(): void {
    console.log('init')
  }
}
 