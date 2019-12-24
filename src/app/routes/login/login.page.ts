import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // ��ͼģ�͵������˺ţ�˫���
  password: string = ''; // ��ͼģ�͵��������룬˫���

  constructor(private toastController: ToastController, private userService: UserService, 
    private alertController: AlertController, private router: Router) { 
      
  }

  ngOnInit() {
  }

  async onLogin(form: NgForm) {
    console.log('onLogin()');
    //console.log(form);

    if (this.username === '') {
        const toast = await this.toastController.create({
            message: 'Please input your Tel or Email',
            duration: 3000
        });
        toast.present();
    }else if (this.password === '') {
        const toast = await this.toastController.create({
            message: 'Please input password',
            duration: 3000
        });
        toast.present();
    }
    //  ���������ĵ�¼����
    this.userService.login(this.username, this.password);
  }

  openForgotPassword() {
    this.router.navigateByUrl('forgot-password');
  }
}
