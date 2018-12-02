import { HackernewsService } from './../hackernews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'neweststories',
  templateUrl: './neweststories.component.html',
  styleUrls: ['./neweststories.component.scss']
})
export class NeweststoriesComponent implements OnInit {

  newStories: Story[] =[];
  isLoaded: boolean;
  searchText: string;

  constructor(private service: HackernewsService) {}

  ngOnInit() {

    this.isLoaded = true;

    //get the list of newest story id's
    this.service.getNewestStories().subscribe(
      storyIdList => { 

        //get each story record for the corresponding id and add it to the array
        storyIdList.forEach(storyId => {

          this.service.getNewestStoryDetails(storyId).subscribe(
            storyRecord => { 
              
              this.newStories.push(
                new Story(storyRecord['title'], storyRecord['by'], storyRecord['url']) 
             )
            }
          );
          this.isLoaded = false;
          //console.log(this.newStories);
        });
      }
    );  
  }

  search(value:string){
    this.searchText = value;
    console.log("searchChild " + value);
  }
}

export class Story {
  constructor(    
    public title: string,
    public by : string,
    public url: string) {
  }
}