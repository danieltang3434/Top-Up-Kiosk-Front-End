import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { KonbiCredits } from '../konbi-credits';
import { KonbiCreditsService } from '../konbi-credits.service';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.css']
})
export class TopUpComponent implements OnInit {

  isGettingData = true;
  isShowError = false;
  isDataRetrieved = false;
  konbiCredits: KonbiCredits = {
    card_id: "",
    user_name: "",
    balance: 0,
    top_up_amount: 0
  };

  private getTokenUrl = 'https://me.konbi.me/?oauth=token';
  private doPaymentUrl = 'https://me.konbi.me/index.php/wp-json/wp/v2/wallet/pay';
  private token = '';
  private isTokenRequested = false;

  private headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '/',
  };

  private getTokenBody = {
    grantType: 'client_credentials',
    clientId: 'ybNOCvwKHiXW1bfAlfbiF1xmdE7XZN0XZHT0CkSS',
    clientSecret: 'AsZL5G4EjuqFgbxLvozc1khNhipyziXs2dPc8TDn',
  };

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private konbiCreditsService: KonbiCreditsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log("At Top Up component");
    this.getCardID();
  }

  getCardID(): void {
    const card_id = this.route.snapshot.paramMap.get('card_id');
    console.log("card_id: " + card_id);
    this.konbiCredits.card_id = card_id;

    // Try to request token
    this.httpClient.post<any>(this.getTokenUrl, this.getTokenBody, { headers: this.headers }).subscribe({
      next: data => {
        console.log("Token retrieved success.");
        this.token = data.access_token;
        this.isShowError = false;
        this.isTokenRequested = true;
      },
      error: error => {
        console.log("Token retrieved failed.");
        this.isShowError = true;
        this.isTokenRequested = false;
      }
    })

    // If token get successfully
    if (this.isTokenRequested) {
      // Try to make payment of $0.01
      this.httpClient.post<any>(this.doPaymentUrl,
        {
          access_token: this.token,
          card_id: card_id,
          amount: '0.01',
          description: 'Get account info',
        }).subscribe({
          next: data => {
            console.log("Payment made success.");
            this.isDataRetrieved = true;
            this.isShowError = false;
            this.konbiCredits.balance = data.balance + 0.01;
            this.konbiCredits.user_name = data.display_name;
          },
          error: error => {
            console.log("Payment made failed.");
            this.isDataRetrieved = false;
            this.isShowError = true;
          }
        })
    }

    this.isGettingData = false;

  }

}
