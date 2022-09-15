
import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms'

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  //objeto valido com a a interface ela será nosso modelo de dados
  originalUserSettings: UserSettings = {
    name:'Aeviles',
    emailOffers:true,
    interfaceStyle:'dark',
    subscriptionType:'Annual',
    notes:' here are some notes...'

  };

  //queremos mudar esse userSetting e fazer uma cópia do original
  //o operador de spread terá o originalUserSettings e copiará  cada propriedade
  //em user settings.Isso é uma maneira de criar uma cópia das propriedades de nível superior
  //Lodash tem uma função chamada clone profundo que copia completamente um objeto

  userSettings:UserSettings={
    ...this.originalUserSettings
  };

  test:string="Maria";

  constructor() { }

  ngOnInit(): void {
  }



  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }


}
