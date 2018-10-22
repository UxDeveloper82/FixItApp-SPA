import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
       path: '',
       runGuardsAndResolvers: 'always',
       canActivate: [AuthGuard],
       children: [
        { path: 'members', component: MemberListComponent },
        { path: 'messages', component: MessagesComponent },
        { path: 'lists', component: ListsComponent },
        { path: 'blog', component: MyBlogComponent },
       ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

