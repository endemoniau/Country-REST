import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  constructor(public _apiServ: ApiService) {}

  ngOnInit(): void {}
}
