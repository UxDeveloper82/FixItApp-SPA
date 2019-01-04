import { AlertifyService } from './../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class MemberEditResolver implements Resolve<Blog> {
    constructor(private blogService: BlogService, private router: Router,
        private alertify: AlertifyService) {}

  
}

