import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { Routes }                   from '@angular/router';
import { RouterModule }             from '@angular/router';

import { AppComponent }             from './app.component';
import { MonPremierComponent }      from './mon-premier/mon-premier.component';
import { AppareilComponent }        from './appareil/appareil.component';
import { PostComponent }            from './post/post.component';
import { PostListComponent }        from './post-list/post-list.component';
import { AuthComponent }            from './auth/auth.component';
import { AppareilViewComponent }    from './appareil-view/appareil-view.component';
import { AppareilService }          from './services/appareil.service';
import { AuthService }              from './services/auth.service';
import { SingleAppareilComponent }  from './single-appareil/single-appareil.component';
import { FourOhFourComponent }      from './four-oh-four/four-oh-four.component'
import { AuthGuard }                from "./services/auth-guard.service";

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostComponent,
    PostListComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
