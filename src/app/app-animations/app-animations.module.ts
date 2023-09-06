// app-animations.module.ts
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule as NoopAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    NoopAnimationsModule,
  ],
})
export class AppAnimationsModule {}

export const cardAnimation = trigger('cardAnimation', [
  state('true', style({ transform: 'translateX(0)' })),
  state('false', style({ transform: 'translateX(100%)' })),
  transition('true => false', animate('300ms ease-in-out')),
  transition('false => true', animate('300ms ease-in-out')),
]);
