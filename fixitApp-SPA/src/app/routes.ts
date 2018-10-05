import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: MyServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'blog', component: MyBlogComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
