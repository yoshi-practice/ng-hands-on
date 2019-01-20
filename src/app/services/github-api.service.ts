import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Repository } from './../types/repository.type';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  constructor(private http: HttpClient) { 
    
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>('https://api.github.com/users/yoshi1125hisa/repos');
  }
}

