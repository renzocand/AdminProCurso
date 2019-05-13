import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './pages.routes';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        SharedModule,
        PageRoutingModule
    ]
})

export class PagesModule {  }