import { Component, Input, OnInit } from '@angular/core';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DEFAULT = 'default',
  TRANSPARENT = 'transparent'
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input()
  public label?: string;

  @Input()
  public iconBefore?: string;

  @Input()
  public iconAfter?: string;

  @Input()
  public variant: string = ButtonVariants.DEFAULT;

  @Input()
  public bordered: boolean = false;
  constructor() {
   }

  ngOnInit(): void {
  }

}
