import { Component } from '../component/component.js';
export class Serie extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        let html = ` 
    <ul class="series-list">
              <li class="serie">
                <img
                  class="serie__poster"
                  src=${serie.poster}
                  alt="${serie.name} poster"
                />
                <h4 class="serie__title">${serie.name}</h4>
                <p class="serie__info">${serie.director} (${serie.year})</p>
    `;
        return html;
    }
}
