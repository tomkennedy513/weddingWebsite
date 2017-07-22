import {Routes, RouterModule} from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GalleryComponent } from "app/components/gallery/gallery.component";
import { RegistryComponent } from "app/components/registry/registry.component";
import { RsvpComponent } from "app/components/rsvp/rsvp.component";
import { BridalPartyComponent } from "app/components/bridal-party/bridal-party.component";
import { AccommodationsComponent } from "app/components/accommodations/accommodations.component";



const appRoutes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomepageComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'registry', component: RegistryComponent},
    {path: 'rsvp', component: RsvpComponent},
    {path: 'bridal-party', component: BridalPartyComponent},
    {path: 'accommodations', component: AccommodationsComponent}
];


export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
