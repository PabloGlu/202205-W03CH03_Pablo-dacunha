import { Component } from '../component/component.js';
import { iComponent } from '../interface/component.js';


export class Score extends Component implements iComponent {
  constructor(selector: string) {
      super();
      this.template = this.createTemplate();
      this.render(selector);
  }
  createTemplate() {
    let html = `
        <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
    `
      return html ;
  }
}
