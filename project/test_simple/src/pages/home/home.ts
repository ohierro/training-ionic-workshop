import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as faker from 'faker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  noticias: Noticia[]

  constructor(public navCtrl: NavController) {
    this.title = 'Hello world';

    this.noticias = []
    for (let i = 0; i<10; i++) {
      let noticia = {
        image: faker.image.imageUrl(400,200)
                    + '?random=' + faker.random.number(100),
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph()
      }

      this.noticias.push(noticia)
    }

    // this.noticias = [
    //   {
    //     image: 'http://lorempixel.com/400/200/',
    //     title: 'Test',
    //     body: 'Test'
    //   },
    //   {
    //     image: 'http://lorempixel.com/400/200/',
    //     title: 'Test 2',
    //     body: 'Test 2'
    //   }
    // ]
  }
}

class Noticia {
  image: string;
  title: string;
  body: string;
}
