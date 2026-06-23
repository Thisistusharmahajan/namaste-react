// <div><div>
// </div> 
// <h1>first child</h1><h2>second child</h2>
// </div>

const product_container = React.createElement("div",{id:"p_container"},[
    React.createElement("div",{id:"inner_container"},[
        React.createElement("label",{id:"sell_label"},"Best Seller"),
        React.createElement("img",{id:"product_img",src:'./images.jpg'}),
        React.createElement("span",{id:"favorite_tag"},"Favorite")
    ]),
    React.createElement("h5",{id:"brand_name"},"Nike"),
    React.createElement("h3",{id:"product_description"},"Dunk High Green Satin Sneakers"),
    React.createElement("label",{id:"product_price"},"$180"),
    React.createElement("button",{id:"buy_now_btn"},"Buy Now")
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(product_container);