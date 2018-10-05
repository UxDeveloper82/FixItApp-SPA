import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { ContactComponent } from './contact/contact.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavComponent,
      ContactComponent,
      MyServicesComponent,
      MyBlogComponent,
      AboutComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }