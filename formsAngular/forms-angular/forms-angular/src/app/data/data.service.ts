import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annual','lifetime'])
  }

//injetamos o httpClient
  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings : UserSettings): Observable< any> {//any podemos lidar com qualquer retorno de postagem
      //http para postar o formulário

      return this.http.post('https://putsreq.com/boCPHpB9XUay9YdSaOyt',userSettings);



    //simulação de um falsoObservable simular no console
      //return of(userSettings);
  }
}
