import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService, Section } from '../../../services/producto.service';
import { ButtonComponent } from "../../../components/shared/button/button.component";
import { GalleriaMarcas } from '../../../components/marcas-gallery.component/marcas-gallery.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [GalleriaModule, ButtonComponent, GalleriaMarcas, CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  standalone: true,
  providers: [PhotoService]
})
export class ProductoComponent implements OnInit {
    section: Section | null = null;
    loading = true;
    error: string | null = null;

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

    constructor(
        private photoService: PhotoService,
        private route: ActivatedRoute
    ) {}

    images: any[] = [];

    ngOnInit() {
        this.route.params.subscribe(params => {
            const sectionId = params['id'];
            this.loadSection(sectionId);
        });

        this.images = [
            {
                itemImageSrc: 'img/blum.png',
                thumbnailImageSrc: 'img/blum.png',
                alt: 'Blum',
                title: 'Blum'
            },
            {
                itemImageSrc: 'img/arauco.png',
                thumbnailImageSrc: 'img/arauco.png',
                alt: 'Arauco',
                title: 'Arauco'
            },
            {
                itemImageSrc: 'img/brucco.jpg',
                thumbnailImageSrc: 'img/brucco.jpg',
                alt: 'Brucco',
                title: 'Brucco'
            },
            {
                itemImageSrc: 'img/promob.jpg',
                thumbnailImageSrc: 'img/promob.jpg',
                alt: 'Promob',
                title: 'Promob'
            },
            {
                itemImageSrc: 'img/krono.jpg',
                thumbnailImageSrc: 'img/krono.jpg',
                alt: 'Kronospan',
                title: 'Kronospan'
            },
            {
                itemImageSrc: 'img/hafele.jpg',
                thumbnailImageSrc: 'img/hafele.jpg',
                alt: 'Hafele',
                title: 'Hafele'
            },
            {
                itemImageSrc: 'img/rehau.jpg',
                thumbnailImageSrc: 'img/rehau.jpg',
                alt: 'Rehau',
                title: 'Rehau'
            },
        ];
    }

    private loadSection(sectionId: string) {
        this.loading = true;
        this.error = null;
        
        this.photoService.getSection(sectionId)
            .then(section => {
                this.section = section;
                this.loading = false;
            })
            .catch(error => {
                this.error = 'Error al cargar la sección';
                this.loading = false;
                console.error('Error loading section:', error);
            });
    }
}