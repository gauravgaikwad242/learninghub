export class SideMenu {

  placement:number;
  routerLink:string;
  displayName:string;
  constructor(placement:number,routerLink:string,displayName:string){
    this.placement=placement;
    this.displayName=displayName;
    this.routerLink=routerLink;
  }
}
