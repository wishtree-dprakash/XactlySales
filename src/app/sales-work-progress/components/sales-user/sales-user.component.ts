import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesUser } from 'src/app/shared/interface/sales-user.interface';

@Component({
  selector: 'app-sales-user',
  templateUrl: './sales-user.component.html',
  styleUrls: ['./sales-user.component.scss']
})
export class SalesUserComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SalesUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: SalesUser) { }

  ngOnInit(): void {
  }

}
