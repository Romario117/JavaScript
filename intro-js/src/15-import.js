import { invoices } from "./14-Filter"

const invoicesClone = invoices.find(f => f.client.name === 'fulanito')
console.log(invoicesClone)

const filtered = invoices.filter(f => f.id >1)
console.log(filtered)