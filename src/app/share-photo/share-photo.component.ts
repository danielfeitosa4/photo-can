import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhotoCanService } from '../services/photo-can.service';

@Component({
  selector: 'app-share-photo',
  templateUrl: './share-photo.component.html',
  styleUrls: ['./share-photo.component.css']
})
export class SharePhotoComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef;
  files: any[]= [];

  constructor(private photoCanService:PhotoCanService) { }

  sendFile(file: any) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.photoCanService.sendFormData(formData).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
    });
  }

  private sendFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.sendFile(file);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
    for (let index = 0; index < fileUpload.files.length; index++)
    {
     const file = fileUpload.files[index];
     this.files.push({ data: file, inProgress: false, progress: 0});
    }
      this.sendFiles();
    };
    fileUpload.click();
}

  ngOnInit(): void {
    this.photoCanService.getProducts().subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
