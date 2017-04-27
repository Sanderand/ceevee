import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CVComponent } from './cv.component';
import { SplitPipe } from '../pipes/split.pipe';

import { DetailsComponent } from './details/details.component';
import { DividerComponent } from './divider/divider.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CVService } from './cv.service';
import { CVSelectModule } from './cv-select/cv-select.module';

@NgModule({
    declarations: [
        CVComponent,
        SplitPipe,

        DetailsComponent,
        DividerComponent,
        ExperienceComponent,
        EducationComponent,
        SkillsComponent,
        FeedbackComponent
    ],
    exports: [
        CVComponent,
        SplitPipe
    ],
    imports: [
        CVSelectModule,

        BrowserModule,
        FormsModule,
        CommonModule
    ]
})
export class CVModule { }