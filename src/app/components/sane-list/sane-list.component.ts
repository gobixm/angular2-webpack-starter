/**
 * Created by gobi on 03.04.2017.
 */
import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'sane-list',
  template: `
    <span>sane-list</span>
  `,
})
export class SaneListComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Sane List` component');
  }
}
