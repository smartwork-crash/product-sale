import { NgModule } from '@angular/core'
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
		path: '',
		loadChildren: () => import('src/app/product/product.module').then(module => module.ProductModule),
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}