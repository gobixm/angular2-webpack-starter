/**
 * Created by gobi on 03.04.2017.
 */
import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'insane-list',
  template: `
    <h1>Insane list</h1>
    <sane-list></sane-list>
    <router-outlet></router-outlet>
  `,
})
export class InsaneListComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Insane List` component');
  }
}
