import { EventData, Page, Frame } from '@nativescript/core';
import { StreamPreviewViewModel } from './stream-preview-view-model';

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new StreamPreviewViewModel(page.navigationContext);
}