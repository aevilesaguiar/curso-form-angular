
import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms'
import { DataService } from '../data/data.service';
import { of, Observable } from 'rxjs';

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

  postError=false;
  postErrorMessage='';
  //subscriptionTypes=['one','two','three'];

  subscriptionTypes: Observable<string[]> | undefined;


  test:string="Maria";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes=this.dataService.getSubscriptionTypes();
  }



  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onHttpError(errorResponse: any){
    console.log('error', errorResponse);
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;

  }


  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
      //verificar se o formulário é válido senão mostraremos um erro

      if(form.valid){
      //precisamos incluir o subscribe que é um método do Observabel
    this.dataService.postUserSettingsForm(this.userSettings).subscribe({
      //a arrow function será executada se for sucesso
     next: (result)=>console.log('success',result),
      //caso negativo informará o erro
      error: (error)=> this.onHttpError(error),
      complete:()=>console.info()}

    );
  }  //se ele não for valido mostramos esse erro
   else{
    this.postError=true;
    this.postErrorMessage="Please fix the above errors";

  }
}

/*
//precisamos incluir o subscribe que é um método do Observabel
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      result=> console.log('sucess:',result),
      error=> console.log('error:',error)
    );
  }

*/


}
