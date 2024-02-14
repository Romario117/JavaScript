//este es un objeto
const invoice = {
    id:1,
    nameInvoice: 'Compras',
    date: new Date(),
    client: {
        id: 1,
        name:'fulanito',
        lastName: 'juarez',
        age: 20
    },
    items:[
        {
            product: 'keyboard',
            price: 90.90,
            quantity: 10
        },
        {
            product: 'mouse',
            price: 4.90,
            quantity: 4
        },
        {
            product: 'monitor',
            price: 30.88,
            quantity: 6
        }, 
        {
            product: 'fan',
            price: 2,
            quantity: 900
        }
    ],
    total: function() {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price* item.quantity
        });
        return total;
    }
}

console.log(invoice.total())