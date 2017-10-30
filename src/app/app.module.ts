import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdDialogModule,
  MdExpansionModule, MdFormFieldModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdPaginatorModule,
  MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdSelectModule, MdSidenavModule, MdSlideToggleModule, MdSliderModule,
  MdSnackBarModule, MdSortModule, MdStepperModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule
  } from '@angular/material';

import 'hammerjs';
import { FormsModule } from '@angular/forms';

//import { CdkTableModule } from '@angular/cdk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesComponent } from './component/routes-component/routes.component';
import { TransportComponent } from './component/transport-component/transport.component';
import { StationComponent } from './component/station-component/station.component';
import { GoogleMapComponent } from './component/google-map-component/google-map.component';
import { UserComponentComponent } from './component/user-component/user-component.component';
import { RouteComponent } from './component/route-component/route.component';

import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';


const ANGULAR_MATERIAL_2_MODULES = [
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdDialogModule,
  MdExpansionModule, MdFormFieldModule, MdGridListModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdPaginatorModule,
  MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdSelectModule, MdSidenavModule, MdSlideToggleModule, MdSliderModule,
  MdSnackBarModule, MdSortModule, MdStepperModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule
  ];

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent,
    TransportComponent,
    StationComponent,
    GoogleMapComponent,
    UserComponentComponent,
    RouteComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ...ANGULAR_MATERIAL_2_MODULES,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEs2u6-WiCtEeQ5vvb-j72-a4d7shdaGI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
