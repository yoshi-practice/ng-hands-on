import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { GithubApiService } from './services/github-api.service' 
import { FormsModule } from '@angular/forms'
import { RepositoryComponent } from './components/repository/repository.component' 


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
