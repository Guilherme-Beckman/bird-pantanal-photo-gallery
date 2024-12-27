import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateBirdComponent } from './pages/create-bird/create-bird.component';

export const routes: Routes = [ { path: 'login', component: LoginComponent},{ path: '', component: HomeComponent},{path: 'create', component: CreateBirdComponent}];
