import { Directive,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[jsTopicTitle]'
})
export class TopicTitleDirective {

  //one way to implement custom directive without hostbinder
  //use camelcase for element style properties
  constructor(private element: ElementRef) {
    console.log("directive",element)
  }


  @HostBinding("style.color") titleColor:string=''
  @HostBinding("style..background-color") backgroundColor:string='' //not camelcase

  @HostListener('mouseenter')
  onMouseEnter(){
    console.log('changing style');
    this.element.nativeElement.style.color='#3f51b5'
    this.element.nativeElement.style.fontWeight='bold'
    this.element.nativeElement.style.fontSize='200%'

  }
  // @HostListener('mouseleave',['$event'])
  @HostListener('mouseleave')
  onMouseLeave(event:any){
    // console.log(event.target.value)
    this.element.nativeElement.style.color='black'
    this.element.nativeElement.style.fontWeight='normal'
    this.element.nativeElement.style.fontSize='100%'

  }
  @HostListener('dblclick')
  onDoubleClick(){
    console.log('changing style');
    this.element.nativeElement.style.fontWeight='bold'
  }



}
