import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
    listOfString: string[] = ['Mark', 'Steve', 'Merry', 'John', 'Sarah']

    // // name = 'John Doe';
    // addToCart: number = 0;
    // product = {
    //     name: 'IPhone 14',
    //     price: 789,
    //     color: 'Red',
    //     discount: 8.5,
    //     inStock: 5,
    //     pImage: '/assets/images/img.png',
    // };

    // getDiscountedPrice() {
    //     // If you want to access a property, use 'this'
    //     return (
    //         this.product.price -
    //         (this.product.price * this.product.discount) / 100
    //     );
    // }

    // onNameChange(event: any) {
    //     // this.name = event.target.value
    // }

    // decrementCartValue() {
    //     if (this.addToCart > 0) {
    //         this.addToCart--;
    //     }
    // }

    // incrementCartValue() {
    //     if (this.addToCart < this.product.inStock) {
    //         this.addToCart++;
    //     }
    // }
}
