import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-view-auto',
  templateUrl: './view-auto.component.html',
  styleUrls: ['./view-auto.component.css']
})
export class ViewAutoComponent implements OnInit {
  viewAutos: any;
  autoId: any;

  constructor(private autoService: AutoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      this.autoId = data['id'];
    });
    this.autoService.viewAutos(this.autoId).subscribe( data => {
      this.viewAutos = data;
   });
  }

}
