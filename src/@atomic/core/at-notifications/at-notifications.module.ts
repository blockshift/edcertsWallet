import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtNotificationCountComponent, AtNotificationCountPositionX, AtNotificationCountPositionY } from './at-notifications.component';

export { AtNotificationCountComponent, AtNotificationCountPositionX, AtNotificationCountPositionY } from './at-notifications.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AtNotificationCountComponent,
  ],
  exports: [
    AtNotificationCountComponent,
  ],
})
export class AtNotificationsModule {

}
