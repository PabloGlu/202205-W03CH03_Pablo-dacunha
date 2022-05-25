import { Component } from './component/component.js';
export class Serie extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return ``;
    }
}
