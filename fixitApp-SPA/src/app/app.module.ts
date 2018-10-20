import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { ContactComponent } from './contact/contact.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ValueComponent } from './value/value.component';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      ContactComponent,
      MyServicesComponent,
      MyBlogComponent,
      AboutComponent,
      FooterComponent,
      ValueComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
