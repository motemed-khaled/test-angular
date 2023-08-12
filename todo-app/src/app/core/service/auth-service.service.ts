import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usres } from 'src/app/core/models/usres';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  API_URL_Users: string;
  API_URL_todo: string;
  private curentUser: BehaviorSubject<Usres[]>;
  private myTodo: BehaviorSubject<Todo[]>;
  private userState: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient) {
    this.API_URL_Users = 'http://localhost:4000/users';
    this.API_URL_todo = 'http://localhost:4000/todos';
    this.curentUser = new BehaviorSubject<Usres[]>([]);
    this.myTodo = new BehaviorSubject<Todo[]>([]);
    this.userState = new BehaviorSubject<boolean>(false);
    this.updateUserState();
  }

  getAllUsers(): Observable<Usres[]> {
    return this.httpClient.get<Usres[]>(this.API_URL_Users);
  }

  getTodos(username: string, password: string): Observable<Todo[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(`${username}:${password}`),
      }),
    };
    return this.httpClient.get<Todo[]>(this.API_URL_todo, httpOptions);
  }

  updateCurrent(newUser: Usres[]): void {
    this.curentUser.next(newUser);
  }

  getCurrentUser(): BehaviorSubject<Usres[]> {
    return this.curentUser;
  }

  updateUserState(): void {
    if (localStorage.getItem('userinfo')) {
      this.userState.next(true);
    } else {
      this.userState.next(false);
    }
  }

  getUserState(): Observable<boolean> {
    return this.userState.asObservable();
  }

  setUserState(value: boolean): void {
    this.userState.next(value);
  }

  setMyTodo(value: Todo[]) {
    this.myTodo.next(value);
  }

  getMyTodo(): Observable<Todo[]> {
    return this.myTodo.asObservable();
  }
}
