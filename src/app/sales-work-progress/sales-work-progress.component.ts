import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sales } from '../shared/constant/sales.constant';
import { SalesUser, NodeRelationship } from '../shared/interface/sales-user.interface';
import { SalesUserCardComponent } from './components/sales-user-card/sales-user-card.component';
import { SalesService } from './sales.service';

declare var LeaderLine: any;

@Component({
  selector: 'app-sales-work-progress',
  templateUrl: './sales-work-progress.component.html',
  styleUrls: ['./sales-work-progress.component.scss']
})
export class SalesWorkProgressComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly salesSubscription = new Subscription();
  private salesOrgData: SalesUser[];
  private relationshipCollection: NodeRelationship[] = [];

  @ViewChild('salesTreeVP', { read: ViewContainerRef }) containerVP: ViewContainerRef;
  @ViewChild('salesTreeManager', { read: ViewContainerRef }) containerManger: ViewContainerRef;
  @ViewChild('salesTreeLead', { read: ViewContainerRef }) containerLeader: ViewContainerRef;
  @ViewChild('salesTreeRepresentive', { read: ViewContainerRef }) containerRepresentive: ViewContainerRef;
  private componentRef: ComponentRef<SalesUserCardComponent>;

  constructor(private readonly resolver: ComponentFactoryResolver,
    private readonly salesService: SalesService,
    private readonly cd: ChangeDetectorRef) { }

  /**
   *
   *
   * @memberof SalesWorkProgressComponent
   */
  ngOnInit(): void {
    this.fetchSalesUserData();
  }

  /**
   *
   *
   * @memberof SalesWorkProgressComponent
   */
  ngAfterViewInit(): void {
    this.createSalesTree(this.salesOrgData);
    this.createConnectionLine();
    this.cd.detectChanges();

  }

  /**
   *
   *
   * @private
   * @param {SalesUser[]} [salesOrgData]
   * @param {ElementRef} [parent]
   * @memberof SalesWorkProgressComponent
   */
  private createSalesTree(salesOrgData?: SalesUser[], parent?: ElementRef): void {
    if (salesOrgData && salesOrgData.length) {
      let parentNode: ElementRef;
      let relation: NodeRelationship = { parent: parent || null, children: [] };
      salesOrgData.forEach(user => {
        if (user.position === 'Sales VP') {
          parentNode = this.createUserCard(this.containerVP, user);
          relation.children.push(parentNode);
          this.relationshipCollection.push(relation);
          this.createSalesTree(user.children, parentNode);
        } else if (user.position === 'Sales Manager') {
          parentNode = this.createUserCard(this.containerManger, user);
          relation.children.push(parentNode);
          this.relationshipCollection.push(relation);
          this.createSalesTree(user.children, parentNode);
        } else if (user.position === 'Sales Lead') {
          parentNode = this.createUserCard(this.containerLeader, user);
          relation.children.push(parentNode);
          this.relationshipCollection.push(relation);
          this.createSalesTree(user.children, parentNode);
        } else {
          parentNode = this.createUserCard(this.containerRepresentive, user);
          relation.children.push(parentNode);
          this.relationshipCollection.push(relation);
        }
      })
    }


  }
/**
 *
 *
 * @private
 * @param {ViewContainerRef} container
 * @param {SalesUser} user
 * @return {*}  {ElementRef}
 * @memberof SalesWorkProgressComponent
 */
private createUserCard(container: ViewContainerRef, user: SalesUser): ElementRef {
    const factory: ComponentFactory<SalesUserCardComponent> = this.resolver.resolveComponentFactory(SalesUserCardComponent);
    this.componentRef = container.createComponent(factory);
    this.componentRef.instance.user = user;
    return this.componentRef.location;
  }

  /**
   *
   *
   * @private
   * @memberof SalesWorkProgressComponent
   */
  private fetchSalesUserData(): void {
    this.salesSubscription.add(
      this.salesService.getSalesUserData().subscribe(data => {
        this.salesOrgData = data;
      })
    )
  }

  /**
   *
   *
   * @private
   * @memberof SalesWorkProgressComponent
   */
  private createConnectionLine(): void {
    console.log(this.relationshipCollection);
    this.relationshipCollection.forEach(parent => {
      if (parent.parent) {
        parent.children.forEach(child => {
          return new LeaderLine(parent.parent?.nativeElement, child.nativeElement, { dash: { animation: true } });
        })
      }
    })
  }

/**
 *
 *
 * @memberof SalesWorkProgressComponent
 */
ngOnDestroy(): void {
    this.componentRef.destroy();
  }

}
