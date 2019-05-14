import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        Graficas1Component,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        PageRoutingModule,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {  }