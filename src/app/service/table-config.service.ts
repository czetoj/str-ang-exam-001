import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableConfigService {

  tableCols: ITableCol[] = [
    { key: 'id', text: 'Id' },
    { key: 'name', text: 'Name' },
    { key: 'superPower', text: 'SuperPower' },
    { key: 'address', text: 'Address' },
  ];

  constructor() { }
}
