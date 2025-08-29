import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toast',
  imports: [MatIconModule, CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  standalone: true,
})
export class Toast {
  message = signal<string>('');
  type = signal<'success' | 'error' | 'info'>('info');
  visible = signal(false);
  closeTimeout: any;

  show(msg: string, type: 'success' | 'error' | 'info' = 'info') {
    this.message.set(msg);
    this.type.set(type);
    this.visible.set(true);
    clearTimeout(this.closeTimeout);
    this.closeTimeout = setTimeout(() => this.visible.set(false), 2500);
  }

  close() {
    this.visible.set(false);
  }
}
