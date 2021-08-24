import { Component, OnInit } from '@angular/core';
import { SavetemplateService } from './savetemplate.service';

@Component({
  selector: 'app-savetemplate',
  templateUrl: './savetemplate.component.html',
  styleUrls: ['./savetemplate.component.scss'],
})

export class SavetemplateComponent implements OnInit {

    constructor (
        private savetemplateService: SavetemplateService,
    ) { }

    ngOnInit() {
    }
}