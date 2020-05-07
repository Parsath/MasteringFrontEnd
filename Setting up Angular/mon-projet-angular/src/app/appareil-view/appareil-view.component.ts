import { Component, OnInit } from '@angular/core';
import { AppareilService } from "../services/appareil.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.sass']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    )
  });

  appareils: any[];
  appareilSubscription: Subscription;

  /*  posts = [
      {
        title: "Machine à laver",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat ante, sit amet vehicula nibh euismod eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et bibendum neque, tincidunt rutrum ipsum. Donec vitae ",
        loveIts: 42,
        created_at: new Date()
      },
      {
        title: "Marine LePen",
        content: "Parlons de putes!",
        loveIts: 4244,
        created_at: new Date()
      },
      {
        title: "Ordinateur",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas erat ante, sit amet vehicula nibh euismod eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et bibendum neque, tincidunt rutrum ipsum. Donec vitae consequat arcu. Morbi rutrum ligula lectus, in efficitur quam tempus at. In dapibus eros vitae orci blandit, vel tincidunt ligula sagittis. Nunc tempus metus sed sapien congue maximus. Maecenas mattis et odio id euismod. Proin enim enim, lobortis pretium eros id, hendrerit elementum nulla. Sed quis tempor enim, ac sollicitudin ex. Mauris sit amet ex neque. Ut convallis iaculis tellus id cursus. Phasellus tristique tincidunt elit quis pharetra. Etiam semper, orci sed ornare imperdiet, nulla eros tincidunt ma",
        loveIts: 57,
        created_at: new Date()
      }
    ];*/

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}
