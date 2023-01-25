let shop = document.getElementById("shop");
let shopitemsdata = [
  {
    id: "tidsfe",
    name: "tshirt",
    price: "45",
    description: "lorem ipsum dollavghfghfghftfytrtyrtyrtrtyrr hello partodsfj",
    img: "../images/img-6.png",
  },
  {
    id: "tifdsfe",
    name: "pantshirt",
    price: "45",
    description:
      "lorgfftdtyerteretrrrrtertetrertem ipsum dollar hello partodsfj",
    img: "../images/img-8.png",
  },
  {
    id: "tfdsfie",
    name: "secshirt",
    price: "44",
    description:
      "loregdfdfdtytuitr56wesgffytyr6yurtytym ipsum dollar hello partodsfj",
    img: "../images/img-10.png",
  },
  {
    id: "tilesdfde",
    name: "slehirt",
    price: "43",
    description: "lorvgdserseraersresresresem ipsum dollar hello partodsfj",
    img: "../images/img-2.jpg",
  },
  {
    id: "ting",
    name: "spihirt",
    price: "45",
    description: "lorem ipsum dollajjgjhghjghjghghjghjr hello partodsfj",
    img: "../images/img-3.jpg",
  },
];

let basket = [];
let generateshop = () => {
  return (shop.innerHTML = shopitemsdata
    .map((x) => {
      let { id, name, price, description, img } = x;
      return `
        <div class="col" id=product-id-${id} >
          <div class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="${img}"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">
                ${description}
              </p>
              <div class="price-quantity">
                <h3>$ ${price}</h3>
                <buttons class="buttons">
                  <i class="bi bi-dash-lg" onclick='decrement(${id})'></i>
                  <div id=${id} class="quantity" >1</div>
                  <i class="bi bi-plus-lg" onclick="increment(${id})"></i>
                </buttons>
              </div>
            </div>
          </div>
        </div> `;
    })
    .join(""));
};
generateshop();

let increment = (id) => {
  let itemid = id;
  console.log(itemid.id);
};
let decrement = (id) => {
  let itemid = id;
  console.log(itemid.id);
};
let update = () => {};
