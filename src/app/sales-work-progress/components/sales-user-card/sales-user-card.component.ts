import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SalesUser } from '../../../shared/interface/sales-user.interface';
import { SalesUserComponent } from '../sales-user/sales-user.component';

@Component({
  selector: 'app-sales-user-card',
  templateUrl: './sales-user-card.component.html',
  styleUrls: ['./sales-user-card.component.scss']
})
export class SalesUserCardComponent implements OnInit {
  @Input() user: SalesUser;
  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   *
   *
   * @memberof SalesUserCardComponent
   */
  public openUserInDialog(): void {
    const dialogRef = this.dialog.open(SalesUserComponent, {
      width: '500px',
      data: this.user,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

};
