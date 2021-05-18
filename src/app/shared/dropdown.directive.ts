import { Directive, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isShow=true;

  constructor(private renderer:Renderer2) { }

  @HostListener('click') toggleOpen(){
    console.log("clicked");
    this.isShow=!this.isShow;
  } 

}
