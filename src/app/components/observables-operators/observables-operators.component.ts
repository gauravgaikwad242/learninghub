import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, isObservable, switchMap } from 'rxjs';

@Component({
  selector: 'js-observables-operators',
  templateUrl: './observables-operators.component.html',
  styleUrls: ['./observables-operators.component.css']
})
export class ObservablesOperatorsComponent implements OnInit {

  serachString : FormControl = new FormControl()
  searchFormGroup : FormGroup =  this.fb.group({
    "searchString":this.serachString
  })

  searchResult$ = new Observable();
  constructor(private http:HttpClient, private fb:FormBuilder){
  }
  ngOnInit(): void {
   this.searchResult$ = this.serachString.valueChanges.pipe(
      switchMap((data:any)=>{
        console.log('isobs',isObservable(data));

       return this.http.get(`https://swapi.dev/api/people/?search=${data}`)
      })
    )


  }


  inputEventHandler(){
    console.log('handle');
    console.log('t',this.serachString?.value);




  }

}
