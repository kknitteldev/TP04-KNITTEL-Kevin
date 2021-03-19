import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  obs$! : Observable<string>;
  tabData : Array<string> = [];
  subscribe : any;
  cpt : number = 0;

  ngOnInit(): void {
    this.obs$ = new Observable(observer => {
      observer.next("Wejdene 1");
      observer.next("Wejdene 2");
      observer.next("Wejdene 3");
      observer.complete;
    })
  }

  obsClick() {
    if (this.cpt < 1) {
      if (this.subscribe) {
        this.subscribe.unsubscribe();
      }
  
      this.subscribe = this.obs$.subscribe({
        next : value => { this.tabData.push(value) },
        complete : () => { console.log("Obs complete nigga") },
        error : err => { console.log(err) }
      })
    }
    this.cpt++;
  }
}