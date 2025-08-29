import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { AgGridModule } from "ag-grid-angular";
import {
  AllCommunityModule,
  ColDef,
  GridReadyEvent,
  ModuleRegistry,
} from "ag-grid-community";
import { ActionsCellRendererComponent } from "./actions-cell-renderer/actions-cell-renderer";
import { products } from "./products.constants";

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: "app-products",
  templateUrl: "./products.html",
  styleUrls: ["./products.scss"],
  imports: [MatToolbarModule, AgGridModule, MatButtonModule, MatIconModule],
  standalone: true,
})
export class Products {
  productForm: FormGroup;
  isLoading = false;
  categories = ["Electronics", "Books", "Clothing", "Home Appliances"];

  // Generate 100 static sample products with all fields
  rowData = products;

  columnDefs: ColDef[] = [
    { headerName: "ID", field: "id", width: 70 },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    {
      headerName: "Description",
      field: "description",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Price",
      field: "price",
      sortable: true,
      filter: true,
      width: 90,
    },
    {
      headerName: "Stock",
      field: "stock",
      sortable: true,
      filter: true,
      width: 120,
    },
    { headerName: "Category", field: "category", sortable: true, filter: true },
    {
      headerName: "Available Since",
      field: "availableSince",
      sortable: true,
      filter: true,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
      headerName: "Active",
      field: "active",
      sortable: true,
      filter: true,
      cellRenderer: (params: any) => (params.value ? "Yes" : "No"),
    },
    {
      headerName: "Actions",
      cellRenderer: ActionsCellRendererComponent,
      cellRendererParams: {
        onEditClick: this.onEdit.bind(this),
        onDeleteClick: this.onDelete.bind(this),
      },
      width: 130,
    },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      category: ["", Validators.required],
      availableSince: ["", Validators.required],
      active: [true],
    });
  }

  onAddProduct() {
    this.router.navigate(["/products/add"]);
  }
  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }

  onEdit(params: any) {
    const product = params.data;
    console.log("Editing product:", product);
    this.router.navigate(["/products/edit/", product.id]);
  }

  onDelete(params: any) {
    const index = this.rowData.indexOf(params.data);
    if (index > -1) {
      this.rowData.splice(index, 1);
      this.rowData = [...this.rowData];
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        // Reset or update logic here
      }, 2000);
    }
  }
}
