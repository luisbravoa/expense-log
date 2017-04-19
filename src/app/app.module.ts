import {BrowserModule }from '@angular/platform-browser'; 
import {NgModule }from '@angular/core'; 
import {FormsModule }from '@angular/forms'; 
import {HttpModule }from '@angular/http'; 
import {RouterModule, ActivatedRoute, Routes }from "@angular/router"; 

import {AppComponent }from './app.component'; 
import {MenuComponent }from "app/menu/menu.component"; 
import {ExpenseListComponent }from "app/expense-list/expense-list.component"; 
import {HomeComponent }from "app/home/home.component"; 
import {DataService }from "app/common/data.service"; 

const appRoutes:Routes = [ {path:'', component:HomeComponent},  {path:'expenses', component:ExpenseListComponent}
]; 

@NgModule( {
  declarations:[
      AppComponent, 
      MenuComponent, 
      HomeComponent, 
      ExpenseListComponent
    ], 
  imports:[
      BrowserModule, 
      FormsModule, 
      HttpModule, 
      RouterModule.forRoot(appRoutes), 
      DataService
    ], 
  providers:[], 
  bootstrap:[AppComponent]
})
export class AppModule {}
