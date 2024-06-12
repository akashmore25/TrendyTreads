const wrapper = document.querySelector(".sliderWrapper");
const menuItems= document.querySelectorAll(".menuItem");


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      Desc:"Introducing the Air Force Nike Shoes  a fusion of timeless style and modern comfort. These iconic sneakers feature a sleek design with the classic Swoosh logo, offering a perfect blend of durability and street-ready flair. Step into all-day comfort with a cushioned midsole, while the durable rubber outsole ensures reliable traction. Choose your favorite color and elevate your style effortlessly. The Air Force Nike Shoes are not just sneakers theyre a statement. Grab yours now and step into a world of iconic fashion.",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      Desc:"Introducing Air Jordan where legendary style meets unrivaled performance. Elevate your sneaker game with these iconic kicks, boasting a sleek design and the iconic Jumpman logo. Crafted for comfort and durability, the Air Jordan sneakers feature a cushioned midsole for all-day support and a rubber outsole for reliable traction. With a range of stylish colorways to choose from, these sneakers are a timeless addition to your collection. Make a statement with Air Jordan  not just shoes, but a symbol of basketball heritage and street style. Grab yours now and step into the legacy of greatness.",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      Desc: "Introducing the Blazer Nike Shoes  a fusion of vintage cool and contemporary style. Step into timeless elegance with these iconic sneakers, featuring a classic silhouette and the iconic Nike Swoosh. Crafted for everyday comfort, the Blazer boasts a sleek design, premium materials, and a cushioned midsole for a smooth stride. The rubber outsole provides reliable traction, making them ideal for urban adventures. Choose your favorite color and effortlessly elevate your street style. The Blazer Nike Shoes aren't just sneakers; they're a statement of classic sophistication. Embrace the blend of heritage and modernity  grab your pair and step into timeless fashion." ,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      Desc:"Introducing the Nike Crater  a bold step towards sustainable style. Embrace eco-friendly fashion with these innovative sneakers, featuring a distinctive design and the iconic Nike swoosh. The Crater series is crafted with recycled materials, delivering both style and a positive environmental impact. Enjoy all-day comfort with a cushioned midsole, while the rugged outsole provides reliable traction. Available in a range of vibrant colors, these sneakers are a statement of conscious fashion. Choose Crater Nike Shoes for a sustainable step forward in both style and environmental responsibility. Elevate your wardrobe  grab your pair now and stride into a greener, more stylish future.",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      Desc:"Introducing the Nike Hippie  a celebration of free-spirited style and individual expression. Immerse yourself in the vibrant and eclectic design of these unique sneakers, featuring bold patterns and the iconic Nike swoosh. The Hippie series captures the essence of self-discovery, embracing a laid-back and adventurous spirit. Crafted with comfort in mind, these sneakers boast a cushioned midsole, ensuring a carefree and comfortable stride. Express your personality with a range of vibrant colors and patterns that resonate with the free-thinking ethos. Choose Nike Hippie Shoes to make a bold statement of individuality and freedom in every step. Embrace the spirit of the counterculture  grab your pair now and step into a world of Bohemian style.",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
  let chooseProduct = products[0];
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
//   const currentProductDesc = document.querySelector(".productDesc");


  menuItems.forEach((item,index) => {
    item.addEventListener("click",()=>{
        //change the current slider
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
    
        //change the choosen product
        chooseProduct= products[index];
    
        //change texts of currentProduct
        currentProductTitle.textContent= chooseProduct.title;
        currentProductPrice.textContent ="$" + chooseProduct.price;
        currentProductImg.src= chooseProduct.colors[0].img;
        // currentProductDesc.textContent=chooseProduct.Desc;

        // currentProductColors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = chooseProduct.colors[index].code;
        })
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=chooseProduct.colors[index].img;
    })
})




currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  

