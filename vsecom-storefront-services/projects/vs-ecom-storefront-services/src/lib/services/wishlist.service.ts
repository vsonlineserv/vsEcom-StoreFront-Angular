import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ConfigurationProvider } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  userToken: any;

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: object, public configurationProvider: ConfigurationProvider) { }

  AddUserWishlist(productId: any, userName: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/AddUserWishList/' + userName + '/' + productId, httpOptions);
  }

  RemoveUserWishlist(productId: any, userName: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/RemoveUserWishList/' + userName + '/' + productId, httpOptions);
  }

  GetUserWishlistCount(userName: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetUserWishlistCount/' + userName, httpOptions);
  }

  GetUserWishlist(userName: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetUserWishlist/' + userName, httpOptions);
  }

  GetWishlistProducts (lat: any,lng: any, mapRadius: any, pageStart: any,pageSize: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/GetUserWishlistProducts/'+ lat + '/' + lng + '/' + mapRadius + '/' + pageStart + '/' + pageSize, httpOptions);
  }


}