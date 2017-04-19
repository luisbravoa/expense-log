import {Injectable, NgModule}from "@angular/core"; 
import {ICategory }from "./category.interface"; 
import {Http, Response }from "@angular/http"; 

import {Observable }from 'rxjs/Observable'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/map';
import { IExpense } from "app/common/expense.interface";

@Injectable()
@NgModule()
export class DataService implements Injectable {

    categoryUrl:string = '/api/categories'; 
    expensesUrl:string = '/api/expenses'; 

    constructor (private _http:Http) {
        this.getCategories()
        .subscribe((cats) =>  {
            console.log(cats)
        },
        error => { 
            console.error(error);
        });

        this.getExpenses()
        .subscribe((cats) =>  {
            console.log(cats)
        },
        error => { 
            console.error(error);
        })
    }

    private extractData(res:Response) {
        let body = res.json();
        return body; 
    }

    private handleError(error:Response | any)  {
        console.error(error); 
        return Observable.throw(error); 
    }

    getCategories():Observable < ICategory[] >  {
        return this._http.get(this.categoryUrl)
        .map(this.extractData)
        .catch(this.handleError); 
    }
    getExpenses():Observable < IExpense[] >  {
        return this._http.get(this.expensesUrl)
        .map(this.extractData)
        .catch(this.handleError); 
    }
}