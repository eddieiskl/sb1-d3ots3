import { Observable } from '@nativescript/core';

export class ProfileViewModel extends Observable {
  private _profileImage: string = 'https://placekitten.com/200/200';
  private _username: string = 'JohnCollector';
  private _bio: string = 'Passionate collector and trader of rare items';
  private _followersCount: number = 1234;
  private _followingCount: number = 567;
  private _listings: any[] = [
    {
      id: '1',
      title: 'Charizard 1st Edition',
      price: '$999.99',
      image: 'https://placekitten.com/100/100'
    },
    {
      id: '2',
      title: 'Vintage Comic Bundle',
      price: '$299.99',
      image: 'https://placekitten.com/100/101'
    }
  ];
  private _reviews: any[] = [
    {
      rating: '⭐⭐⭐⭐⭐',
      comment: 'Great seller, fast shipping!'
    },
    {
      rating: '⭐⭐⭐⭐',
      comment: 'Items as described, would buy again'
    }
  ];

  constructor() {
    super();
  }

  get profileImage(): string {
    return this._profileImage;
  }

  get username(): string {
    return this._username;
  }

  get bio(): string {
    return this._bio;
  }

  get followersCount(): number {
    return this._followersCount;
  }

  get followingCount(): number {
    return this._followingCount;
  }

  get listings(): any[] {
    return this._listings;
  }

  get reviews(): any[] {
    return this._reviews;
  }
}