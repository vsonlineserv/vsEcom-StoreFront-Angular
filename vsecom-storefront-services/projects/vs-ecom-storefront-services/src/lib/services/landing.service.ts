import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ConfigurationProvider, ConfigureConfiguration } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private httpClient: HttpClient, public configurationProvider: ConfigurationProvider, @Inject(PLATFORM_ID) private platformId: object) {
  }

  GetMainMenu() {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetMainMenu');
  }

  GetFeaturedProducts() {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId+ '/GetFeaturedProducts');
  }

  GetCurrency() {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/Currency');
  }

  GetSearchProductList(query) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetSearchProductsFilter/' + query);
  }

  GetTopCategoriesList(){
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId+ '/GetTopCategoriesList');
  }

}