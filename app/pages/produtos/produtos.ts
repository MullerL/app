import {Component, NgZone} from "@angular/core";  
import {Modal, NavController, Platform} from 'ionic-angular';  
import {BirthdayService} from '../../services/birthday.service';
import { NovoProduto } from '../novoProduto/novoProduto';

@Component({
  templateUrl: 'build/pages/produtos/produtos.html'
})
export class Produtos {
public birthdays = [];

    constructor(private birthdayService: BirthdayService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone) {

    }

    ionViewLoaded() {
        this.platform.ready().then(() => {
            this.birthdayService.initDB();

            this.birthdayService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.birthdays = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }

    showDetail(birthday) {
        // let modal = Modal.create(NovoProduto, { birthday: birthday });
        // this.nav.present(modal);

        // modal.onDismiss(() => {

        // });
        this.nav.push(NovoProduto, {  birthday: birthday });
    }

  novoProduto(){
    this.nav.push(NovoProduto);
  }

  delete(birthday) {
        this.birthdayService.delete(birthday)
            .catch(console.error.bind(console));

        //this.dismiss();
    }
}
