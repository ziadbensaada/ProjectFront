import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent {
  id:any
  data:any={}
  constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getUserInfo();
  }
  getUserInfo(){
    this.data=JSON.parse(localStorage.getItem("User")!)
  }
  passwordVisible = false;
  isEditing = false;
  editedData = {
    name: '',
    password: '',
    email: '',
    address: ''
  };

  // Function to toggle password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Function to enable editing mode
  enableEditing() {
    this.isEditing = true;
    // Set the initial values for editing
    this.editedData = {
      name: this.data.name,
      password: this.data.password,
      email: this.data.email,
      address: this.data.address
    };
  }

  // Function to save the edited data
  saveEditedData() {
    // Perform the necessary actions to save the edited data
    // For example, send an HTTP request to update the data on the server
      const newUser = {
        name: this.editedData.name,
        password: this.editedData.password,
        email: this.editedData.email,
      };
    // After saving, disable editing mode
    this.isEditing = false;
  }
}
