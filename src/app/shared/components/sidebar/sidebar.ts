import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [MatIconModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menu = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Back Testing', route: '/back-testing', icon: 'leaderboard' },
  ];
}
