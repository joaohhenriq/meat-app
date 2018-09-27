import { AboutComponent } from './about.component';
import { NgModule } from "../../../node_modules/@angular/core";
import { Routes, RouterModule } from '../../../node_modules/@angular/router';

const ROUTES: Routes = [
    {path: '', component: AboutComponent}
]

@NgModule({
    declarations:[AboutComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class AboutModule{

}