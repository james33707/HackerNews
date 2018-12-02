import { HackernewsService } from './hackernews.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('getNewestStories', () => {

    //service imports
    let service: HackernewsService;

    beforeEach(() => {
         TestBed.configureTestingModule({
             imports: [HttpModule, HttpClientModule]
         });    
         
         service = TestBed.get(HackernewsService);
    });

    //--------------------------------------------------------------------------
    //Tests
    //--------------------------------------------------------------------------

    it('get Hello', () => {
        let result = service.getString();
        expect(result).toContain('Hello');
    });   

    it('get the newest storys from Hacker news must be more than zero', () => {

        let stories:any = service.getNewestStories();

        service.getNewestStories().subscribe(
        storyIdList => { 

            let length = storyIdList.length;
            console.log('storyIdList length ' + length);
            
            expect(length).toBe(0); //assert

        });   
    })
});
