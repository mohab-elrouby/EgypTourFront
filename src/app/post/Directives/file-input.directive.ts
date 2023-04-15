import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appFileInput]'
})
export class FileInputDirective {

  constructor(private el:ElementRef) { }
@ViewChild('imgValid') imgValid!:ElementRef<HTMLSpanElement>;

  @HostListener('change') onchange() {
      const fileInput = this.el.nativeElement;
      const files = fileInput.files;
      
      for(let i = 0; i< files.length; i++) { 
        const file = files[i];
        const fileType = file.type.split('/')[0];
        if (fileType !== 'image') {
          fileInput.value = ''; // Clear the input field if it contains a non-image file
          this.ngAfterViewInit();
        }
        // this.imgValid.nativeElement.style.display = 'none';
      }
    }
  ngAfterViewInit() {
    this.imgValid.nativeElement.style.display = 'block';
  }
    // @HostListener('mousedown', ['$event']) onMousedown(event: MouseEvent) {
    //   event.preventDefault();
    //   return false;
    // }
  
}
