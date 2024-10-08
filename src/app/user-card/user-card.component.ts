import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from "../counter/counter.component";
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() name: string = 'abc';
  @Input() email: string = 'abc@gmail.com';

  @Output() sendData = new EventEmitter();
  
  @ViewChild('buttonTest', {static: true}) buttonTest!: ElementRef 
  @ViewChild('buttonShow', {static: true}) buttonShow!: ElementRef 

  password: string = "password";
  
  private prevPadding = 0;
  public onSendData() {
    this.sendData.emit('hola desde el hijo');
  }

  showButton:boolean = false

  constructor() {
    console.log('user card constructor');

  }

  ngAfterViewChecked(): void {
    console.log("after view chicked")
  }
  ngOnInit(): void {
    this.buttonShow.nativeElement.textContent = 'button show in onInit'
    this.buttonTest.nativeElement.textContent = 'button show in onInit'
  }

  ngOnDestroy(): void {
    console.log('user card destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + changes);

    this.password =
      changes['name'].currentValue + changes['email'].currentValue + 'password';
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('init');
  }

  ngAfterContentChecked(): void {
    console.log("after content checked")
  }

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT')
    console.log('BUTTON test'+ this.buttonTest)
    this.buttonTest.nativeElement.textContent = 'a'
  }
}
