import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../services/info-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public service: InfoPageService) { }

  anio: number = new Date().getFullYear();

  ngOnInit(): void {
  }

}
