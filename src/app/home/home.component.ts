import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  retrievedContactData: any[] = []; // Specify the type as an array of any

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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form data:', formData);

      // Use the ContactService to save data
      this.contactService.saveData(formData).subscribe(
        (response) => {
          console.log('Data saved:', response);
          // You can handle the success response here
        },
        (error) => {
          console.error('Error saving data:', error);
          // Handle the error response here
        }
      );
    } else {
      // Handle invalid form data here if needed.
    }
  }
}
