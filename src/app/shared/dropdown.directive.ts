import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') classToggle = false;

  ngOnInit() {

  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event']) onClick(eventData: Event) {
    this.classToggle = this.elRef.nativeElement.contains(eventData.target) ? !this.classToggle: false;
  }

}
