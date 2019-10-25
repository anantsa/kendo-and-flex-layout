import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UploadModule } from '@progress/kendo-angular-upload';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MoodalComponent, Moodal } from './moodal/moodal.component';
import { KendoTableComponent } from './kendo-table/kendo-table.component';





@NgModule({
  declarations: [
    AppComponent,
    MoodalComponent,
    Moodal,
    KendoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule,
    FlexLayoutModule,
    PDFModule,
    ExcelModule,
    GridModule,
    InputsModule,
    DateInputsModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    UploadModule,
    HttpClientModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule



  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MoodalComponent, Moodal]
})
export class AppModule { }
