import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {FormValue} from "./formValue";
import * as firebase from "firebase";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.css']
})
export class RsvpFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  submissionComplete: boolean;
  values: FormValue;

  constructor(private fb: FormBuilder, private router: Router) {
    this.submitted = false;
    this.submissionComplete = false;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      names: this.fb.array([this.createName()]),
      wedding: new FormControl('', Validators.required),
      brunch: '',
      cocktail: '',
      accommodations: '',
      allergies: '',
      message: '',

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
    const wedding: boolean = (formModel.wedding === 'true');
    let brunch: boolean = (formModel.brunch === 'true');
    let cocktail: boolean = (formModel.cocktail === 'true');
    const accommodations: string = formModel.accommodations;
    const allergies: string = formModel.allergies;
    const message: string = formModel.message;
    if (wedding === false) {
      brunch = false;
      cocktail = false;
    }
    this.values = {
      names: names,
      wedding: wedding,
      brunch: brunch,
      cocktail: cocktail,
      accommodations: accommodations,
      allergies: allergies,
      response: new Date().toString(),
      message: message
    };
    const formValues = this.values;
    this.sendData(formValues);
    this.sendData2(formValues);
    this.sendMail(formValues);

  }

   sendData(form: FormValue) {
     const rsvp = firebase.functions().httpsCallable('rsvpRealtime');
     this.submitted = true;
     rsvp(form).then(() => {
       this.submissionComplete = true;
       alert("Reservation Submitted Successfully");
       setTimeout(() => {
         this.router.navigate(['/home'])
       }, 1000);
     }).catch(err => {
       console.log(err);
       console.log(form)
       alert("There was an error submitting your reservation. Please try again or contact kennedy513@gmail.com");
       this.submitted = false;
       this.form.patchValue({
         names: form.names,
         wedding: form.wedding.toString(),
         brunch: form.brunch.toString(),
         cocktail: form.cocktail.toString(),
         accommodations: form.accommodations,
         allergies: form.allergies,
         message: form.message
       })
     });
  };

  sendMail(form: FormValue) {
    const mail = firebase.functions().httpsCallable('sendmail');
    mail(form)
      .catch(err => {
      console.log(err)
      console.log(form)
    });
  }

  sendData2(form: FormValue) {
    const rsvp2 = firebase.functions().httpsCallable('rsvpFirestore');
    this.submitted = true;
    rsvp2(form).catch(err => {
        console.log(err);
        console.log(form)
    });
  }
}
