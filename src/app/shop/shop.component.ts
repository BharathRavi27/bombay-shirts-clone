import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('300ms ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('300ms ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ShopComponent implements OnInit {


  itemsArr: any[] = [
    {
      texture: {
        color: 'White',
        body: './assets/images/white/body.png',
        coller: [
          {
            name: 'first',
            url: './assets/images/white/collar_1.png'
          },
          {
            name: 'second',
            url: './assets/images/white/collar_2.png'
          },
          {
            name: 'third',
            url: './assets/images/white/collar_3.png'
          },
          {
            name: 'forth',
            url: './assets/images/white/collar_4.png'
          }
        ],
        sleeves: [
          {
            name: 'first',
            url: './assets/images/white/sleeves_1.png'
          },
          {
            name: 'second',
            url: './assets/images/white/sleeves_2.png'
          },
          {
            name: 'third',
            url: './assets/images/white/sleeves_3.png'
          }
        ],
        pockets: [
          {
            name: 'first',
            url: './assets/images/white/pocket_1.png'
          },
          {
            name: 'second',
            url: './assets/images/white/pocket_2.png'
          },
          {
            name: 'third',
            url: './assets/images/white/pocket_3.png'
          }
        ],
        collar_type: './assets/images/white/collar_type.png',
        button_holder: './assets/images/white/buttons_holder.png',
        buttons: './assets/images/white/buttons'
      }


    },
    {
      texture: {
        color: 'Blue',
        body: './assets/images/blue/body.png',
        coller: [
          {
            name: 'first',
            url: './assets/images/blue/collar_1.png'
          },
          {
            name: 'second',
            url: './assets/images/blue/collar_2.png'
          },
          {
            name: 'third',
            url: './assets/images/blue/collar_3.png'
          },
          {
            name: 'forth',
            url: './assets/images/blue/collar_4.png'
          }
        ],
        sleeves: [
          {
            name: 'first',
            url: './assets/images/blue/sleeves_1.png'
          },
          {
            name: 'second',
            url: './assets/images/blue/sleeves_2.png'
          },
          {
            name: 'third',
            url: './assets/images/blue/sleeves_3.png'
          }
        ],
        pockets: [
          {
            name: 'first',
            url: './assets/images/blue/pocket_1.png'
          },
          {
            name: 'second',
            url: './assets/images/blue/pocket_2.png'
          },
          {
            name: 'third',
            url: './assets/images/blue/pocket_3.png'
          }
        ],
        collar_type: './assets/images/blue/collar_type.png',
        button_holder: './assets/images/blue/buttons_holder.png',
        buttons: './assets/images/blue/buttons'
      }


    }
  ]
  selectedcategory: string = 'fabric';
  selectedFabric: number = 0;
  selectedCollar: number = 0;
  selectedSleeve: number = 0;
  selectedPocket: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
