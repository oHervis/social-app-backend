export interface PushNotificationGateway {
  sendNotification(notification: PushNotification): Promise<void>;
}

export interface PushNotification {
  title: string;
  body: string;
}
