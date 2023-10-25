import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;
  retrievedContactData: any[] = [];
  constructor(private contactService: ContactService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0), Validators.max(120)]],
      phonenumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit() {
    // Fetch all contact data
    this.contactService.getAllData().subscribe(
      (data) => {
        this.retrievedContactData = data as any[];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    
  }
}
