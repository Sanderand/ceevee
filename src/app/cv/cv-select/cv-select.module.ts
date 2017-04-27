import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CVSelectComponent } from './cv-select.component';

@NgModule({
    declarations: [
        CVSelectComponent
    ],
    exports: [
      CVSelectComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ]
})
export class CVSelectModule { }
