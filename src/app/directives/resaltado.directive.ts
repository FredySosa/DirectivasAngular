import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private er: ElementRef) {

    console.log('Directiva llamada we');

  }

  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro() {

    this.resaltar(this.nuevoColor);
  }


  @HostListener('mouseleave') mouseSalio() {
    this.er.nativeElement.style.backgroundColor = null;
  }

  private resaltar(color: string = 'yellow') {
    this.er.nativeElement.style.backgroundColor = color;
  }

}
