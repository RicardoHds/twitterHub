import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  private tweet: any[] = [
    {name: '', alias: '', dateTime: '', tweet: ''}
  ];

  constructor() { }
}
