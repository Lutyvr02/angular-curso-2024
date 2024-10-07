import { Component, afterRender, afterNextRender } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  sum: number = 0;
  appBackGround:string = 'red'

  constructor() {
    afterRender({
      write:() => {
        document.body.style.backgroundColor = this.appBackGround
        const currentColor = this.appBackGround

        if(currentColor === 'red'){
          this.appBackGround = 'blue'
        } else{
          this.appBackGround = 'red'
        }
        return 'From mixedReadWrite: ' + this.appBackGround
      },
      read:(props) => {
        console.log('INTO read ', props)
        const newBackground = this.appBackGround
        console.log('FROM read: ', newBackground)
      },
    });

    afterNextRender(() => {
      console.log('after next render: '+ this.sum) 
    });
  }
}
