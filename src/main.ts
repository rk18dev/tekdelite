/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDcxdQJ3_xeAUlDyVAtiAPB5yTfwr34yzg",
  authDomain: "tekdelite-de9a6.firebaseapp.com",
  databaseURL: "https://tekdelite-de9a6-default-rtdb.firebaseio.com",
  projectId: "tekdelite-de9a6",
  storageBucket: "tekdelite-de9a6.appspot.com",
  messagingSenderId: "913551698210",
  appId: "1:913551698210:web:2b3e9db2edde0822a65d7b"
};
initializeApp(firebaseConfig); // Initialize Firebase here

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




  