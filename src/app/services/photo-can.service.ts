import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoCanService {

  SERVER_URL = 'http://localhost:5201/api/Buckets/get-all'

  private apiUrl = 'http://localhost:5201/api/Files/upload?bucketName=photo-can'

  constructor(private http: HttpClient) { }

  public getProducts() {
      return this.http.get(`${this.SERVER_URL}`)
  }

  fazerPost(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
