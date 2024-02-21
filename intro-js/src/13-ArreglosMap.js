const invoices = [
    {
        id:1,
        nameInvoice: 'Compras',
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
        ]
    },
    {
        id:2,
        nameInvoice: 'Abarrotes',
        client: {
            id: 1,
            name:'fulanito',
            lastName: 'juarez',
            age: 20
        },
        items:[
            {
                product: 'Atun',
                price: 90.90,
                quantity: 10
            },
            {
                product: 'Queso',
                price: 4.90,
                quantity: 4
            },
            {
                product: 'Sardina',
                price: 30.88,
                quantity: 6
            }, 
            {
                product: 'Mayonesa',
                price: 2,
                quantity: 900
            }
        ]
    },
    {
        id:3,
        nameInvoice: 'Oficina',
        client: {
            id: 3,
            name:'Juan',
            lastName: 'Perez',
            age: 26
        },
        items:[
            {
                product: 'Hojas',
                price: 90.90,
                quantity: 10
            },
            {
                product: 'Clips',
                price: 4.90,
                quantity: 4
            },
            {
                product: 'Sillas',
                price: 30.88,
                quantity: 6
            }, 
            {
                product: 'Mesa',
                price: 2,
                quantity: 900
            }
        ]
    }
]

const invoicesClone = invoices.map(i => {
    return i;
})