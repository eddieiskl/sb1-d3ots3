import { Observable, Frame } from '@nativescript/core';

export class LiveViewModel extends Observable {
  private _streamTitle: string = '';
  private _categories: any[] = [
    { id: '1', name: 'Trading Cards' },
    { id: '2', name: 'Collectibles' },
    { id: '3', name: 'Toys' },
    { id: '4', name: 'Comics' }
  ];

  constructor() {
    super();
  }

  get streamTitle(): string {
    return this._streamTitle;
  }

  set streamTitle(value: string) {
    if (this._streamTitle !== value) {
      this._streamTitle = value;
      this.notifyPropertyChange('streamTitle', value);
    }
  }

  get categories(): any[] {
    return this._categories;
  }

  startStream() {
    console.log('Starting stream:', this.streamTitle);
    // For now, we'll just navigate to a stream preview page
    Frame.topmost().navigate({
      moduleName: 'pages/live/stream-preview-page',
      context: {
        streamTitle: this.streamTitle
      }
    });
  }
}