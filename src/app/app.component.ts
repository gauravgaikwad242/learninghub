import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'javascript-notes';

  ngOnInit():void{


  }
  runCode(data:any){
    try {
      let a = window.eval(data)
      console.log(a)
    } catch (error) {
      alert("invalid code")
    }
  }


}
