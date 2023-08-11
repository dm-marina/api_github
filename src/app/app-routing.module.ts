import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ReposListComponent } from "./reposes/repos-list/repos-list.component";
import { ReposesComponent } from "./reposes/reposes.component";

const appRoutes:Routes = [
    {path: '', component:MainComponent, pathMatch:'full'},
    {path:'reposes', component:ReposesComponent,
        children:[
            {path:':login', component:ReposListComponent}
        ]}
       
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule{}