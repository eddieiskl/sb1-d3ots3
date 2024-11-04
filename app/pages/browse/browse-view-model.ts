import { Observable } from '@nativescript/core';

export class BrowseViewModel extends Observable {
  private _streams: any[];

  constructor() {
    super();
    this._streams = [
      {
        id: '1',
        title: 'Rare Pokemon Cards Opening!',
        sellerImage: 'https://placekitten.com/100/100',
        thumbnailUrl: 'https://placekitten.com/400/300',
        viewerCount: '1.2K'
      },
      {
        id: '2',
        title: 'Vintage Comics Auction',
        sellerImage: 'https://placekitten.com/100/101',
        thumbnailUrl: 'https://placekitten.com/400/301',
        viewerCount: '856'
      }
    ];
  }

  get streams(): any[] {
    return this._streams;
  }

  onCategoryTap(args: any) {
    const category = args.object.text;
    console.log(`Selected category: ${category}`);
    // Implement category filtering
  }

  onStreamTap(args: any) {
    const stream = args.object.bindingContext;
    console.log(`Opening stream: ${stream.id}`);
    // Navigate to stream page
  }
}