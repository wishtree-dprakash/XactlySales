import { ElementRef } from "@angular/core";

export interface SalesUser {
  name: string;
  position: string;
  state: string;
  status: string;
  empID: string;
  children?: SalesUser[]
}

export interface NodeRelationship{
  parent:ElementRef | null,
  children: ElementRef[]
}


