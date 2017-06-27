import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFire, AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ModalModule } from './modal/modal.module';
import { CVModule } from './cv/cv.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';

import { ModalService } from './modal/modal.service';
import { AuthService } from './auth/auth.service';
import { CVService } from './cv/cv.service';
import { ProfileEditModule } from './profile-edit/profile-edit.module';
import { SharedModule } from './shared/shared.module';

import { FIREBASE_ATUH_CONFIG, FIREBASE_CONFIG } from './shared/constants/constants';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		CommonModule,
		RouterModule,
		AngularFireModule.initializeApp(FIREBASE_CONFIG, FIREBASE_ATUH_CONFIG),

		AppRoutingModule,
		AuthModule,
		ModalModule,
		CVModule,
		HomeModule,
		NotFoundModule,
		ProfileEditModule,
		SharedModule
	],
	providers: [
		AngularFire,

		ModalService,
		AuthService,
		CVService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
