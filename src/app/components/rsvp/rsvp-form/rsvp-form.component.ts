import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray}
  from '@angular/forms';
@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit {
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      names: this.fb.array([new FormControl('', Validators.required)]),
      email: new FormControl('', Validators.required)
    })
  }

  get names(): FormArray {
    return this.form.get('names') as FormArray;
  };

  addNewRow() {
    this.names.push(new FormControl('', Validators.required))
  }
}
