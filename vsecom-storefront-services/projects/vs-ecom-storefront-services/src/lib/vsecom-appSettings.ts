import { Injectable, Provider } from '@angular/core';

export class ConfigureConfiguration {
  endPoint: string = '';
  storeReferenceId: string = '';
  branchId: string = '';
  storeId: string = '';
}

export class Configuration {
  config?: Provider;
}

@Injectable({ providedIn: 'root' })
export abstract class ConfigurationProvider {
  abstract get config(): ConfigureConfiguration;
}

@Injectable({ providedIn: 'root' })
export class DefaultConfiguration implements ConfigurationProvider {
  get config(): ConfigureConfiguration {
    return { endPoint: ``, storeReferenceId: '', branchId: '', storeId: ''};
  }
}
