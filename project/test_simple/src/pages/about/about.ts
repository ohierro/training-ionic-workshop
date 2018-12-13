import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JokeProvider } from '../../providers/joke/joke';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  username: string
  chiste: string

  constructor(public navCtrl: NavController,
              public jokeProvider: JokeProvider) {

  }

  generaChiste() {
    this.jokeProvider.getJoke(this.username)
      .subscribe(data => {
        this.chiste = data.value.joke
      })

  }

}
