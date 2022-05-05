import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidht = 0;
  onTogleSidenav(data: SideNavToggle): void {
    this.screenWidht = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
