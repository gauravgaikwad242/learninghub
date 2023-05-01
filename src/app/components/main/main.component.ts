import { Component } from '@angular/core';
import { SideMenu } from 'src/app/model/side-menu';
import { Order } from 'src/app/enum/order';
@Component({
  selector: 'js-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  opendrawer=true;
  readonly Order=Order
  sideMenu:SideMenu[]=[
    new SideMenu(1,"/javascript/introduction","Introduction"),
    new SideMenu(2,"/javascript/Observable","Observables Intro"),
    new SideMenu(3,"/javascript/ObservableOperator","Observables-Operator"),
    new SideMenu(4,"/javascript/SeqentialOperation","Sequential"),
  ]

  // public get Order(){
  //   return Order;
  // }
}
