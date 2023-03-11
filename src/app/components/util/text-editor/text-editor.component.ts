import { Component } from '@angular/core';

@Component({
  selector: 'js-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  texted:any=''
  print(event:any){

    console.log(event)
    console.log(event.value)

  }
  submit(event:any){

    console.log(event)
    console.log(event.value.editors)
this.texted=event.value.editors
  }
}
