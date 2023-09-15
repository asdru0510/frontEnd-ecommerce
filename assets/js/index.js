const moneda="USD"
//Objeto que contiene los productos del catalogo
let catalog={
    data:[{
        productName:"Teclado-X45",
        category:"Teclados",
        price:"100",
        image:"./assets/img/Gaming-Keyboard-Transparent-Background.png",
        inventory:"30"
    },
    {
        productName:"Mouse-X21",
        category:"Dispositivos-señaladores",
        price:"80",
        image:"./assets/img/mouse.png",
        inventory:"40"
    },
    {
        productName:"Audifonos-JBL",
        category:"Audio",
        price:"250",
        image:"./assets/img/Q800_0.png",
        inventory:"100"
    },
    {
        productName:"Audifonos-niña-linda",
        category:"Audio",
        price:"280",
        image:"./assets/img/audifono_rosa.png",
        inventory:"100"
    },
    {
        productName:"Teclado_teAmo",
        category:"Teclados",
        price:"800",
        image:"./assets/img/teclado.png",
        inventory:"50"
    }
]
}
//Estructura que itera el objeto catalog.data
for (let i of catalog.data){

    let card=document.createElement("div"); //Creamos el div con id "card" 
    card.setAttribute("id",i.productName);
    card.classList.add("card",i.category);

    //,"hide"    

    //Crear un container para la imgen de la tarjeta

    let imgContainer=document.createElement("div");
    imgContainer.classList.add('image-container');

    //Crear un elemento -img- , le asignamos el src de la img del valor data.image

    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);

   //Le enviamos el container con la imagen a la card
    card.appendChild(imgContainer);

    //Crear un container para el productName
    let container=document.createElement("div");
    container.classList.add("container")
    //Creamos un elemento h5 para el productName
    let name=document.createElement("h5");
    name.innerText=i.productName.toUpperCase(); //Le asignamos el texto al h5 desde data.productName
    container.appendChild(name);

    //codigo para el price
    let price=document.createElement("h6");
    price.innerText="$" + i.price + moneda;
    container.appendChild(price);

    //codigo para el inventory
    let inventory=document.createElement("h6");
    inventory.innerText="Disponibles: " + i.inventory;
    container.appendChild(inventory);

    //barra divisoria con botones de la card
    let division=document.createElement("hr");
    container.appendChild(division);

    //Input de compra

    let qtyOrder=document.createElement("input");
    order.setAttribute("type","number");
    order.setAttribute("min",'1');
    order.setAttribute("max",i.inventory);
    order.value="1";
    container.appendChild(qtyOrder);

    //Boton de compra

    let buying=document.createElement("button");
    buying.setAttribute("type","submit");
    buying.innerHTML="Comprar".toUpperCase();
    buying.classList.add("catalog-button");    
    container.appendChild(buying);

    //Finalmente enviamos todo lo agragado al container a la card y a su vez esto al "div" catalog en el html
    card.appendChild(container);
    document.getElementById("catalog").appendChild(card);
}

