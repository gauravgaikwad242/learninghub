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
    new SideMenu(2,"/javascript/introduction","Introduction2"),
    new SideMenu(3,"/javascript/introduction","Introduction3")
  ]

  // public get Order(){
  //   return Order;
  // }
}
