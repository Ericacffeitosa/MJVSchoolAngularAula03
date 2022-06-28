import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaColaboradoresComponent } from 'src/features/components/lista-colaboradores/lista-colaboradores.component';
import { FeaturesModule } from 'src/features/features.module';
import { SharedModule } from 'src/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
