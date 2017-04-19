import {Component }from '@angular/core'; 
import {ActivatedRoute, Router, NavigationEnd }from "@angular/router"; 

@Component( {
    selector:'el-menu', 
    templateUrl:'./menu.component.html'
})

export class MenuComponent {

    url:string; 

    constructor (private route:ActivatedRoute, 
    private _router:Router) {

        _router
        .events
        .subscribe((e) =>  {
// see also 

        if (e instanceof NavigationEnd) {
        console.log(e.url)
                this.url = e.url; 
                        }
        
        })
    }
}