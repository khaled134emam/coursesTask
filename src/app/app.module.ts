import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FilterComponent } from './Component/home/filter/filter.component';
import { CoursesListComponent } from './Component/shared/courses-list/courses-list.component';
import { TodoListComponent } from './Component/home/todo-list/todo-list.component';
import { RecentUpdatesListComponent } from './Component/home/recent-updates-list/recent-updates-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '../lib/mobiscroll/js/mobiscroll.angular.min';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentProfileComponent } from './Component/student-profile/student-profile.component';
import { CourseDetailsComponent } from './Component/shared/courses-list/course-details/course-details.component';
import { StudentsComponent } from './Component/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FilterComponent,
    CoursesListComponent,
    TodoListComponent,
    RecentUpdatesListComponent,
    StudentProfileComponent,
    CourseDetailsComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MbscModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  entryComponents: [StudentProfileComponent, CourseDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
