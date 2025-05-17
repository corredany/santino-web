import { ChangeDetectionStrategy, Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { SliderInicioComponent } from "../../../components/slider-inicio/slider-inicio.component";
import { ButtonComponent } from '../../../components/shared/button/button.component';

@Component({
  selector: 'app-inicio',
  imports: [SliderInicioComponent, ButtonComponent],
  templateUrl:'./inicio.component.html',
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent implements AfterViewInit {
  @ViewChild('imgCompContainer') imgCompContainer!: ElementRef;
  @ViewChild('imgCompOverlay') imgCompOverlay!: ElementRef;
  @ViewChild('imgCompSlider') imgCompSlider!: ElementRef;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  ngAfterViewInit() {
    this.initImageComparison();
  }

  private initImageComparison() {
    const container = this.imgCompContainer.nativeElement;
    const overlay = this.imgCompOverlay.nativeElement;
    const slider = this.imgCompSlider.nativeElement;

    // Set initial position
    overlay.style.width = '50%';
    slider.style.left = '50%';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    if (e.target === this.imgCompSlider.nativeElement || e.target === this.imgCompContainer.nativeElement) {
      this.isDown = true;
      this.startX = e.pageX - this.imgCompContainer.nativeElement.offsetLeft;
      this.scrollLeft = this.imgCompOverlay.nativeElement.offsetWidth;
      e.preventDefault();
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.isDown = false;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return;

    const container = this.imgCompContainer.nativeElement;
    const overlay = this.imgCompOverlay.nativeElement;
    const slider = this.imgCompSlider.nativeElement;

    const x = e.pageX - container.offsetLeft;
    const walk = (x / container.offsetWidth) * 100;

    if (walk >= 0 && walk <= 100) {
      overlay.style.width = `${walk}%`;
      slider.style.left = `${walk}%`;
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(e: TouchEvent) {
    if (e.target === this.imgCompSlider.nativeElement || e.target === this.imgCompContainer.nativeElement) {
      this.isDown = true;
      this.startX = e.touches[0].pageX - this.imgCompContainer.nativeElement.offsetLeft;
      this.scrollLeft = this.imgCompOverlay.nativeElement.offsetWidth;
      e.preventDefault();
    }
  }

  @HostListener('window:touchend')
  onTouchEnd() {
    this.isDown = false;
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(e: TouchEvent) {
    if (!this.isDown) return;

    const container = this.imgCompContainer.nativeElement;
    const overlay = this.imgCompOverlay.nativeElement;
    const slider = this.imgCompSlider.nativeElement;

    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x / container.offsetWidth) * 100;

    if (walk >= 0 && walk <= 100) {
      overlay.style.width = `${walk}%`;
      slider.style.left = `${walk}%`;
    }
  }
}
