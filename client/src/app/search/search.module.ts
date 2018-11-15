import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';

/* NgRx */
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './state/search.effects';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchModule { }
