import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usres } from 'src/app/core/models/usres';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  API_URL_Users: string = "http://localhost:4000/users";
  API_URL_todo: string = "http://localhost:4000/todos";
  curentUser: BehaviorSubject<Usres[]> = new BehaviorSubject<Usres[]>([]);
  myTodo: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  userState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.getUserState();
  }

  getAllUsers():Observable<Usres[]>{
    return this.httpClient.get<Usres[]>(this.API_URL_Users)
  }

  getTodos(username:string , password:string):Observable<Todo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
      })
    };
    return this.httpClient.get<Todo[]>(this.API_URL_todo , httpOptions)
  }

  updateCurrent(newUser: Usres[]):void{
    this.curentUser.next(newUser);
  }

  getCurrentUser():BehaviorSubject<Usres[]> {
    return this.curentUser
  }

  getUserState(){
    if (localStorage.getItem("userinfo")) {
      this.userState.next(true)
    } else {
      this.userState.next(false)
    }
  }
}
