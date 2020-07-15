import { Component, OnInit } from '@angular/core';
import { MenuServices } from 'src/app/allServices/menu.service';
import { ApiService } from 'src/app/allServices/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu: any[];
  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(private _menu: MenuServices, private api: ApiService) { }

  ngOnInit() {
    this.menu = this._menu.getmenu();
  }
  logout() {
    this.api.logout();
  }

}
