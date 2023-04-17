const orders = [

    {
        id: 13141,
        pizza: "Hawai",
        extra: "Kukorica",
        ital: "Pepso Zero",
        ar: 4000,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 52352,
        pizza: "Sonkás",
        extra: "Rukkola",
        ital: "Cappy Barack",
        ar: 3500,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 64673,
        pizza: "Mexikói",
        extra: "Tortilla",
        ital: "Ginger Beer",
        ar: 4600,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 47462,
        pizza: "New York",
        extra: "Cheddar",
        ital: "Mentes víz",
        ar: 3800,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 46364,
        pizza: "Fitness",
        extra: "",
        ital: "Apenta Beauty",
        ar: 3200,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 25253,
        pizza: "Margherita",
        extra: "Paradicsom",
        ital: "",
        ar: 3000,
        kep: "https://images.pexels.com/photos/6937416/pexels-photo-6937416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
]


let output = "";
orders.forEach(order =>
    
    output +=`<div class= "order col-3 border border-solid-info">
        <h3> Rendelés </h3>
        <small> #${order.id}</small>
        <p> Pizza: ${order.pizza} </p>
        <p> Extra: ${order.extra} </p>
        <p> Ital: ${order.ital} </p>
        <h4> Ár: ${order.ar} Ft</h4>
        <img src="${order.kep}">
    </div>`
);
    
document.getElementById("allorders").innerHTML = output;

    