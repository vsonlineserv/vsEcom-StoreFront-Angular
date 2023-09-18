import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ConfigurationProvider } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  userToken: any;

  constructor(private httpClient: HttpClient, public configurationProvider: ConfigurationProvider, @Inject(PLATFORM_ID) private platformId: object) { }

  GetMinMaxForProductCategory(categoryId: any) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetMinMaxForProductCategory/' + categoryId);
  }

  GetProducts(categoryId: any, selectedFilter: any, priceRangeFrom: any, priceRangeTo: any, pageStart: any, pageSize: any, productFilterListSelected: any) {
    var productParameterFilterSet = {
      id: categoryId
    }
    if(pageStart){
      productParameterFilterSet["pageStart"] = pageStart;
    }
    else{
      productParameterFilterSet["pageStart"] = null;
    }
    if(pageSize){
      productParameterFilterSet["pageSize"] = pageSize;
    }
    else{
      productParameterFilterSet["pageSize"] = null;
    }
    if (selectedFilter) {
      selectedFilter.SelectedBrandIdList = [];
      for (let i = 0; i < selectedFilter.SelectedBrandList.length; i++) {
        selectedFilter.SelectedBrandIdList.push(selectedFilter.SelectedBrandList[i].Id);
      }

      if (selectedFilter.SortBy && selectedFilter.SortBy.id) {
        selectedFilter.SortById = selectedFilter.SortBy.id;
      }
      else {
        selectedFilter.SortById = 0;
      }
      productParameterFilterSet["filter"] = selectedFilter;
    }
    if (priceRangeTo > 0) {
      productParameterFilterSet["priceRangeFrom"] = priceRangeFrom;
      productParameterFilterSet["priceRangeTo"] = priceRangeTo;
    }
    if(productFilterListSelected){
      productParameterFilterSet["selectedProductFilter"] = productFilterListSelected;
    }
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/GetProductsWithDescription/', productParameterFilterSet);
  }

  GetMinMaxForProductSearch(searchString) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetMinMaxForProductSearch/'+ searchString);
  }

  SearchCatalogue(productFilter, selectedFilter, priceRangeFrom, priceRangeTo, pageStart, pageSize) {
    var productSearchFilterSet = {
      productFilter: productFilter, filter: selectedFilter,
      pageStart: pageStart, pageSize: pageSize
    }

    if (selectedFilter) {
      selectedFilter.SelectedBrandIdList = [];
      for (let i = 0; i < selectedFilter.SelectedBrandList.length; i++) {
        selectedFilter.SelectedBrandIdList.push(selectedFilter.SelectedBrandList[i].Id);
      }

      if (selectedFilter.SortBy && selectedFilter.SortBy.id) {
        selectedFilter.SortById = selectedFilter.SortBy.id;
      }
      else {
        selectedFilter.SortById = 0;
      }

      if (selectedFilter.SelectedBrandIdList.length > 0) {
        productSearchFilterSet["filter"] = selectedFilter;
      }
    }
    if (priceRangeTo > 0) {
      productSearchFilterSet["priceRangeFrom"] = priceRangeFrom;
      productSearchFilterSet["priceRangeTo"] = priceRangeTo;
    }
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/SearchCatalogueWithBuy/', productSearchFilterSet);
  }

  GetSearchProductList(query) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetSearchProductsFilter/' + query);
  }

  GetProductDetails(productId, flagLocationBased) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/GetProductDetails/'+ productId + '/' + flagLocationBased);
  }

  GetProductKeyFeatures(productId) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetProductKeyFeatures/'+ productId);
  }

  GetProductSpecification(productId) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetProductSpecification/'+ productId);
  }

  GetAllOffers() {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetAllOffers');
  }

  ContactSeller(name,email,mobile,subject,branchId,productId) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization' : 'Bearer ' + this.userToken
      }),
      responseType: 'text' as 'json'
    };
    let productContactResultSet = {
      Name: name,
      Email: email,
      Mobile: mobile,
      Subject: subject,
      Branchid: branchId,
      ProductId: productId
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + branchId + '/ContactSeller', productContactResultSet, httpOptions);
  }


  GetProductRating(productId: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetProductRating/' + productId, httpOptions);
  }

  UpdateProductRating(productId: any, rating: any, userName: any) {


    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/UpdateProductRating/' + productId + '/' + rating + '/' + userName, httpOptions);
  }

  CompareProduct(productIds: any) {
    var prdIds = new Array(productIds);
    var ProductIds = prdIds.toString();
  
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetProductComparison/'+ ProductIds);
  }
  
  CompareProductDetailedSpecification(productIds: any) {
    var prdIds = new Array(productIds);
    var ProductIds = prdIds.toString();
  
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetProductDetailedComparison/'+ ProductIds);
  }

  GetProductVariant(productId: any, flaglocation: any) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.storeId + '/GetProductDetailsWithVariant/' + productId + '/' + flaglocation);
  }
}
