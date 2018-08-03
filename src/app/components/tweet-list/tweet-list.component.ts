import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';
import * as moment from 'moment';
@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
  }
  getTweets() {
    return this.tweetsService.getTwits();
  }
  tiempo(date: any) {
    const date2 = moment(new Date(date));
    const hoy = moment(new Date());
    if ( hoy.diff(date2, 'h') > 0) {
      return '·' + hoy.diff(date2, 'h') + ' h';
    } else {
      return '·' + hoy.diff(date2, 'm') + ' m';
    }
  }

}
