import { CarsModule } from './cars/cars.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'app/core/core.module';
import { CarsModule } from 'app/cars/cars.module';
import { RegisterModule } from 'app/register/register.module';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

@NgModule({
    imports: [
      CoreModule,
      RegisterModule,
      CarsModule,
      RouterModule,
      RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    //Services
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
