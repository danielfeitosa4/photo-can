import { Component, OnInit } from '@angular/core';
import { PhotoCanService } from '../services/photo-can.service';

@Component({
  selector: 'app-share-photo',
  templateUrl: './share-photo.component.html',
  styleUrls: ['./share-photo.component.css']
})
export class SharePhotoComponent implements OnInit {

  constructor(private buckets:PhotoCanService) { }

  enviarDados() {
    const dados = { /* seus dados aqui */ };
    this.buckets.fazerPost(dados).subscribe(
      response => {
        console.log('Resposta da API:', response);
        // Faça algo com a resposta da API
      },
      error => {
        console.error('Erro na requisição:', error);
        // Trate o erro adequadamente
      }
    );
  }

  ngOnInit(): void {
    this.buckets.getProducts().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
