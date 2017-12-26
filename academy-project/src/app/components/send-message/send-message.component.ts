import { Settings } from './../../models/Settings';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from './../../services/settings.service';
import { Router} from '@angular/router';

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
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.settings  = this.settingsService.getSettings();
  }
  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show('Settings saved', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/dashboard', {outlets: {content: ['settings']}}]);
  }
}
