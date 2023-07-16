import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ApiService} from './api.service';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone.js';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    SidenavComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
