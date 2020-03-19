import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserdataComponent } from './userdata/userdata.component';
import { BackendService } from './backend.service';
const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full' },
  {path:'user',component:UserComponent },
  {path:'userdata',component:UserdataComponent },
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
