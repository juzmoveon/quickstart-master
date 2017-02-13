import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
  // template: `
  //   <h1>Hello {{name}}</h1>
  //   <div [style.color] = "div1Color">
  //     this is ver {{version}}
  //   </div>
  //   <button (click)="ChangeDiv1Color()" >Change color</button>
  // `,
  //move to app/app.component.html
})

export class AppComponent  { 
  //[] is property binding Component to Dom
  //() is event binding Dom to Component
  name = 'Angular'; 
  version = '2.5';
  div1Color = 'green';


  ChangeDiv1Color(){
    this.div1Color = this.div1Color