import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigurationProvider } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuth: boolean = false;
  userName: any = "";
  useRefreshTokens: boolean = false;
  data: any;

  constructor(private httpClient: HttpClient, public configurationProvider: ConfigurationProvider) { }

  Login(loginData: any) {
    if (loginData.UserName == null || loginData.UserName === undefined || loginData.UserName == '') {
      this.data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
    }
    else {
      this.data = "grant_type=password&username=" + loginData.UserName + "&password=" + loginData.Password;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/token', this.data, httpOptions);
  }

  RegisterUser(registerData: any) {
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId  + '/RegisterUser', registerData);
  }

}
