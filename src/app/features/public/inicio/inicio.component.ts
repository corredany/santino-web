import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderInicioComponent } from '../../../components/slider-inicio/slider-inicio.component';
import { ButtonComponent } from '../../../components/shared/button/button.component';
import { ImageCompareModule } from 'primeng/imagecompare';
import { NosotrosButtonComponent } from '../../../components/nosotros-button/nosotros-button.component';
import { GalleriaMarcas } from '../../../components/marcas-gallery.component/marcas-gallery.component';
import { SeccionService } from '../../../core/services/seccion.service';
import { VideoService } from '../../../core/services/video.service';
import type { Video } from '../../../shared/models/video.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, SliderInicioComponent, ButtonComponent, ImageCompareModule, NosotrosButtonComponent, GalleriaMarcas],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent implements OnInit {
  private readonly seccionService = inject(SeccionService);
  private readonly videoService = inject(VideoService);
  private readonly cdr = inject(ChangeDetectorRef);

  videos: Video[] = [];

  ngOnInit() {
    this.seccionService.listar().subscribe({
      next: (secciones) => {
        const match = secciones.find((s) =>
          s.nombre.toLowerCase().includes('inicio'),
        );
        if (!match) return;
        this.videoService.listar(match.id).subscribe({
          next: (vids) => {
            this.videos = [...vids].sort((a, b) => a.orden - b.orden);
            this.cdr.markForCheck();
          },
        });
      },
    });
  }

  video(orden: number): string {
    return this.videos.find((v) => v.orden === orden)?.url ?? '';
  }
}
