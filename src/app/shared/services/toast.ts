import { Injectable } from '@angular/core';
import { Toast } from '../components/toast/toast';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private static toastRef: Toast | null = null;
  register(ref: Toast) {
    ToastService.toastRef = ref;
  }

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    ToastService.toastRef?.show(message, type);
  }
}
