import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url="http://localhost:3000/register"
  private loginurl="http://localhost:3000/login"
  private userurl="http://localhost:3000/user"
  private userdataurl="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  registeruser(user){
    return this.http.post<any>(this.url,user)
  }
  loginuser(user){
    return this.http.post<any>(this.loginurl,user);
  }
  getuser(){
    return this.http.get<any>(this.userurl)
  }
  getuserdata(){
    return this.http.get<any>(this.userdataurl)
  }
}
