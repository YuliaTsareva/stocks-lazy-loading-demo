import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {RouterModule, PreloadAllModules} from '@angular/router';

import { AppComponent } from './app.component';

const routeConfig = [
    {path: '', redirectTo: '/stocks', pathMatch: 'full'},
    {path: 'stocks', loadChildren: 'app/stocks/stocks.module'},
    {path: 'currencies', loadChildren: 'app/currencies/currencies.module'}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule,
        RouterModule.forRoot(routeConfig, {preloadingStrategy: PreloadAllModules})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
