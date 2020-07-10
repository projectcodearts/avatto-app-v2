import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServices {

  constructor() { }

  getmenu(){
    return [
      {
        menuname: "Home",
        menulink: "/home",
        menuicon: "home"
      },
      {
        menuname: "about us",
        menulink: "/about-us",
        menuicon: "people"
      },
      {
        menuname: "products",
        menulink: "/products",
        menuicon: "gift"
      },
      {
        menuname: "Categories",
        menulink: "/categories",
        menuicon: "duplicate"
      },
      {
        menuname: "about us",
        menulink: "/about-us",
        menuicon: "people"
      },
      {
        menuname: "Eligiblity",
        menulink: "/syllabus",
        menuicon: "laptop"
      },
      {
        menuname: "Papers",
        menulink: "/papers",
        menuicon: "book"
      },
      {
        menuname: "Mocktest",
        menulink: "/mocktest",
        menuicon: "flask"
      }
      
    ]
  }
}
