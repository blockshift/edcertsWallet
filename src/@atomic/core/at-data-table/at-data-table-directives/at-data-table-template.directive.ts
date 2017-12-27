import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk';

@Directive({selector: '[atDataTableTemplate]ng-template'})
export class AtDataTableTemplateDirective extends TemplatePortalDirective {

  @Input() atDataTableTemplate: string;
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
