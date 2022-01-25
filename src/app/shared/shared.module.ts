import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, HeaderComponent } from '.';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [CardComponent, HeaderComponent, MatIconModule],
})
export class SharedModule {}
