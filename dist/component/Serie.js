import { Component } from '../component/component.js';
import { series } from '../models/series';
export class Serie extends Component {
    constructor(selector) {
        super();
        this.seriesList = series;
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let html = ` 
    <ul class="series-list">
              <li class="serie">
                <img
                  class="serie__poster"`;
        html += this.seriesList.forEach((item) => `
                  src=${item.poster}
                  alt="${item.name} poster"
                />
                <h4 class="serie__title">${item.name}</h4>
                <p class="serie__info">${item.creator} (${item.year})</p>
    `);
        return html;
    }
}
