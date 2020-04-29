import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FilterComponent } from './Component/home/filter/filter.component';
import { CoursesListComponent } from './Component/home/courses-list/courses-list.component';
import { TodoListComponent } from './Component/home/todo-list/todo-list.component';
import { RecentUpdatesListComponent } from './Component/home/recent-updates-list/recent-updates-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { HZDatePickerModule } from 'ng2-hz-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FilterComponent,
    CoursesListComponent,
    TodoListComponent,
    RecentUpdatesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // HZDatePickerModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
