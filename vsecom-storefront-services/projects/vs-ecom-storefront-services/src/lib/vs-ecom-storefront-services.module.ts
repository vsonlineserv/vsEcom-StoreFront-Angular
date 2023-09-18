import { ModuleWithProviders, NgModule } from '@angular/core';
import { DefaultConfiguration, Configuration, ConfigurationProvider, ConfigureConfiguration } from './vsecom-appSettings';
import { VsEcomStorefrontServicesComponent } from './vs-ecom-storefront-services.component';

@NgModule({
  declarations: [
    VsEcomStorefrontServicesComponent,
  ],
  imports: [
  ],
  exports: [
    VsEcomStorefrontServicesComponent,
  ],
  providers: [
    ConfigureConfiguration
  ]
})

export class VsEcomStorefrontServicesModule {
  static forRoot(
    libModuleConfiguration: Configuration = {}
  ): ModuleWithProviders<VsEcomStorefrontServicesModule> {
    return {
      ngModule: VsEcomStorefrontServicesModule,
      providers: [
        libModuleConfiguration.config || {
          provide: ConfigurationProvider,
          useClass: DefaultConfiguration,
        },
      ],
    };
  }
}
