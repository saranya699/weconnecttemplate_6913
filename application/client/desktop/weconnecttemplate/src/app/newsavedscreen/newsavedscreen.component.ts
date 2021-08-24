import { Component, OnInit } from '@angular/core';
import { NewsavedscreenService } from './newsavedscreen.service';

@Component({
  selector: 'app-newsavedscreen',
  templateUrl: './newsavedscreen.component.html',
  styleUrls: ['./newsavedscreen.component.scss'],
})

export class NewsavedscreenComponent implements OnInit {

    constructor (
        private newsavedscreenService: NewsavedscreenService,
    ) { }

    ngOnInit() {
    }
}