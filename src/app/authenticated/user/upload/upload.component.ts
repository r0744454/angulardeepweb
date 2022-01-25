import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/shared/models/Plant';
import { PlantService } from 'src/app/shared/services/plant.service';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  plantImage: File = new File([], "tfile.jpg");
  isSubmitted: boolean = false;
  submitError: boolean = false;

  plant: Plant = {id: 0, userId: parseInt(localStorage.getItem('id')??'0')}

  imgSource: string = "";

  constructor(private plantService: PlantService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if(this.plantImage.size == 0) {
      this.submitError = true;
      return;
    }

    var data = new FormData();
    data.append('image', this.plantImage);

    this.plantService.postPlant(this.plant).subscribe(r1 => {
      this.plant = r1
      this.plantService.patchImage(this.plant, data).subscribe(r2 => {
        this.router.navigateByUrl("user/analysis")
      },
      err => {
        console.log(err);
      });
    },
    err => {
      console.log(err);
    });
  }

  getBase64(file: File): Promise<string |ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onRefreshFile(e: Event): void {
    var target = (e as HTMLInputEvent).target
    if(target.files != null) {
      this.plantImage = target.files[0];

      console.log("Image size: " + this.plantImage.size);
      this.getBase64(this.plantImage).then(r => {
        if(r != null) {
          this.imgSource = r.toString();
        }
      });

      this.submitError = false;
    }
  }

}
