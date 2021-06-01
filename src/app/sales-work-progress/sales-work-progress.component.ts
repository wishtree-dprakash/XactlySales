import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { SalesUserCardComponent } from './components/sales-user-card/sales-user-card.component';

declare var LeaderLine: any;

@Component({
  selector: 'app-sales-work-progress',
  templateUrl: './sales-work-progress.component.html',
  styleUrls: ['./sales-work-progress.component.scss']
})
export class SalesWorkProgressComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('salesTree', { read: ViewContainerRef }) container: ViewContainerRef;
  private componentRef: ComponentRef<SalesUserCardComponent>;

  constructor(private readonly resolver: ComponentFactoryResolver, private readonly cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('init');
  }

  ngAfterViewInit(): void {
    const start = this.createSalesTree();
    const end = this.createSalesTree();
    this.cd.detectChanges();
    const line = new LeaderLine(start.nativeElement, end.nativeElement,{dash: {animation: true}});
  }

  ngAfterViewChecked() {
    console.log('init');
  }

  private createSalesTree(): any {
    const factory: ComponentFactory<SalesUserCardComponent> = this.resolver.resolveComponentFactory(SalesUserCardComponent);
    this.componentRef = this.container.createComponent(factory);
    return this.componentRef.location;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
