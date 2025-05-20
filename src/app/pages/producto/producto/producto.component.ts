import { ChangeDetectionStrategy, Component, OnInit, model } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../../../services/photo.service';
import { ButtonComponent } from "../../../components/shared/button/button.component";
import { GalleriaMarcas } from '../../../components/marcas-gallery.component/marcas-gallery.component';

@Component({
  selector: 'app-producto',
  imports: [GalleriaModule, ButtonComponent, GalleriaMarcas],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  standalone: true,
  providers: [PhotoService]
})
export class ProductoComponent implements OnInit {
    images: any[] = [];

    responsiveOptions = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then(images => this.images = images);
    }
}