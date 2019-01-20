import { Observable } from 'rxjs';
import { GithubApiService } from './services/github-api.service';
import { Repository } from './types/repository.type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-handson';
  repos$;

  constructor(private githubApiService: GithubApiService) {
  
    
  }

  ngOnInit() {
    this.repos$ = this.githubApiService.getRepos();
  }
  
  search(word: string) {
    console.log(`search: ${word}`);
    this.repos$ = this.githubApiService.searchRepos(word);
  }
 
}

