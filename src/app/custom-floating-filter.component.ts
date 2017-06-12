import {IFloatingFilterComp} from 'ag-grid-angular';
import {IFloatingFilterParams} from 'ag-grid';
import {Component} from '@angular/core';

@Component({
  selector: 'floating-filter',
  template: 'test'
})
export class CustomFloatingFilter implements IFloatingFilterComp {
  setFilter(data:any) {
    console.log('setFilter');
  }

  onParentModelChanged(parentModel: any): void
  {
    console.log("onParentModelChanged", parentModel);
  }

  agInit(params: IFloatingFilterParams<any, any>): void
  {
    console.log("floating filter init", params);
  }
}
