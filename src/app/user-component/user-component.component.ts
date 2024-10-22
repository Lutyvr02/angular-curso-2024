import { Component, OnInit,ViewChild, ChangeDetectorRef  } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { NotificationComponentComponent } from '../notification-component/notification-component.component';
@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [CommonModule, NotificationComponentComponent],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.scss',
})
export class UserComponentComponent implements OnInit {

  @ViewChild(NotificationComponentComponent, { static: false })
  notificationComponent!: NotificationComponentComponent;

  users: any[] = [];

  constructor(public dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

  getPlatformNameById(platformId: number): string {
    const platform = this.dataService
      .getSocialNetworks()
      .find((s) => s.id === platformId);
    return platform ? platform.platform : '';
  }

  toggleComponentState(user: any) {
    user.status = user.status === 'active' ? 'inactive' : 'active';
  }

  isComponentDisabled(user: any): boolean {
    return user.status !== 'active';
  }

  addSubscription(user: any, platformId: number) {
    if (!user.subscriptions.includes(platformId)) {
      user.subscriptions.push(platformId);
    }
  }

  removeSubscription(user: any, platformId: number) {
    user.subscriptions = user.subscriptions.filter(
      (id: number) => id !== platformId
    );
  }

  generateNotification(user: any, platformId: number, actionType: string) {
    const platform = this.dataService.getSocialNetworks().find(s => s.id === platformId);
    if (!platform) return;

    if (user.subscriptionType === 'premium' && (platform.platform === 'tiktok' || platform.platform === 'whatsapp')) {
        if (user.amountAvailable >= 5) {
            user.amountAvailable -= 5;
            this.notificationComponent.addNotification(`${platform.platform} added a new ${platform.type}`);
        }
    } else {
        this.notificationComponent.addNotification(`${platform.platform} added a new ${platform.type}`);
    }
    
  }
  
}
