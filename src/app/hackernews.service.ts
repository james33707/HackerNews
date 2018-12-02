import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HackernewsService {

  constructor(private http: HttpClient) {}

  getNewestStories(){     
    return this.http.get<any[]>('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
  } 

  getNewestStoryDetails(storyNumber: string){     
    return this.http.get<any[]>('https://hacker-news.firebaseio.com/v0/item/' + storyNumber + '.json?print=pretty');
  } 

  public getString(){
    return "Hello";
  }
}