import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-component.component.html',
  styleUrl: './notification-component.component.scss'
})
export class NotificationComponentComponent {
  @Input() notifications: string[] = [];

  addNotification(notification: string) {
    this.notifications.push(notification);
  }

  clearNotifications() {
    this.notifications = [];
  }
}