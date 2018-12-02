import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() searchChanged = new EventEmitter<any>();

  searchText: string;
  constructor() { }

  ngOnInit() {
  }

  onSearch($event){
    //console.log("Clicked " + this.searchText);
    let search_Text = this.searchText;
    this.searchChanged.emit({ searchText: search_Text});
  }

  onKeyUp(){
    //console.log("Enter " + this.searchText);
    //Emitter does not like "this"
    let search_Text = this.searchText;
    this.searchChanged.emit({ searchText: search_Text});
  }
}

