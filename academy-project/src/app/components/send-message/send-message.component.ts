import { Settings } from './../../models/Settings';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from './../../services/settings.service';
import { Router} from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  settings: Settings;

  constructor(
    private router: Router,
    public settingsService: SettingsService,
    private _titleService: Title,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.settings  = this.settingsService.getSettings();
    this._titleService.setTitle('HealthCare | Settings');
  }
  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show('Settings saved', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/dashboard', {outlets: {content: ['settings']}}]);
  }
}
