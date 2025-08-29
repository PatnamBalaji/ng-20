import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('./layout/layout').then((m) => m.Layout),
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./features/products/products').then((m) => m.Products),
      },
      {
        path: 'products/add',
        loadComponent: () =>
          import('./features/products/add-product/add-product').then(
            (m) => m.AddProduct
          ),
      },

      {
        path: 'products/edit/:id',
        loadComponent: () =>
          import('./features/products/add-product/add-product').then(
            (m) => m.AddProduct
          ),
      },
    ],
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products' },
];
