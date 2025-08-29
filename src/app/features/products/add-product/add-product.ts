import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { products } from '../products.constants';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    CommonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule,
  ],
  standalone: true,
})
export class AddProduct {
  productForm: FormGroup;
  isLoading = false;
  categories = ['Electronics', 'Books', 'Clothing', 'Home Appliances'];
  productId: string | null = null;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      availableSince: [''],
      active: [true],
    });
  }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.productId = productId;
      const productToEdit = products.find((p) => p.id === productId);
      if (productToEdit) {
        this.productForm.patchValue(productToEdit);
      }
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        console.log(this.productForm.value);
        this.isLoading = false;
      }, 2000);
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
