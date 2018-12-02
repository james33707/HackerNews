import { NeweststoriesComponent } from './neweststories/neweststories.component';
import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hacker News';

  @ViewChild(NeweststoriesComponent) newStorysComponent: NeweststoriesComponent;

  onSearchChanged(value){
    //console.log('onSearchChangedParent ' + value.searchText);
    this.newStorysComponent.search(value.searchText);
  }
}
