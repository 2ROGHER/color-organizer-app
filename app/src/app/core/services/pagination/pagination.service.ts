import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  // 1. Hardcoded url, change letter
  private baseUrl: string = "https://www.roger.com/api/v1/colors"
  constructor(
    private http: HttpClient,
  ) { }

  // 1. Create a method to call throught HTTP to the server to get the page=p and size=s
  getData(p: number, s: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${p}&size=${s}`);
  }
}
