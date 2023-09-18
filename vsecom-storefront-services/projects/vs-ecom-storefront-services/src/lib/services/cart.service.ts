import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ConfigurationProvider } from '../vsecom-appSettings';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  userToken: any;

  constructor(private httpClient: HttpClient, @Inject(PLATFORM_ID) private platformId: object, public configurationProvider: ConfigurationProvider) { }

  GetShoppingCartItems(userName: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetShoppingCartItems/' + userName, httpOptions);
  }

  AddShoppingCartItemList(shoppingCartItemModelList: any, userName: any) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    let shoppingCartItemListDTO: any = {
      shoppingCartDTOList: shoppingCartItemModelList,
      userName: userName
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/AddShoppingCartItemList/', shoppingCartItemListDTO, httpOptions);
  }

  AddShoppingCartItem(shoppingCartItemModel, userName) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    var shoppingCartItem = {
      ProductId: shoppingCartItemModel.ProductId,
      BranchId: shoppingCartItemModel.BranchId,
      UnitPrice: shoppingCartItemModel.SpecialPrice,
      Quantity: shoppingCartItemModel.Quantity,
      AdditionalShippingCharge: shoppingCartItemModel.AdditionalShippingCharge,
      UserName: userName,
      SelectedSize: shoppingCartItemModel.SelectedSize
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/AddShoppingCartItem/', shoppingCartItem, httpOptions);
  }

  UpdateCartItemQuantity(shoppingCartItemModel, userName) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    var shoppingCartItem = {
      ProductId: shoppingCartItemModel.ProductId,
      BranchId: shoppingCartItemModel.BranchId,
      UnitPrice: shoppingCartItemModel.SpecialPrice,
      Quantity: shoppingCartItemModel.Quantity,
      AdditionalShippingCharge: shoppingCartItemModel.AdditionalShippingCharge,
      UserName: userName
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.put(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/UpdateCartItemQuantity/', shoppingCartItem, httpOptions);
  }

  RemoveShoppingCartItem(shoppingCartItemModel, userName) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    var shoppingCartItem = {
      ProductId: shoppingCartItemModel.ProductId,
      BranchId: shoppingCartItemModel.BranchId,
      UnitPrice: shoppingCartItemModel.SpecialPrice,
      Quantity: shoppingCartItemModel.Quantity,
      AdditionalShippingCharge: shoppingCartItemModel.AdditionalShippingCharge,
      UserName: userName
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/RemoveShoppingCartItem/', shoppingCartItem, httpOptions);
  }

  GetCartDiscount(userName, couponCode) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetCartDiscount/' + userName + '/' + couponCode, httpOptions);
  }

  GetBuyerAddress(userName) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetBuyerAddress/' + userName, httpOptions);
  }

  AddBuyerAddress(addressModel) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/AddBuyerAddress/', addressModel, httpOptions);
  }

  EnabledProviderDetaile() {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetEnabledProviderDetails/');
  }

  getShippingType() {
    const httpOptions = {
      responseType: 'text' as 'json'
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetShippingType', httpOptions);
  }

  getShippingDetails(data) {
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetShippingDetails/' + data);
  }

  GenerateOrder(shoppingCartItemModelList, userName, paymentMethod, deliveryMethod, couponCode,
    paypalOrderId, razorPaymentId, razorOrderId, razorSignature, razorGeneratedOrderId) {
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
    var shoppingCartItemListDTO = {
      shoppingCartDTOList: shoppingCartItemModelList,
      userName: userName,
      paymentMethod: paymentMethod,
      deliveryMethod: deliveryMethod,
      couponCode: couponCode,
      payPalOrderId: paypalOrderId,
      razorPaymentId: razorPaymentId,
      razorOrderId: razorOrderId,
      razorSignature: razorSignature,
      razorGeneratedOrderId: razorGeneratedOrderId
    };
    return this.httpClient.post(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/Orders/', shoppingCartItemListDTO, httpOptions);
  }

  GenerateRazorOrderId(amount) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/CreateRazorOrderId/' + amount, httpOptions);
  }

  GetOrderConfirmationDetails(orderid, userName) {
    if (isPlatformBrowser(this.platformId)) {
      let tokenObj = JSON.parse(localStorage.getItem('loggedInUserToken'));
      this.userToken = tokenObj.accessToken;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.userToken
      })
    };
    return this.httpClient.get(this.configurationProvider.config.endPoint + 'Seller/' + this.configurationProvider.config.branchId + '/GetOrderConfirmationDetails/' + orderid + '/' + userName, httpOptions);
  }

}
