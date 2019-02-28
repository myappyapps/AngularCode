import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private number: Array<object> = [];
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.number = [{"name":"saas"},{"name":"jakjkjsa"},{"kalklks":"jakakj"}];
    console.log(this.number);
  }

  public callFunction(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    //var value = idAttr.nodeValue;
    console.log(target);
    console.log(idAttr);
    //console.log(value);

  }
  logOutUser(){
    this.router.navigate(['../login']);
  }

}
