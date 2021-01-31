import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { KonbiCredits } from '../konbi-credits';

@Component({
  selector: 'app-page-starting',
  templateUrl: './page-starting.component.html',
  styleUrls: ['./page-starting.component.css']
})
export class PageStartingComponent implements OnInit {

  konbiCredits: KonbiCredits = {
    card_id: "",
    user_name: "",
    balance: 0,
    top_up_amount: 0
  };

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  submitCardID(): void {
    console.log("Card ID: " + this.konbiCredits.card_id);
    this.location.go("/top-up/" + this.konbiCredits.card_id);
  }

}
