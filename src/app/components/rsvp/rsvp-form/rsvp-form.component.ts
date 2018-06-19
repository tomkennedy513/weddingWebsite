import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {FormValue} from "./formValue";
import * as firebase from "firebase";

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit {
  form: FormGroup;
  submitting: boolean;





  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      names: this.fb.array([this.createName()]),
      email: new FormControl('', Validators.required),
      wedding: new FormControl('', Validators.required),
      brunch: new FormControl('', Validators.required),
      cocktail: new FormControl('', Validators.required),
      accommodations: '',
      allergies: '',
    });
  }

  createName(): FormGroup {
    return this.fb.group({
      name: new FormControl('', Validators.required)
    })
  }
  get names(): FormArray {
    return this.form.get('names') as FormArray;
  };

  addNewRow() {
    this.names.push(this.createName());
  }

  removeRow(i, size) {
    if (size > 1) {
      this.names.removeAt(i);
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    const names: string[] = formModel.names.map(e => e.name);
    const email: string = formModel.email;
    const wedding: boolean = (formModel.wedding === 'true');
    let brunch: boolean = (formModel.brunch === 'true');
    let cocktail: boolean = (formModel.cocktail === 'true');
    const accommodations: string = formModel.accommodations;
    const allergies: string = formModel.allergies;
    if (wedding === false) {
      brunch = false;
      cocktail = false;
    }
    const values: FormValue = {
      names: names,
      email: email,
      wedding: wedding,
      brunch: brunch,
      cocktail: cocktail,
      accommodations: accommodations,
      allergies: allergies,
      response: new Date()
    };
    this.sendData(values)
  }

   sendData(form: FormValue) {
     const helloWorld = firebase.functions().httpsCallable('helloWorld');
     this.submitting = true;
     helloWorld(form).then(function(result) {
       // Read result of the Cloud Function.
       const sanitizedMessage = result;
       console.log(sanitizedMessage)

       // ...)
     });
  };



}
