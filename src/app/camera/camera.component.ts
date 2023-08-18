import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit{
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
    this.initializeWebcam
  }

  async initializeWebcam() {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = this.videoElement.nativeElement;

      video.srcObject = mediaStream;
      video.play();
    } catch (err) {
      console.log('Não há permissões para acessar a webcam');
    }
  }

  captureImage() {
    const canvas = this.canvasElement.nativeElement;
    const video = this.videoElement.nativeElement;

    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;

    const context = canvas.getContext('2d');
    if(context != null) {
      context.drawImage(video, 0, 0);
    }

    const link = document.createElement('a');
    link.download = 'foto.png';
    link.href = canvas.toDataURL();
    link.textContent = 'Clique para baixar a imagem';
    document.body.appendChild(link);
  }

}
