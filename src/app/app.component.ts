import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.services';
import { Observable, tap } from 'rxjs';

@Component({
	selector: 'app-my-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'my angular app';
	// products: IProduct[] = [];
	products$: Observable<IProduct[]>;
	loading = false;
	term = ''

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.loading = true;

		this.products$ = this.productService
			.getAll()
			.pipe(tap(() => (this.loading = false)));
		// this.productService.getAll().subscribe((products) => {
		// 	this.products = products;
		// 	this.loading = false;
		// });
	}
}
