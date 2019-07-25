import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatRadioModule,
  MatButtonModule, MatTabsModule, MatTableModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ChartsModule } from 'ng2-charts';
import { AmortizedMenuComponent } from './amortized-menu/amortized-menu.component';
import { CreditMenuComponent } from './credit-menu/credit-menu.component';
import { LoanMenuComponent } from './loan-menu/loan-menu.component';
import { LinechartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanMenuComponent,
    AmortizedMenuComponent,
    TableComponent,
    CreditMenuComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
