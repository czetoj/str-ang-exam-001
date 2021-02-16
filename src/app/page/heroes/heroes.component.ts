import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';
import { ITableCol, TableConfigService } from 'src/app/service/table-config.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  filterKey: string = '';
  phrase: string = '';
  sortKey: string = '';

  heroList: Hero[] = this.heroService.getAll();
  cols: ITableCol[] = this.tableConfigService.tableCols;

  constructor(
    private heroService: HeroService,
    private tableConfigService: TableConfigService
  ) { }

  ngOnInit(): void {
  }


  onColumnSelect(key: string): void {
    this.sortKey = key;
  }

}
