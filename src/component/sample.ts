import { Component } from '../component/component.js';
import { iComponent } from '../interface/component.js';


export class Sample extends Component implements iComponent {
  constructor(selector: string) {
      super();
      this.template = this.createTemplate();
      this.render(selector);
  }
  createTemplate() {
      return ``;
  }
}
