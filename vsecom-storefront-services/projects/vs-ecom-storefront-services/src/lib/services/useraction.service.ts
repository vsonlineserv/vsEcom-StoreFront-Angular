import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ConfigurationProvider } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})

export class UserActionService {

  userToken: any;

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: object, public configurationProvider: ConfigurationProvider) { }

  GetUserDetails(userName: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/GetMyDetails/' + userName, httpOptions);
  }

  UpdateUserDetails(userDTO: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      }),
      responseType: 'text' as 'json'
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/UpdateUserDetails', userDTO, httpOptions);
  }


  GetTrackingOrders() {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetTrackingOrders', httpOptions);
  }

  GetProductList(orderId) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetProductList/' + orderId, httpOptions);
  }

  CancelOrders(orderId) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/CancelOrders/' + orderId, httpOptions);
  }

  SearchOrders(orderId) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/SearchOrders/' + orderId, httpOptions);
  }

}
