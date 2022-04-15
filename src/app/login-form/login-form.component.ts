import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from './model.form';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

login= new Login();


  constructor(router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("data: " + this.login.email);
}}
