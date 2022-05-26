/* eslint-disable no-unused-vars */
import { Component } from '../component/component.js';
import { iComponent } from '../interface/component.js';
import { series } from '../models/series';
import { iSerie } from '../interface/component.js';
import { Serie } from './Serie.js';



export class List extends Component implements iComponent {
  template: string;
  seriesList: Array<iSerie>
  constructor(selector: string) {
      super();
      this.seriesList = series
      this.template = this.createTemplate();
      this.render(selector);
      this.seriesList.forEach((item) => item.watched
            ? new Serie(item, 'slot.watched')
            : new Serie(item, 'slot.unwatched'));
    }
  }
  createTemplate(): string {
      let unwatched = this.seriesList.filter(
        (item) => !item.watched      ).length
      let watched = this.seriesList.filter(
        (item) => item.watched      ).length
      
      let html = `<section class="series">
      <h2 class="section-title">Series list</h2>
      <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>`;
        
        html +=  
  // crear slots y anclar
        
        `
      
        <p class="info">You have ${unwatched} series pending to watch</p>
        ${unwatched === 0
          ? `<p class="info">Congrats! You've watched all your series</p>`
          : ''}
  ` 
      html += `<section class="series-watched">
      <h3 class="subsection-title">Watched series</h3>
      <p class="info">You have watched ${watched} series</p>
      ${watched === 0
        ? `<p class="info">You already have not watched any serie</p>`
        : ''}
      <ul class="series-list series-list--watched">`


      
      
     
      return html;
  }
}
