/* eslint-disable no-unused-vars */
import { Component } from '../component/component.js';
import { series } from '../models/series';
import { Serie } from './Serie.js';
export class List extends Component {
    template;
    seriesList;
    constructor(selector) {
        super();
        this.seriesList = series;
        this.template = this.createTemplate();
        this.render(selector);
        this.seriesList.forEach((item) => 
        // ternario para diferenciar series item.watched 
        item.watched ? new Serie(item, 'slot.watched')
            : new Serie(item, 'slot.unwatched'));
    }
    createTemplate() {
        let unwatched = this.seriesList.filter((item) => !item.watched).length;
        let watched = this.seriesList.filter((item) => item.watched).length;
        let html = `<section class="series">
      <h2 class="section-title">Series list</h2>
      <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>`;
        html +=
            // crear slots y anclar
            `
      
        <p class="info">You have ${unwatched} series pending to watch</p>
        <!--<p class="info">Congrats! You've watched all your series</p>-->
  `;
        html += `<section class="series-watched">
      <h3 class="subsection-title">Watched series</h3>
      <p class="info">You have watched ${watched} series</p>
      <!--<p class="info">You already have not watched any serie</p>-->
      <ul class="series-list series-list--watched">`;
        return html;
    }
}
