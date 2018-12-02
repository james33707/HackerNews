import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ArticleComponent } from './article/article.component';
import { ImportComponent } from './import/import.component';
import { NeweststoriesComponent } from './neweststories/neweststories.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ArticleComponent,
    ImportComponent,
    NeweststoriesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
