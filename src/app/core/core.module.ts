import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from './message.service';
import { ProductService } from './product.service';
import { AuthService } from './auth.service';
import { ProductResolverService } from './product-resolver.service';
import { AuthGuardService } from './auth-guard.service';
import { LoadingComponent } from './loading/loading.component';
import { ProductGuardService } from './product-guard.service';
import { Step2ResolverService } from './step2-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MessageService,
    ProductService,
    AuthService,
    ProductResolverService,
    AuthGuardService,
    ProductGuardService,
    Step2ResolverService
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ]
})
export class CoreModule { }
