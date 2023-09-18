import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ConfigurationProvider } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  userName: any;
  userToken: any;

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: object, public configurationProvider: ConfigurationProvider) { }

  ChangePassword(data: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    if (isPlatformBrowser(this.platformId)) {
      this.userName = localStorage.getItem('userName');
    }
    var changePasswordDTO = {
      CurrentPassword: data.CurrentPassword,
      UserName: this.userName,
      NewPassword: data.NewPassword
    }
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/ChangePassword', changePasswordDTO, httpOptions);
  }

  ForgotPassword(userEmail: any) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/ForgotPassword/' + userEmail);
  }

  ResetPassword(data: any) {
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/ResetPassword', data);
  }
  
}
