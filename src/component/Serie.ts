import { Component } from '../component/component.js';
import { iComponent } from '../interface/component.js';
import { series } from '../models/series';
import { iSerie } from '../interface/component.js';
import { seriesList } from '../component/List.js';



export class Serie extends Component implements iComponent {
  constructor(selector: string) {
      super();
      this.seriesList = series
      this.template = this.createTemplate();
      this.render(selector);
      }
  createTemplate() {
    let html =` 
    <ul class="series-list">
              <li class="serie">
                <img
                  class="serie__poster"`
                  html += this.seriesList.forEach((item) =>
                  `
                  src=${item.poster}
                  alt="${item.name} poster"
                />
                <h4 class="serie__title">${item.name}</h4>
                <p class="serie__info">${item.creator} (${item.year})</p>
    `)
      return html ;
  }
}
