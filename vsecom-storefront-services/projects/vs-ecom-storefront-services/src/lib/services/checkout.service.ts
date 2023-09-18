import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigurationProvider } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {

  userToken: any;

  constructor(private httpClient: HttpClient, public configurationProvider: ConfigurationProvider,  @Inject(PLATFORM_ID) private platformId: object) { }

  GetProviderDetails() {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetProviderDetails/', httpOptions);
  }

}
