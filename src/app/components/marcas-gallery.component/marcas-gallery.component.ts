import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'app-galleria-marcas',
    templateUrl: './marcas-gallery.component.html',
    standalone: true,
    imports: [GalleriaModule],
})
export class GalleriaMarcas implements OnInit {
    images: any[] = [];

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    ngOnInit() {
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
}
