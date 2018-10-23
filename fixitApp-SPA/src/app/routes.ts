import { MemberListResolver } from './_resolvers/member-list.resolver.';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
       path: '',
       runGuardsAndResolvers: 'always',
       canActivate: [AuthGuard],
       children: [
        { path: 'members', component: MemberListComponent,
            resolve: { users: MemberListResolver}},
        { path: 'members/:id', component: MemberDetailComponent,
          resolve: {user: MemberDetailResolver}},
        { path: 'messages', component: MessagesComponent },
        { path: 'lists', component: ListsComponent },
        { path: 'blog', component: MyBlogComponent },
       ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

