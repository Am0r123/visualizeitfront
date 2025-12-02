import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  private readonly apiBase = environment.backendUrl;

  constructor(private http: HttpClient) { }
  translate(inputCode: string): Observable<any> {
    const object = { code: inputCode };
    return this.http.post<any>(`${this.apiBase}/translate`, object);
  }
}
