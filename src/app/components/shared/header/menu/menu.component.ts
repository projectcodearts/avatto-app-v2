import { Component, OnInit } from '@angular/core';
import { MenuServices } from 'src/app/allServices/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu: any[];
  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(private _menu: MenuServices) { }

  ngOnInit() {
    this.menu = this._menu.getmenu();
  }

}
