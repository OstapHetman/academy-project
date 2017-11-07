import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle('HealthCare | Dashboard');
  }

}
