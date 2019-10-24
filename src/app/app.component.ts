import { Component, ViewChild, NgZone, AfterViewInit, Injectable, ElementRef } from '@angular/core';
import { sampleProducts } from './products';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { GridComponent } from '@progress/kendo-angular-grid';
import { take } from 'rxjs/operators';
import { getLocaleTimeFormat } from '@angular/common';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpProgressEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   color = this.getColor();
//   fullWidthCondition = false;
//   expand() {
//     this.fullWidthCondition = !this.fullWidthCondition;
//     console.log('toggle');
//   }
//   getColor() {
//     return 'red';
//   }
//   // page size
//   public data: any[];

//   title = 'kendo-app';
//   public sampleProducts: any[] = sampleProducts;



//   // two-way data-binding with datepicker  
//   value: Date = new Date();
//   dob: Date = new Date(1995, 7, 7, 12, 30, 10);
//   min: Date = new Date(2019, 0, 1);
//   max: Date = new Date(2019, 12, 1);
//   dateChange() {
//     console.log('consoling ::', this.value);
//   }
//   // fiting columns
//   @ViewChild(GridComponent)
//   public grid: GridComponent;

//   constructor(private ngZone: NgZone) { }
//   public ngAfterViewInit() {
//     this.fitColumns();

//   }
//   public onDataStateChange() {
//     this.fitColumns();
//   }
//   private fitColumns() {
//     this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
//       this.grid.autoFitColumns;
//     })
//   }
// }

export class AppComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}









