// Card 
const containerProducts = document.querySelector('.container-products');
const containerDetail = document.querySelector('.container-detail');


productList = [];

productList.push(
  {
    image: 'https://res.cloudinary.com/brokenchains/image/upload/c_scale,h_600,q_auto:best,w_600/Broken-Chains-Air-Jordan-1-High-OG-Visionaire-555088-702-01.jpg' ,
    name: 'Air Jordan' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/247616b5-1d3b-4777-abbb-d5e08a924b78/go-flyease-easy-on-off-shoes-4bM44t.png' ,
    name: 'Trigreca Sneakers' ,
    price: 0.00865865 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/4388bf52-df2b-43ba-ae72-cfc287885939/sky-jordan-1-younger-shoe-XjRW8J.png' ,
    name: 'Sky Jordan 1' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6f8baaae-44b2-471d-b453-d0feb88f4511/air-max-95-shoe-fKj1WC.png' ,
    name: 'Air Max 95 Premium' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/44b44e0d-ec17-49bc-8e0a-52df0b936e8a/custom-nike-air-max-95-unlocked-by-you.png' ,
    name: 'Air Max 95 Customs' ,
    price: 0.0256895 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png' ,
    name: 'Air Force Sar 799' ,
    price: 0.01548894 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://res.cloudinary.com/brokenchains/image/upload/c_scale,h_600,q_auto:best,w_600/Broken-Chains-Air-Jordan-1-High-OG-Visionaire-555088-702-01.jpg' ,
    name: 'Air Jordan' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://res.cloudinary.com/brokenchains/image/upload/c_scale,h_600,q_auto:best,w_600/Broken-Chains-Air-Jordan-1-High-OG-Visionaire-555088-702-01.jpg' ,
    name: 'Air Jordan' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://res.cloudinary.com/brokenchains/image/upload/c_scale,h_600,q_auto:best,w_600/Broken-Chains-Air-Jordan-1-High-OG-Visionaire-555088-702-01.jpg' ,
    name: 'Air Jordan' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://res.cloudinary.com/brokenchains/image/upload/c_scale,h_600,q_auto:best,w_600/Broken-Chains-Air-Jordan-1-High-OG-Visionaire-555088-702-01.jpg' ,
    name: 'Air Jordan' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);
productList.push(
  {
    image: 'https://res.cloudinary.com/brokenchains/image/upload/c_scale,h_600,q_auto:best,w_600/Broken-Chains-Air-Jordan-1-High-OG-Visionaire-555088-702-01.jpg' ,
    name: 'Air Jordan' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'  
  }
);
productList.push(
  {
    image: 'https://res.cloudinary.com/brokenchains/image/upload/c_scale,h_600,q_auto:best,w_600/Broken-Chains-Air-Jordan-1-High-OG-Visionaire-555088-702-01.jpg' ,
    name: 'Air Jordan' ,
    price: 0.0003654 ,
    stars: '⭐⭐⭐'
  }
);



for (element of productList) {
 
const card = document.createElement('div');
card.classList.add('card');

const img = document.createElement('img');
img.classList.add('img');
img.setAttribute('src' , element.image);

const containerText = document.createElement('div');
containerText.classList.add('container-text');

const title = document.createElement('h2');
title.classList.add('title');
title.innerText = element.name;

const areaPrice = document.createElement('div');
areaPrice.classList.add('area-price');

const containerPriceI = document.createElement('div');
containerPriceI.classList.add('container-price-i');

const icon = document.createElement('i');
icon.classList.add('fa-brands', 'fa-bitcoin');  

const price = document.createElement('h3');
price.classList.add('price');
price.innerText = element.price;

const stars = document.createElement('div');
stars.classList.add('stars');
stars.innerText = element.stars;


// Inserciones
containerProducts.appendChild(card);
card.appendChild(img);
card.appendChild(containerText);
containerText.appendChild(title);
containerText.appendChild(areaPrice);

areaPrice.appendChild(containerPriceI)
areaPrice.appendChild(stars);

containerPriceI.appendChild(icon);
containerPriceI.appendChild(price);

}




//---- Detail
const cardDetail = document.createElement('div');
cardDetail.classList.add('card-detail');

const imgDetail = document.createElement('img');
imgDetail.classList.add('img-detail');
imgDetail.setAttribute('src' , element.image);

const containerPreTitle = document.createElement('div');
containerPreTitle.classList.add('container-pretitle');

const preTitleDetail = document.createElement('h2');
preTitleDetail.classList.add('pre-title-detail');
preTitleDetail.innerText = 'Nike Shoes';

const starsDetail = document.createElement('div');
starsDetail.classList.add('stars-details');
starsDetail.innerText = element.stars;

const containerTextDetail = document.createElement('div');
containerTextDetail.classList.add('container-text-detail');

const titleDetail = document.createElement('h2');
titleDetail.classList.add('title-detail');
titleDetail.innerText = 'Air Max 95 Customs';

const areaPriceDetail = document.createElement('div');
areaPriceDetail.classList.add('area-price-detail');

const containerPriceIDetail = document.createElement('div');
containerPriceIDetail.classList.add('container-price-i-detail');

const iconDetail = document.createElement('i');
iconDetail.classList.add('fa-brands', 'fa-bitcoin');  

const priceDetail = document.createElement('h3');
priceDetail.classList.add('price-detail');
priceDetail.innerText = element.price;

const loremIpsum = document.createElement('p');
loremIpsum.classList.add('lorem-ipsum');
loremIpsum.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident voluptatum laboriosam recusandae animi! Optio labore possimus porro a delectus tempore magni assumenda fugit dicta autem blanditiis, quasi alias adipisci?';

const wrapButtons = document.createElement('div');
wrapButtons.classList.add('wrap-buttons')

const btnCuppon = document.createElement('button');
btnCuppon.classList.add('btn-cuppon');
btnCuppon.innerText = 'Add Cuppon';

const btnShoppingcarr = document.createElement('button');
btnShoppingcarr.classList.add('btn-shopping-carr');
btnShoppingcarr.innerText = 'Add Car';

const closeDetail = document.createElement('i')
closeDetail.classList.add('fa-regular' , 'fa-rectangle-xmark');


// Inserciones
containerDetail.appendChild(cardDetail);
cardDetail.appendChild(closeDetail);
cardDetail.appendChild(imgDetail);
cardDetail.appendChild(containerPreTitle);
containerPreTitle.appendChild(preTitleDetail);
containerPreTitle.appendChild(starsDetail); 

cardDetail.appendChild(titleDetail);

cardDetail.appendChild(areaPriceDetail);
areaPriceDetail.appendChild(containerPriceIDetail);
containerPriceIDetail.appendChild(iconDetail);
containerPriceIDetail.appendChild(priceDetail);

areaPriceDetail.appendChild(btnCuppon);

cardDetail.appendChild(loremIpsum);

cardDetail.appendChild(wrapButtons);
wrapButtons.appendChild(btnCuppon);
wrapButtons.appendChild(btnShoppingcarr);






//--- Area Cupon



