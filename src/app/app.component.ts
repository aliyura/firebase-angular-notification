import { MessagingService } from './services/messaging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notification-demo';
  message: any

  constructor(private messageService: MessagingService) {

  }


  refreshMessage() {
    this.messageService.receiveMessage();
    this.message = this.messageService.currentMessage;
  }

  ngOnInit(): void {

    this.messageService.requestPermission();
    this.refreshMessage();
  
  }
}
