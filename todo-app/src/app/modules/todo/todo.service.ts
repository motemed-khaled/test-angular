import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  API_URL: string;

  constructor(private httpClient: HttpClient) {
    this.API_URL = 'http://localhost:4000/todos';
  }

  createTodo(taskName: string): Observable<Todo> {
    return this.httpClient.post<Todo>(
      this.API_URL,
      { task: taskName },
      this.getAuth()
    );
  }

  deleteTodo(id: number): Observable<string> {
    return this.httpClient.delete<string>(
      `${this.API_URL}/${id}`,
      this.getAuth()
    );
  }

  updateTodo(id: number): Observable<Todo> {
    return this.httpClient.put<Todo>(
      `${this.API_URL}/${id}`,
      {},
      this.getAuth()
    );
  }

  getAuth(): { headers: HttpHeaders} {
    const user = JSON.parse(localStorage.getItem('userinfo')!);

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Basic ' + btoa(`${user[0].username}:${user[0].password}`),
      }),
    };
    return httpOptions;
  }
}
