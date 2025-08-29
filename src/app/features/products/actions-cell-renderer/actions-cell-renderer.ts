// actions-cell-renderer.component.ts
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-actions-cell-renderer",
  template: `
    <button
      mat-icon-button
      color="primary"
      aria-label="Edit"
      (click)="onEdit()"
    >
      <mat-icon>edit</mat-icon>
    </button>
    <button
      mat-icon-button
      color="warn"
      aria-label="Delete"
      (click)="onDelete()"
    >
      <mat-icon>delete</mat-icon>
    </button>
  `,
  imports: [MatButtonModule, MatIconModule],
})
export class ActionsCellRendererComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  onEdit() {
    if (this.params.onEditClick) {
      this.params.onEditClick(this.params);
    }
  }

  onDelete() {
    if (this.params.onDeleteClick) {
      this.params.onDeleteClick(this.params);
    }
  }
}
