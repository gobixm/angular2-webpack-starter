import { InsaneListComponent } from './insane-list.component';
/**
 * Created by gobi on 03.04.2017.
 */
export const routes = [
  {
    path: '', children: [
    {path: '', component: InsaneListComponent}
  ]
  }
];
