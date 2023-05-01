import { HttpClient } from '@angular/common/http';
import { Component,OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { of,interval,take, Observable, concatAll, mergeAll, isObservable, map, tap, switchAll, pipe, switchMap, exhaustMap } from 'rxjs';


interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}
@Component({
  selector: 'js-observables-intro',
  templateUrl: './observables-intro.component.html',
  styleUrls: ['./observables-intro.component.css']
})
export class ObservablesIntroComponent implements  OnInit,AfterViewInit{

  childComponentsSelector:string = "<app-child-component></app-child-component>"







  // componentss:string ="";
  a!:Observable<any>;
constructor(private http:HttpClient, private fb:FormBuilder){
this.startWarsSearchString = new FormControl()
}
  ngAfterViewInit(): void {
    // this.componentss  = "<js-observables-operators></js-observables-operators>"
  }
searchResult$: Observable<PeopleData> | undefined;

search = new FormControl();

searchFormGroup = new FormGroup({
  search: this.search,
});

  ngOnInit(): void {
    let obs = of(1,2,3,4,5,6)

    let interva= interval(1000)

    let ab = interva.pipe(take(2))


    this.a = new Observable<any>((publisher)=>{

      let b = new Observable<any>((publisherInner)=>{
        publisherInner.next(1)
        publisherInner.next(2)
        publisherInner.next(3)
        let c = new Observable<any>((publisherInner)=>{
          publisherInner.next(41)
          publisherInner.next(51)
          publisherInner.next(61)
        })
        publisherInner.next(c)
      })
      let c = new Observable<any>((publisherInner)=>{
        publisherInner.next(4)
        publisherInner.next(5)
        publisherInner.next(6)
      })
      let d = new Observable<any>((publisherInner)=>{
        publisherInner.next(7)
        publisherInner.next(8)
        publisherInner.next(9)
      })
publisher.next(c)
publisher.next(d)
publisher.next(b)
    })

    let d = this.a.pipe(tap((x)=> {
      console.log('type of x is',typeof x, isObservable(x),x);

    }),switchAll()).subscribe((x)=>{
      console.log(typeof x,x)
    })

    this.searchResult$ = this.search.valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response) =>
        response.count > 0 ? response.results[0] : { name: 'No results' }
      ),
      map(
        (response) =>
          ({
            name: response.name,
            birthYear: response.birth_year,
            height: Number(response.height),
            weight: Number(response.mass),
            eyeColor: response.eye_color,
          } as PeopleData)
      )
    );

  }

  startWarsSearchString!:FormControl;
  searchGroup = this.fb.group({
    "startWarsSearchString":this.startWarsSearchString
  })
  exhaustMapString(event:Event){

  this.startWarsSearchString.valueChanges.pipe(
    map((searchStr)=>{
      return this.http.get(`https://swapi.dev/api/people/?search=${searchStr}`)

    })
  ).subscribe((data)=>{console.log('data',data);
  })


  }


}
