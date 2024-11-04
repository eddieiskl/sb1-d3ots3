import { Observable, Frame } from '@nativescript/core';

export class StreamPreviewViewModel extends Observable {
  private _streamTitle: string;
  private _isCameraOn: boolean = true;
  private _isMicOn: boolean = true;

  constructor(context: any) {
    super();
    this._streamTitle = context.streamTitle;
  }

  get streamTitle(): string {
    return this._streamTitle;
  }

  toggleCamera() {
    this._isCameraOn = !this._isCameraOn;
    console.log('Camera toggled:', this._isCameraOn);
  }

  toggleMic() {
    this._isMicOn = !this._isMicOn;
    console.log('Mic toggled:', this._isMicOn);
  }

  endStream() {
    console.log('Ending stream');
    Frame.topmost().goBack();
  }
}