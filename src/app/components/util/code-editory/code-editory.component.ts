import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'js-code-editory',
  templateUrl: './code-editory.component.html',
  styleUrls: ['./code-editory.component.css']
})
export class CodeEditoryComponent {
  result:any;
  runCode(data:NgForm){
console.log(data.value.inputEditor)

try {
  this.result = ` <p>${window.eval(data.value.inputEditor)}</p>`
} catch (error) {
  alert("invalid code")

}
  }
}
