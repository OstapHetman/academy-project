import { Settings } from './../models/Settings';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  settings: Settings = {
    disableCareplanOnAdd: false,
    disableCareplanOnEdit: false
  }
  constructor() { }

  getSettings(){
    return this.settings;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
