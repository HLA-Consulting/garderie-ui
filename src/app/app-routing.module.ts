import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnfantsListComponent } from './enfants-list/enfants-list.component';
import { CreateEnfantComponent } from './create-enfant/create-enfant.component';
import { SearchEnfantsComponent } from './search-enfants/search-enfants.component';

const routes: Routes = [
    { path: '', redirectTo: 'enfant', pathMatch: 'full' },
    { path: 'enfant', component: EnfantsListComponent },
    { path: 'add', component: CreateEnfantComponent },
    { path: 'findbyprenom', component: SearchEnfantsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
