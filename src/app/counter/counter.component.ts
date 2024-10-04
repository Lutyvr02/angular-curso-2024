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
      earlyRead: () => {
        const currentAppColor = this.appBackGround
        return 'Form earlyRead: ' + currentAppColor
      },
      mixedReadWrite:(props) => {
        if(props.indexOf('red') > -1){
          this.appBackGround = 'green'
        } else {
          this.appBackGround = 'red'
        }
        return 'From mixedReadWrite: '+ this.appBackGround
      },
      write:(props) => {
        document.body.style.backgroundColor = this.appBackGround
        return 'FROM write: '+ this.appBackGround
      },
      read:(props) => {
        const newBackGround = this.appBackGround
      },
    });

    afterNextRender(() => {
      console.log('after next render: '+ this.sum) 
    });
  }
}
