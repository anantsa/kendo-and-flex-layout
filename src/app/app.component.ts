import { Component, ViewChild, NgZone, AfterViewInit, Injectable } from '@angular/core';
import { sampleProducts } from './products';
import { GridComponent } from '@progress/kendo-angular-grid';
import { take } from 'rxjs/operators';
import { getLocaleTimeFormat } from '@angular/common';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpProgressEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // page size

  public data: any[];

  title = 'kendo-app';
  public sampleProducts: any[] = sampleProducts;



  // two-way data-binding with datepicker  
  value: Date = new Date();
  dob: Date = new Date(1995, 7, 7, 12, 30, 10);
  min: Date = new Date(2019, 0, 1);
  max: Date = new Date(2019, 12, 1);
  dateChange() {
    console.log('consoling ::', this.value);
  }
  // fiting columns
  @ViewChild(GridComponent)
  public grid: GridComponent;

  constructor(private ngZone: NgZone) { }
  public ngAfterViewInit() {
    this.fitColumns();

  }
  public onDataStateChange() {
    this.fitColumns();
  }
  private fitColumns() {
    this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
      this.grid.autoFitColumns;
    })
  }

}
export class UploadInterceptor implements HttpInterceptor {
    // upload files
    uploadSaveUrl = 'saveUrl';
    uploadRemoveUrl = 'removeUrl';
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === 'saveUrl') {
      const events: Observable<HttpEvent<any>>[] = [0, 30, 60, 100].map((x) => of(<HttpProgressEvent>{
        type: HttpEventType.UploadProgress,
        loaded: x,
        total: 100
      }).pipe(delay(1000)));

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === 'removeUrl') {
        return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }
}



