let array = [
    {
        name: 'Cadbury Mint',
        size: '80g',
        price: 15,
        url:'something'
    },
    {
        name: 'Cadbury Top Deck',
        size: '80g',
        price: 15,
        url:'something'
    },
    {
        name: 'Cadbury Plain',
        size: '80g',
        price: 15,
        url:'something'
    }
]
localStorage.setItem('items',JSON.stringify(array))
array =JSON.parse(localStorage.getItem('items'))
let a =array.map((item,index)) =>{
    console.log(item);
    console.log(index);
    return `<article>
    <h1>${item.name}</h1>
    <h2>${item.price}</h2>
    <img src='${item.url}'>
    <button value>${item.price}</button>
    </article>`
}