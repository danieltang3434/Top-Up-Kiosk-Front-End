import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KonbiCreditsService {

  private getTokenUrl = 'http://me.konbi.me/?oauth=token';
  private doPaymentUrl = 'http://me.konbi.me/index.php/wp-json/wp/v2/wallet/pay';

  headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

  getTokenBody = {
    grantType: 'client_credentials',
    clientId: 'ybNOCvwKHiXW1bfAlfbiF1xmdE7XZN0XZHT0CkSS',
    clientSecret: 'AsZL5G4EjuqFgbxLvozc1khNhipyziXs2dPc8TDn',
  };

  private token = '';
  private isTokenRequested = false;

  constructor(
    private httpClient: HttpClient,
  ) { }

}
