const moneda="USD"

let catalog={
    data:[{
        productName:"Teclado X45",
        category:"Teclados",
        price:"100",
        image:"",
        inventory:"30"
    },
    {
        productName:"Mouse X21",
        category:"Dispositivos-señaladores",
        price:"80",
        image:"",
        inventory:"40"
    },
    {
        productName:"Audifonos JBL",
        category:"Audio",
        price:"250",
        image:"",
        inventory:"100"
    },
    {
        productName:"Router",
        category:"Redes",
        price:"280",
        image:"",
        inventory:"100"
    }]
}

for (let i of catalog.data){
    let card=document.createElement("div");
    card.setAttribute("id",i.productName);
    card.classList.add("card",i.category);

    //,"hide"

    let imgContainer=document.createElement("div");
    imgContainer.classList.add('image-container');

    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
   
    card.appendChild(imgContainer);

    let container=document.createElement("div");
    container.classList.add("container")

    let name=document.createElement("h5");
    name.innerText=i.productName.toUpperCase();
    container.appendChild(name);

    let price=document.createElement("h6");
    price.innerText="$" + i.price + moneda;
    container.appendChild(price);

    let inventory=document.createElement("h6");
    inventory.innerText="Disponibles: " + i.inventory;
    container.appendChild(inventory);

    let division=document.createElement("hr");
    container.appendChild(division);

    let order=document.createElement("input");
    order.setAttribute("type","number");
    order.setAttribute("min",'1');
    order.setAttribute("max",i.inventory);
    order.value="1";
    container.appendChild(order);

    let buying=document.createElement("button");
    buying.setAttribute("type","submit");
    buying.innerHTML="Comprar".toUpperCase();
    buying.classList.add("catalog-button");    
    container.appendChild(buying);

    card.appendChild(container);
    document.getElementById("catalog").appendChild(card);
}

