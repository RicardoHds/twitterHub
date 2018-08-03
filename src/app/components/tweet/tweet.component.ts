import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets.service';
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  tweet: string;
  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
  }
  postTweet() {
    this.tweetsService.postTwits(this.tweet);
  }

}
