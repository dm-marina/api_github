import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { InformComponent } from './inform/inform.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user-list/user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReposListComponent } from './reposes/repos-list/repos-list.component';
import { ReposComponent } from './reposes/repos-list/repos/repos.component';
import { FormsModule } from '@angular/forms';
import { SearchedListComponent } from './search/searched-list/searched-list.component';
import { SearchedItemComponent } from './search/searched-list/searched-item/searched-item.component';
import { ReposesComponent } from './reposes/reposes.component';
import { ReposItemComponent } from './reposes/repos-list/repos/repos-item/repos-item.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SearchComponent,
    InformComponent,
    UserListComponent,
    UserComponent,
    ReposListComponent,
    ReposComponent,
    SearchedListComponent,
    SearchedItemComponent,
    ReposesComponent,
    ReposItemComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
