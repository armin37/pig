import {Injectable} from '@angular/core';
import {catchError, EMPTY, map, Observable, shareReplay} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ENDPOINT} from "../../env";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private ENDPOINT = ENDPOINT;

  constructor(private httpClient: HttpClient) {
  }

  private generateHeader = () => {
    let header = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('Accept', 'application/json');
    return header;
  };


  sendRequest(method = 'POST',
              url = '/',
              body = {},
              headers = {}): Observable<any> {

    if (!headers)
      headers = this.generateHeader();
    let sendUrl = this.ENDPOINT + url;

    return this.httpClient.request(method, sendUrl, {
      body,
      headers,
      observe: 'response',
      withCredentials: false
    }).pipe(
      map(res => res.body),
      catchError(error => {
        return EMPTY;
      }),
      shareReplay()
    )
  }

}
