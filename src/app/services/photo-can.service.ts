import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotoCanService {

  SERVER_URL = 'http://localhost:5201/api/Buckets/get-all'

  apiUrl = 'https://localhost:7025/api/Buckets/create?'

  apiUrlImage: string = 'https://localhost:7025/api/Files/upload?bucketName=photo-can'

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get(`${this.SERVER_URL}`)
  }

  public sendFormData(formData: any) {
    return this.httpClient.post<any>(this.apiUrlImage, formData);
}
}
