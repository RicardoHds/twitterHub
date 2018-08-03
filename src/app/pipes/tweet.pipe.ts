import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweet'
})
export class TweetPipe implements PipeTransform {
  tweet: string;
  transform(value: any, args?: any): any {
    console.log(this.tweet);
    if (!args) {
      return value;
    } else {
      args = args.toLowerCase();
    }
    return value.filter(x => {
      this.tweet = x.tweet;
      return (x.nombre.toLowerCase()).startsWith(args) === true;
    });
  }

}
