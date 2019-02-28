import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  
import { showLoader, hideLoader, showAlert, hideAlert } from '../../main';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  private contacts: Array<object> = [];
  private dataAvailable:boolean = false;

  ngOnInit() {
    this.getContacts();
  }

  public getContacts() {
    showLoader();
    // showAlert();
    //document.body.classList.add("parentDisable");
    this.apiService.getContactList().subscribe((data: Array<Object>) => {
      console.log(this.dataAvailable);      
      this.contacts = data; // since returns always returns a single object in the array.      
      if(this.contacts.length !== 0){
        this.dataAvailable = true;        
      }else{
        this.dataAvailable = false;
      }
      console.log("second "+this.dataAvailable);

      console.log(this.contacts);
      hideLoader();

    });
  }

  ngOnDestroy() {
    hideLoader();
    // hideAlert();
    //document.body.classList.remove("parentDisable");
  }

  

}
