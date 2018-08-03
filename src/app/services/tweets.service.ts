import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  constructor() { }

  private tweet: any[] = [
    { name: 'Salvador Almaraz', alias: '@salvador.almaraz', dateTime: '8/3/2018 13:10', tweet: 'Hola' },
    { name: 'Salvador Almaraz', alias: '@salvador.almaraz', dateTime: '8/3/2018 15:10', tweet: 'Hola2' },
    { name: 'Salvador Almaraz', alias: '@salvador.almaraz', dateTime: '8/3/2018 13:10', tweet: 'hola3' },
    { name: 'Salvador Almaraz', alias: '@salvador.almaraz', dateTime: '8/3/2018 13:10', tweet: 'Tanta prisa tenemos por hacer, escribir y dejar oír nuestra voz en el silencio de la eternidad, que olvidamos lo único realmente importante: ¡VIVIR!. Robert Louis Stevenson' }
  ];
  
  public getTwits() {
    return this.tweet.reverse();
  }

  public postTwits(tweet: string) {
    const date = new Date();
    const tweetObj = { name: 'Salvador Almaraz', alias: 'salvador.almaraz', dateTime: date, tweet: tweet};
    this.tweet.push(tweetObj);
  }
}
