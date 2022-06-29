import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  lastPage: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.load();
  }

  public load(page = 1): void {
    this.productService.all(page).subscribe(
      res => {
        this.products = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  }

  public delete(productId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.productService.delete(productId)
        .subscribe(
          () => {
            this.products = this.products.filter(p => p.id !== productId);
          }
        )
    }
  }

}
