import { Routes } from "@angular/router";
import { ByCapitalPage } from "./pages/by-capital-page/by-capital-page";
import { CountryPage } from "./pages/country-page/country-page";
import { ByCountryPage } from "./pages/by-country-page/by-country-page";
import { ByRegionPage } from "./pages/by-region-page/by-region-page";

export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryPage,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPage
            },
            {
                path: 'by-country',
                component: ByCountryPage
            },
            {
                path: 'by-region',
                component: ByRegionPage
            },
            {
                path: '**',
                redirectTo: 'by-country'
            }
        ]
    }

];
export default countryRoutes;