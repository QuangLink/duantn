import axios from 'axios';

const apiUrlBase = 'http://localhost:9000/category/';

const categoryUrls = {
  allproduct: apiUrlBase,
  deals: apiUrlBase + 'deals',
  sale: apiUrlBase + 'sale',
  applephone: apiUrlBase + 'apple/phone',
  appletablet: apiUrlBase + 'apple/tablet',
  samsung: apiUrlBase + 'samsung',
  xiaomi: apiUrlBase + 'xiaomi',
  hp: apiUrlBase + 'hp',
  asus: apiUrlBase + 'asus',
  lenovo: apiUrlBase + 'lenovo',
  acer: apiUrlBase + 'acer',
};

const fetchDataForCategory = async (category) => {
  try {
    const response = await axios.get(categoryUrls[category]);
    return response.data.map(product => ({
      name: product.prodName,
      img: product.prodImg,
      price: product.prodPrice,
      id: product.prodID,
      sale: product.prodSale,
      original: product.prodPriceSale,
      linked: product.catName.toLowerCase(),
    }));
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    return [];
  }
};
export let PrAll = [];
export let PrDeals = [];
export let PrSales = [];
export let PrApplePhone = [];
export let PrAppleTablet = [];
export let PrSamsung = [];
export let PrXiaomi = [];
export let PrHp = [];
export let PrAsus = [];
export let PrLenovo = [];
export let PrAcer = [];

const fetchDataForAllCategories = async () => {
  PrAll = await fetchDataForCategory('allproduct');
  PrDeals = await fetchDataForCategory('deals');
  PrSales = await fetchDataForCategory('sale');
  PrApplePhone = await fetchDataForCategory('applephone');
  PrAppleTablet = await fetchDataForCategory('appletablet');
  PrSamsung = await fetchDataForCategory('samsung');
  PrXiaomi = await fetchDataForCategory('xiaomi');
  PrHp = await fetchDataForCategory('hp');
  PrAsus = await fetchDataForCategory('Asus');
  PrLenovo = await fetchDataForCategory('Lenovo');
  PrAcer = await fetchDataForCategory('Acer');
};

fetchDataForAllCategories();



export const TimeDeals = [
  {
    name: "LG 32 litres Convection Microwave Oven, MC3286BRUM",
    img: "https://www.reliancedigital.in/medias/581108139-Package-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDI0OHxpbWFnZS9qcGVnfGltYWdlcy9oZjQvaDJmLzg5NjM4NDQ4OTg4NDYuanBnfDljZDk0MDcwYmFhNzQ1NjhlOTFiNzk3NjUyYmI3MzExZTU4NzA0MzYxMGRiMzg2ZmExN2RjMGZmMWJiMGIwM2Q",
    mrp: "23,999.00",
    price: "17,140.00",
    discount: "29%(₹6,859)",
    id: 1,
    linked: "kitchen",
  },
  {
    name: "LG 28 litres Convection Microwave Oven, MC2846BV",
    img: "https://www.reliancedigital.in/medias/LG-MC2846BV-Microwave-Ovens-581107300-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODIzM3xpbWFnZS9qcGVnfGltYWdlcy9oOTkvaDFiLzk4MDU4NTQxNDY1OTAuanBnfDVlYWMxYTY5Nzk2OTkyYTcxZGEwOTVmY2FiYmQ0YmFmYTYwOGFmZTM0OGRjYjdjZTJlMGMxY2Q3MWY2ZGVjODc",
    mrp: "16,999.00",
    price: "15,990.00",
    discount: "6%(₹1,009)",
    id: 2,
    linked: "kitchen",
  },
  {
    name: "IFB 30 litres Rotisserie Convection Microwave Oven, 30BRC2",
    img: "https://www.reliancedigital.in/medias/IFB-30BRC2-Microwave-Ovens-491391947-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGU4LzkwMTg4Nzk0NzU3NDIuanBnfDgxZGIxNGNlNGNkMDJkZDljMmU0ZTE5NGYxYmMzMDU1NzU0OTdlODg0Njc0NzdjMmY5YWJhNDZiNzQ5ZDAxMjQ",
    mrp: "20,390.00",
    price: "15,990.00",
    discount: "22%(₹4,400)",
    id: 3,
    linked: "kitchen",
  },
  {
    name: "LG 20 litres Solo Microwave Oven, MS2043DB",
    img: "https://www.reliancedigital.in/medias/LG-MS2043DB-Microwave-Oven-491166959-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzg4N3xpbWFnZS9qcGVnfGltYWdlcy9oMGIvaGYxLzkxOTY2NjQ5Nzk0ODYuanBnfDQyODU2MDc2MTZlODBjZjYyY2VlMjFlOTZlNjVjN2IyMzJmOTkxY2VhZTcwZTIxZDBhODU0YmNlNzIyZTQ5ZjM",
    mrp: "7,899.00",
    price: "6,499.00",
    discount: "18%(₹1,400)",
    id: 4,
    linked: "kitchen",
  },
  {
    name: "Samsung 23 Litre Solo Microwave Oven with Indian Auto cook Menu, (MS23A3513AK/TL, Black)",
    img: "https://www.reliancedigital.in/medias/Samsung-MS23A3513AK-TL-Solo-Grill-492573240-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzAyOXxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDY3Lzk4NDU0NjcxNTI0MTQuanBnfGUyMDczNjE2MTMzZDFlNWMyMmVjNzgxZmMzMTRhZmYzNDc1YmJmMzVmZDk0ZGYxMzI1ZTlhMTBmNTkxYzFkMzQ",
    mrp: "7,500.00",
    price: "6,600.00",
    discount: "12%(₹900)",
    id: 5,
    linked: "kitchen",
  },
  {
    name: "LG 28 litres Convection Microwave Oven, MJ2886BWUM",
    img: "https://www.reliancedigital.in/medias/LG-MJ2886BWUM-Microwave-Ovens-491392151-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODQ0N3xpbWFnZS9qcGVnfGltYWdlcy9oODUvaDRkLzg5Nzk4MTkzMzE2MTQuanBnfDQ5NjNkNTc2ODRjN2M0MzZhZTUzYTAyZjQ5MzljYjczNjEwNTQ4ODI2NjllMzQ4MTVjM2FkOWRhN2QxMmYwOWQ",
    mrp: "24,299.00",
    price: "19,490.00",
    discount: "20%(₹4,809)",
    id: 6,
    linked: "kitchen",
  },
  {
    name: "LG 21 litres Convection Microwave Oven, MC2146BG",
    img: "https://www.reliancedigital.in/medias/LG-MC2146BG-Microwave-Ovens-491604223-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODc4fGltYWdlL2pwZWd8aW1hZ2VzL2hlOS9oZDYvOTIyMDg4ODAwMjU5MC5qcGd8ZGI2OWEwYmFjNTM3MjQ2ZGI5ZmM5MTNiNDAxM2FlZWUzMzQ1NGQ3YmY4MzY3MWI1YTYyYmM5ZmM1ZmFkZmQyZA",
    mrp: "13,999.00",
    price: "11,590.00",
    discount: "17%(₹2,409)",
    id: 7,
    linked: "kitchen",
  },
  {
    name: "Samsung 23 Litre Grill Microwave Oven with Grill Fry, Browning Plus (MG23A3515AK/TL, Black)",
    img: "https://www.reliancedigital.in/medias/Samsung-MG23A3515AK-TL-Solo-Grill-492573239-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzA0NHxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaDQwLzk4NDU0NjYxNjkzNzQuanBnfDgwZTgyN2Y2YTEwNjAzZDE2NmUwM2ZkNmIxNGQyMzlhNWRmYzk2NTk1MzU1ZTE1NzZiYmNmMjA4ZDg2OWNmYTQ",
    mrp: "11,600.00",
    price: "8,500.00",
    discount: "27%(₹3,100)",
    id: 8,
    linked: "kitchen",
  },
]
export const BannersCenter = [
  {
    "id": 1,
    "name": "Máy tính",
    "imgbnct": "https://i.pinimg.com/564x/a5/6c/93/a56c930c91e49eebd953ff0d51a9bec6.jpg"
  },
];


export const BannersLeft = [
  {
    "id": 1,
    "name": "Máy tính",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png"
  },
];




export const CateFeatures = [

  {
    "id": 1,
    "name": "Máy tính",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png"
  },
  {
    "id": 2,
    "name": "Tablet",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tablet-128x129.png"
  },
  {
    "id": 3,
    "name": "Đồng hồ thông minh",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-moi-128x129.png"
  },
  {
    "id": 4,
    "name": "Điện thoại độc quyền",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/dien-thoai-doc-quyen-128x128.png"
  },
  {
    "id": 5,
    "name": "Màn hình máy tính",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png"
  },
  {
    "id": 6,
    "name": "Phụ kiện di động",
    "imgcatehot": "https://duhung.vn/wp-content/uploads/2023/05/Bo-phu-kien-di-dong-Yealink-cho-WH6367-2.png"
  },
  {
    "id": 7,
    "name": "Phụ kiện Gaming",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Phukiengaming-128x129.png"
  },
  {
    "id": 8,
    "name": "Thiết bị âm thanh",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Loa-128x128.png"
  },
  {
    "id": 9,
    "name": "Điều hòa",
    "imgcatehot": "https://tse4.mm.bing.net/th?id=OIP.7BSmCxRZXYWjuGgMj_vDWQHaHa&pid=Api&P=0&h=220"
  },
  {
    "id": 10,
    "name": "Thiết bị làm mát",
    "imgcatehot": "https://tse2.mm.bing.net/th?id=OIP.xFEN277jlGRs4XzhB_E5jAHaE8&pid=Api&P=0&h=220"
  },





];




export const ItemDetails1 = [
  {
    img1: "https://i.pinimg.com/564x/e4/ac/1c/e4ac1c62cd247e2df4d9d554fca44021.jpg",
    img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/09/banner/IP15-720-220-720x220-5.png",

    caption: "Slide 1",
  },
  {

    img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/10/banner/Mua-kem-720-220-720x220-1.png",
    img1: "https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU",

    caption: "Slide 2",
  },

];

export const ItemDetails2 = [
  {
    img: "https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY",
    caption: "Slide 1",
  },
  {
    img: "https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTAwN3xpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDI5Lzk5Mjk4MTAyMTQ5NDIuanBnfGUxYTc3MTMzNThhNzlkZGQyNTNlYTYxMzM3OWM4NzQzYjY2YWYwYzFkNjhhMjA5M2YwNDhiYTMwMzA2ZGY5MTY",
    caption: "Slide 2",
  },
  {
    img: "https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0",
    caption: "Slide 3",
  },
  {
    img: "https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y",
    caption: "Slide 4",
  },
  {
    img: "https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI",
    caption: "Slide 5",
  },
  {
    img: "https://www.reliancedigital.in/medias/Moto-G42-Carousel-Banner-09-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g2ZC85OTI5ODI3Mzg1Mzc0LmpwZ3w4MzEyODVmNTUyNWIwODNlNTA1YThjNTA4Njg5ZmU1YTU1ZjZlMzM5NWY5ODI0ZWNmOTAwYjY5M2RhNWVkOTky",
    caption: "Slide 6",
  },
  {
    img: "https://www.reliancedigital.in/medias/Apple-Accessories-Carousel-Banner-01-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MjY3M3xpbWFnZS9qcGVnfGltYWdlcy9oZTIvaDg3Lzk5MjgxNzE1NTI3OTguanBnfDkzOTI0MDE5YzgxOTVmNzdiMTBlNWZhMTQwMWZmNDc1ZTU2MzY5YmIwZTBlZWQ2ZjRkYWVhYzBkZTkzMTM3Y2M",
    caption: "Slide 7",
  },
  {
    img: "https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4Mjc4NHxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDNlLzk5MzExODEzNTkxMzQuanBnfDA5Nzc0YWExYjdjM2YzNTg4Njk4MDJjZGU1ZWQ4NzAzOTIzZDgxMWU2MjVhYjdkNTI2MzBhNWJhYzg0ZTZjMTk",
    caption: "Slide 8",
  },
  {
    img: "https://www.reliancedigital.in/medias/Apple-S8-CLP-Banner-14-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NzY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDBkLzk5MzExODU1MjA2NzAuanBnfDA3MWZiOGZlMzdjOTYzZDFhZGUyZWMzMjdmOTgxZmJjOGY1MTI2OGI0ZjA3YjU1YzUzNDllZjlkMmQwMmFkMjA",
    caption: "Slide 9",
  },
];



export const ItemDetails4 = [
  {
    img: "https://www.reliancedigital.in/medias/43-inch-UHD-TV-Small-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MTc5NXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGM2Lzk5MjgxNjcyNjAxOTAuanBnfDg4MjdjN2IwZWViMTNlNmM2ODdiOWZjNzU2M2RkZmVlZTMxMmM4ODRlZWQ3MWNhMWIwYWI3NmNhMDcxNjkxY2M",
    caption: "Slide 1",
    linked: "televisions",
  },
  {
    img: "https://www.reliancedigital.in/medias/Headphones-and-Earphones-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w0MDQzNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDU0Lzk5MjY3ODEzMzc2MzAuanBnfGI1Y2Q4MDExYTAwOGEzYzhlNWQxOTI0MzU2ZWIyY2YyYWQ5NDE1M2EwYzNmMTNjNjA4MGZiMTU2Y2VlZGNlZDQ",
    caption: "Slide 2",
    linked: "headphones",
  },
  {
    img: "https://www.reliancedigital.in/medias/OnePlus-Smart-TV-Small-Banner-13-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NjMwMXxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaDk5Lzk5MzExODY3MDAzMTguanBnfDAxYmI1YmI5OGE3NzIxNmY3MTMxODBiZTEyYmQ4N2RmOGM4OWE3ZmM1NzFiYWIzYjNjYmE0YmFmZDhlYWZhNDQ",
    caption: "Slide 3",
    linked: "televisions",
  },
  {
    img: "https://www.reliancedigital.in/medias/Soundbars-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTg3NHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaGQ1Lzk5MjY3ODE0MDMxNjYuanBnfDY5ODQ2ZDU3NDFlMjgxYTY2YTViZmQ1ZTA4Y2U5ZTMwYjVlNjYzNTk3YzJjNzkyMDUwY2VkY2ZlZTViODQ1NjQ",
    caption: "Slide 4",
    linked: "homeappliances",
  },
];

export const ItemDetails5 = [
  {
    name: "LG 32 litres Convection Microwave Oven, MC3286BRUM",
    img: "https://www.reliancedigital.in/medias/581108139-Package-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDI0OHxpbWFnZS9qcGVnfGltYWdlcy9oZjQvaDJmLzg5NjM4NDQ4OTg4NDYuanBnfDljZDk0MDcwYmFhNzQ1NjhlOTFiNzk3NjUyYmI3MzExZTU4NzA0MzYxMGRiMzg2ZmExN2RjMGZmMWJiMGIwM2Q",
    mrp: "23,999.00",
    price: "17,140.00",
    discount: "29%(₹6,859)",
    id: 1,
    linked: "kitchen",
  },
  {
    name: "LG 28 litres Convection Microwave Oven, MC2846BV",
    img: "https://www.reliancedigital.in/medias/LG-MC2846BV-Microwave-Ovens-581107300-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODIzM3xpbWFnZS9qcGVnfGltYWdlcy9oOTkvaDFiLzk4MDU4NTQxNDY1OTAuanBnfDVlYWMxYTY5Nzk2OTkyYTcxZGEwOTVmY2FiYmQ0YmFmYTYwOGFmZTM0OGRjYjdjZTJlMGMxY2Q3MWY2ZGVjODc",
    mrp: "16,999.00",
    price: "15,990.00",
    discount: "6%(₹1,009)",
    id: 2,
    linked: "kitchen",
  },
  {
    name: "IFB 30 litres Rotisserie Convection Microwave Oven, 30BRC2",
    img: "https://www.reliancedigital.in/medias/IFB-30BRC2-Microwave-Ovens-491391947-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGU4LzkwMTg4Nzk0NzU3NDIuanBnfDgxZGIxNGNlNGNkMDJkZDljMmU0ZTE5NGYxYmMzMDU1NzU0OTdlODg0Njc0NzdjMmY5YWJhNDZiNzQ5ZDAxMjQ",
    mrp: "20,390.00",
    price: "15,990.00",
    discount: "22%(₹4,400)",
    id: 3,
    linked: "kitchen",
  },
  {
    name: "LG 20 litres Solo Microwave Oven, MS2043DB",
    img: "https://www.reliancedigital.in/medias/LG-MS2043DB-Microwave-Oven-491166959-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzg4N3xpbWFnZS9qcGVnfGltYWdlcy9oMGIvaGYxLzkxOTY2NjQ5Nzk0ODYuanBnfDQyODU2MDc2MTZlODBjZjYyY2VlMjFlOTZlNjVjN2IyMzJmOTkxY2VhZTcwZTIxZDBhODU0YmNlNzIyZTQ5ZjM",
    mrp: "7,899.00",
    price: "6,499.00",
    discount: "18%(₹1,400)",
    id: 4,
    linked: "kitchen",
  },
  {
    name: "Samsung 23 Litre Solo Microwave Oven with Indian Auto cook Menu, (MS23A3513AK/TL, Black)",
    img: "https://www.reliancedigital.in/medias/Samsung-MS23A3513AK-TL-Solo-Grill-492573240-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzAyOXxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDY3Lzk4NDU0NjcxNTI0MTQuanBnfGUyMDczNjE2MTMzZDFlNWMyMmVjNzgxZmMzMTRhZmYzNDc1YmJmMzVmZDk0ZGYxMzI1ZTlhMTBmNTkxYzFkMzQ",
    mrp: "7,500.00",
    price: "6,600.00",
    discount: "12%(₹900)",
    id: 5,
    linked: "kitchen",
  },
  {
    name: "LG 28 litres Convection Microwave Oven, MJ2886BWUM",
    img: "https://www.reliancedigital.in/medias/LG-MJ2886BWUM-Microwave-Ovens-491392151-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODQ0N3xpbWFnZS9qcGVnfGltYWdlcy9oODUvaDRkLzg5Nzk4MTkzMzE2MTQuanBnfDQ5NjNkNTc2ODRjN2M0MzZhZTUzYTAyZjQ5MzljYjczNjEwNTQ4ODI2NjllMzQ4MTVjM2FkOWRhN2QxMmYwOWQ",
    mrp: "24,299.00",
    price: "19,490.00",
    discount: "20%(₹4,809)",
    id: 6,
    linked: "kitchen",
  },
  {
    name: "LG 21 litres Convection Microwave Oven, MC2146BG",
    img: "https://www.reliancedigital.in/medias/LG-MC2146BG-Microwave-Ovens-491604223-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODc4fGltYWdlL2pwZWd8aW1hZ2VzL2hlOS9oZDYvOTIyMDg4ODAwMjU5MC5qcGd8ZGI2OWEwYmFjNTM3MjQ2ZGI5ZmM5MTNiNDAxM2FlZWUzMzQ1NGQ3YmY4MzY3MWI1YTYyYmM5ZmM1ZmFkZmQyZA",
    mrp: "13,999.00",
    price: "11,590.00",
    discount: "17%(₹2,409)",
    id: 7,
    linked: "kitchen",
  },
  {
    name: "Samsung 23 Litre Grill Microwave Oven with Grill Fry, Browning Plus (MG23A3515AK/TL, Black)",
    img: "https://www.reliancedigital.in/medias/Samsung-MG23A3515AK-TL-Solo-Grill-492573239-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzA0NHxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaDQwLzk4NDU0NjYxNjkzNzQuanBnfDgwZTgyN2Y2YTEwNjAzZDE2NmUwM2ZkNmIxNGQyMzlhNWRmYzk2NTk1MzU1ZTE1NzZiYmNmMjA4ZDg2OWNmYTQ",
    mrp: "11,600.00",
    price: "8,500.00",
    discount: "27%(₹3,100)",
    id: 8,
    linked: "kitchen",
  },
  {
    name: "LG 32 litres Convection Microwave Oven, MJEN326UH",
    img: "https://www.reliancedigital.in/medias/LG-MJEN326UH-Microwave-Ovens-491604502-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2Mjg3fGltYWdlL2pwZWd8aW1hZ2VzL2hjNS9oYTkvOTIyOTk4ODU2MDkyNi5qcGd8NzhmMjZiYWEzOGE3MDhhOTM2OWUyYWUwMzhlNjUzN2M5OTYzZTg0ZDhlOWU2MWUxMGQ4MDJiNjljNDg5MGM1Mg",
    mrp: "31,499.00",
    price: "24,490.00",
    discount: "22%(₹7,009)",
    id: 9,
    linked: "kitchen",
  },
  {
    name: "Samsung 28 litres SlimFry Convection Microwave Oven, MC28A5033CK Black",
    img: "https://www.reliancedigital.in/medias/Samsung-MC28A5033CK-TL-Convection-MicrowaveOvens-492911130-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDIzOXxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaDRiLzk4ODc3MDc4MjQxNTguanBnfDhlMTVjNTVkZTYyZTgyYjY4N2E5NWE4NTMzNTMwZmJlYjNlMTJjMTI1Zjk0ODg0NDk2MmExODYzZWU1NmVhZGU",
    mrp: "17,990.00",
    price: "14,990.00",
    discount: "17%(₹3,000)",
    id: 10,
    linked: "kitchen",
  },
  {
    name: "LG 21 litres Convection Microwave Oven, MC2146BV",
    img: "https://www.reliancedigital.in/medias/LG-MC2146BV-Microwave-Ovens-581107299-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODc1OHxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDhmLzk4MDU4NTIxODA1MTAuanBnfGE0MzU1N2Y1NjZkNjYzOTYzYjc5MDVjOTAyNzVkZTI3MzJmZTIwZTVkMDkyZmYyZTY3ZTkyMDE3NGFiMzIwM2M",
    price: "14,499.00",
    id: 11,
    linked: "kitchen",
  },
  {
    name: "Samsung 28 Litres MC28A5145VK Convection Microwave Oven with Moisture Sensor",
    img: "https://www.reliancedigital.in/medias/Samsung-MC28A5145VK-TL-CONVECTION-491998058-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODkzNnxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaDNmLzk3MzQ4NDU2NjEyMTQuanBnfDQ2NjhmZDgyZDE0YjFiNWE5Njk3NmQ0ZGE0OGIxYjQ5YTJkN2UzYmYwMTU0ODBhOTgyZDRkNmU2ZjhiMjgzYjU",
    mrp: "18,800.00",
    price: "16,590.00",
    discount: "12%(₹2,210)",
    id: 12,
    linked: "kitchen",
  },
];

export const ItemDetails6 = [
  {
    img: "https://www.reliancedigital.in/medias/Smartwatches-Small-Banners-01.jpg?context=bWFzdGVyfGltYWdlc3w0NDA0MnxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaGRiLzk5MjgzNzA5MTMzMTAuanBnfGYwOWU2ZjQ3Y2Y0OWI2NmVhZGVkYWM2M2ZiMzQ4YTlhODRkZDY4ODZmODA1OGQyZWNiYWVhODNmNWM2YWMwMmY",
    caption: "Slide 1",
    linked: "personalcare",
  },
  {
    img: "https://www.reliancedigital.in/medias/Realme-Smart-TV-Great-Deals-Banner-13-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NzY3MHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDg2Lzk5MzExODY3NjU4NTQuanBnfDA5YzNlMTkwNmM0ZWI3ZGJlYjI5Y2E0ZmQ5M2M5YjNkZmZjZmVlMjBmOGU1ZGIwNDY3NjFhNTcwMWM4ZmFlOWI",
    caption: "Slide 2",
    linked: "televisions",
  },
  {
    img: "https://www.reliancedigital.in/medias/Printers-Small-Banners-01-1-.jpg?context=bWFzdGVyfGltYWdlc3w0MDAwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGQxLzk5Mjg3MzAzNDU1MDIuanBnfGMyNTg3NWQyZWRmMGU2M2EzZmEwM2U2MWNlMTA3ZWQzYjk4MmRhM2EzYjY0N2FiZGM4OGFlYWQ2NjBlZjE4YWE",
    caption: "Slide 3",
    linked: "homeappliances",
  },
  {
    img: "https://www.reliancedigital.in/medias/Washing-Machines-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDUwLzk5MTM3Nzc3MTcyNzguanBnfGMyNWJhNDNiMTFkMjE4YmQ2OGRiMzdkMGIxNmZmZDhiYzViMTBjY2I1ZDllYzAyMWFjN2FlZTU1ZGVmMDk4MmU",
    caption: "Slide 4",
    linked: "homeappliances",
  },
  {
    img: "https://www.reliancedigital.in/medias/Smart-Home-Products-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzOTAxM3xpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDMxLzk5MzExOTE5NDMxOTguanBnfDhiY2ZkOWE5YmQ3OWFkYmM2OWUwNjIwODQ4NGFkMWI4MDExZGQ5ZTIyNzkyMmZiMDM2ZDcyYjRkM2M4NmQ0MTA",
    caption: "Slide 5",
    linked: "homeappliances",
  },
  {
    img: "https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y",
    caption: "Slide 6",
    linked: "headphones",
  },
  {
    img: "https://www.reliancedigital.in/medias/Samsung-M13-5G-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNDUzN3xpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGY3Lzk5MjM5MDIzNDExNTAuanBnfDdiZjliNDZlOWUxZDFjZDQ2MDkzYjdjZDZhNDVlNWI0MGYwNTAwOWJkOWM4MWUzMTUyYmNmZmRmZjk3NjIwYjk",
    caption: "Slide 7",
    linked: "mobilesandtablets",
  },
  {
    img: "https://www.reliancedigital.in/medias/MackBook-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDkyLzk5MTkwODgzMjg3MzQuanBnfDcxYmMyMDMxMjdiMzUxYzE2NmJkYTU4ZDBlNTQxNjBkZWViYjQ1Mzc2Y2IyOWYwNTllODhkNmRlZjA0NjM3NmI",
    caption: "Slide 8",
    linked: "computers",
  },
];

export const ItemDetails7 = [
  {
    img: "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2",
    caption: "Slide 1",
  },
  {
    img: "https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm",
    caption: "Slide 2",
  },
  {
    img: "https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk",
    caption: "Slide 3",
  },
];

export const ItemDetails8 = [
  {
    name: "HP 14s-dr3001TU Laptop (Intel Pentium Silver N6000/8 GB/256 GB SSD/UHD Graphics/Windows 11 Home/MSO/HD), 35.6 cm (14 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-681Y7PA-ACJ-Laptop-493178767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjAxOXxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDU2Lzk5MjM5NDA2MTQxNzQuanBnfGEzZDE5OGQxNmY4M2FkMGUxODU2OTg4MDdkOTFkMmZlYmJmZjdiMDAzZTVhYzBiZmVmNThiMmYwYzhmMTkyNGI",
    price: "32,999.00",
    mrp: "37,000.00",
    discount: "11%(₹4,001)",
    id: 1,
    linked: "computers",
  },
  {
    name: "HP 15s-er1501AU Standard Laptop (AMD Ryzen 3 3250U/8 GB/256 GB SSD/Radeon Graphics/Windows 11 Home/MSO/HD), 39.62 cm (15.6 Inch)",
    img: "https://www.reliancedigital.in/medias/HP-ER1501AU-Laptop-493178397-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDIyLzk5MDE1NTA5Mjc5MDIuanBnfDlkOGRhZGEyOWMyZWQzNTI2YTc4ZTY5ODJhYjBlNTRlZDg5YmQ5YTczM2Q2MTg0ZGRkYTE3Y2IyMmI1NTQzMDY",
    price: "28,990.00",
    mrp: "41,204.00",
    discount: "30%(₹12,214)",
    id: 2,
    linked: "computers",
  },
  {
    name: "Lenovo L2IN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4 /8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/Full HD), 39.62 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Lenovo-L2IN-Laptops-492574725-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGQyLzk3NDczMjk5NzQzMDIuanBnfDMxMDY2NDQ1MjE3ZDFjOTZiNjRmYTE0NTlhNmYzMWZmNGNjNjY3NzhkZjE2MTdlZTZmMzE2Yjc3NDBmNjYwMGU",
    price: "35,499.00",
    mrp: "59,390.00",
    discount: "40%(₹23,891)",
    id: 3,
    linked: "computers",
  },
  {
    name: "HP 15s-fq2670TU Laptop (11th Gen Intel Core i3-1115G4/8 GB RAM/256 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-6N043PA-ACJ-Laptop-493177597-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTkyOHxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDZhLzk4ODIyODk1MzcwNTQuanBnfDAzZjY0ZjBmY2RmNWY0YzBiMWU5MGQ1YTkxYWIxMmVhZGJmYTdkNDFkYWRiMGMwNzNhOTlhNzFmM2EzNWQxZGE",
    price: "41,400.00",
    mrp: "45,409.00",
    discount: "9%(₹4,009)",
    id: 4,
    linked: "computers",
  },
  {
    name: "Lenovo LJIN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4/8GB/512GB SSD/Intel UHD Graphics/Windows 11/MSO/Full HD), 39.62 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Lenovo-LJIN-Laptops-492574616-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2ODcxN3xpbWFnZS9qcGVnfGltYWdlcy9oYjAvaGJiLzk3NDE1NjMzOTYxMjYuanBnfDk3NmMzMWI4MDZjYzU0YzJmZGUxNTJiYzI0MGRjOTQ5Nzg5ZjI1YmM3NzNmNmE3NjQ3ZTQ0NzlhMzI2ZDNlYzU",
    price: "40,499.00",
    mrp: "65,690.00",
    discount: "38%(₹25,191)",
    id: 5,
    linked: "computers",
  },
  {
    name: "Lenovo IdeaPad 3 Thin and Light Laptop (11th Gen Intel Core i3-1115G4/8 GB/512 GB SSD/Windows 11 Home/MSO/FHD), 39.62 cm (15.6 Inch)",
    img: "https://www.reliancedigital.in/medias/Lenovo-82H802L3IN-Laptop-493177740-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTg4M3xpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDk4Lzk4OTQ2NDQyNTI3MDIuanBnfDUwOTkxZTdiMWYxZjVmY2M3YWI3NDRhZDVjYjViYzMwNzZjZDE4OTk4NGM2YjM2YjkxZmE5OGU5NTgxYzI3NDg",
    price: "38,990.00",
    mrp: "67,090.00",
    discount: "42%(₹28,100)",
    id: 6,
    linked: "computers",
  },
  {
    name: "HP 15s-fq2672TU Laptop (11th Gen Intel Core i3-1115G4/8GB RAM/512GB SSD/UHD Graphics/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 Inch), Natural Silver",
    img: "https://www.reliancedigital.in/medias/HP-6N045PA-ACJ-Laptop-492850808-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDMwM3xpbWFnZS9qcGVnfGltYWdlcy9oMzEvaGZjLzk4NjQyNzcyMjk1OTguanBnfGE5ZjgwMzdjYzY2MTAyMzhiZWRmNzM3OWI0NTNiMWI2MjcyNTRjMjIwNmY5ZmVlMmQwMDE3MjEyNzVmMDRmMTg",
    price: "43,749.00",
    mrp: "49,977.00",
    discount: "12%(₹6,228)",
    id: 7,
    linked: "computers",
  },
  {
    name: "HP 15s-fq2671TU Laptop (11th Gen Intel Core i3-1115G4/8 GB RAM/512 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-6N044PA-ACJ-Laptop-493177596-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTYwMHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDMwLzk4ODIyOTA4NDc3NzQuanBnfDgzNzE4ZTExMDNkZmY1YmM2MzQyMWUwY2Y2NGRjMTA1MDJjNDVkNjQ5MTk0ZWIyMTA2NWQwY2I2MWNjOGQzZWI",
    price: "39,999.00",
    mrp: "47,833.00",
    discount: "16%(₹7,834)",
    id: 8,
    linked: "computers",
  },
  {
    name: "Asus EK522WS Laptop (11th Gen Intel Core i5-1135G7/8 GB/512 GB SSD/Iris Xe Graphics/Windows 11 Home/MSO/FHD), 35.56 cm (14 Inch)",
    img: "https://www.reliancedigital.in/medias/Asus-X415EA-EK522WS-Laptop-493178259-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTUyNHxpbWFnZS9qcGVnfGltYWdlcy9oZWQvaDM5Lzk5MDQ3MzE1MjEwNTQuanBnfDk2NmRmZTZjNzNiMTlkMjgwMWJiM2E0NjdmOTM4NzJjM2Y5ZTAyZmJmMjZhYmIxYmJjZTVjYzNkMDlmMDE1YWQ",
    price: "49,999.00",
    mrp: "70,990.00",
    discount: "30%(₹20,991)",
    id: 9,
    linked: "computers",
  },
  {
    name: "HP 15s-fq5111TU Laptop (12th Gen Intel Core i5-1235U/8 GB RAM/512 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-6P129PA-ACJ-Laptop-493177598-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTYxMnxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDBjLzk4ODIyODk4NjQ3MzQuanBnfDc4ZGI4NTAzOGE1MWFhMTkyZTUxNGEzNjhlYTExMTA5YjEwNDFkNjVjNWVhNTAzZTkxNDE0YTNhZWFiZTIwZGQ",
    price: "57,928.00",
    mrp: "67,831.00",
    discount: "15%(₹9,903)",
    id: 10,
    linked: "computers",
  },
  {
    name: "HP 15s-fr5007TU Laptop (12th Gen Intel Core i5-1235U/8GB RAM/512GB SSD/Iris Xe Graphics/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 Inch), Natural Silver",
    img: "https://www.reliancedigital.in/medias/HP-6P130PA-ACJ-Laptop-493177048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDMwM3xpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDBkLzk4NjQyNzY5MDE5MTguanBnfGMxNGRkOTVkMjdmOGJjODBhZGIzYTFkNmQ1OTJmYjE5MjdhMmQ1Y2FmMzIyNGY2ODAwMGNiYTRjZDMyMDY4MmE",
    price: "60,499.00",
    mrp: "68,000.00",
    discount: "11%(₹7,501)",
    id: 11,
    linked: "computers",
  },
  {
    name: "Asus EK562WS Laptop (11th Gen Intel Core i5-1135G7/8GB+32GB Intel Optane/512GB SSD/Intel Iris Xe Graphics/Windows 11/MSO/Full HD), 35.56 cm (14 inch)",
    img: "https://www.reliancedigital.in/medias/Asus-EK562WS-Laptop-492574733-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NDQwM3xpbWFnZS9qcGVnfGltYWdlcy9oYjYvaGE4Lzk3NTEzNTk1ODYzMzQuanBnfDI2ZGEyZjEyZTUyMWQxMGM5ODMyMjQwMzI4YTVmNjE1ZTZjNWNkMjkzYTMyODk0YmNiNzYzNWE0MmVmMzUxNDA",
    price: "48,990.00",
    mrp: "69,990.00",
    discount: "30%(₹21,000)",
    id: 12,
    linked: "computers",
  },
];

export const ItemDetails9 = [
  {
    img: "https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk",
    caption: "Slide 1",
    title: "Ship hàng toàn quốc",
    desc: "Freeship nội thành TP.HCM",
  },
  {
    img: "https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh",
    caption: "Slide 2",
    title: "Dùng thử sản phẩm 30 ngày",
    desc: "Bảo hành 365 ngày",
  },
  {
    img: "https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY",
    caption: "Slide 3",
    title: "Hỗ trợ trả góp 0 đồng",
    desc: "Linh hoạt nhiều hình thức thanh toán",
  },
  {
    img: "https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU",
    caption: "Slide 4",
    title: "Thu cũ - Đổi mới",
    desc: "Hỗ trợ thu lại máy cũ, bù tiền lấy mới",
  },
];

export const ItemDetails10 = [
  {
    name: "BPL Men's 10-in-1 Grooming Kit with Digital Battery Indicator, 70mins Cordless Usage, Fast Charging, 5-Heads & 5-Comb Length Adjustment, Detachable Heads for easy cleaning, 2 Years Warranty, Black and Light Gold",
    img: "https://www.reliancedigital.in/medias/BPL-BBTD001GK-Shaver-and-Trimmers-491903184-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0Mjc2M3xpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDUwLzk2MjExMzQwMTY1NDIuanBnfDU4YWM2ZDBiZDQwNjM5ZjEwMzQ0ZjEyMTU0OWZmM2MzOWUzZDVlZmI0NDUwYTU1YTdlYzIxMzRjYmRmMmQwOGE",
    price: "999.00",
    mrp: "2,799.00",
    discount: "64%(₹1,800)",
    id: 1,
    linked: "personalcare",
  },
  {
    name: "Lifelong LLPCM13 Men's Beard Trimmer, Black",
    img: "https://www.reliancedigital.in/medias/Lifelong-LLPCM13-Shavers-and-Trimmers-491903024-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODc3NHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDRjLzk0NzA5MjU4NjQ5OTAuanBnfDIyNzNmNDU2ZmQwYTE0MTBlM2I4ZTk3MjdkNWFkZWQ1YmFiMmMxNzMyMzlhMjFmY2Y3OWY3YTFkNWIyMjg1ZjA",
    price: "559.00",
    mrp: "1,200.00",
    discount: "53%(₹641)",
    id: 2,
    linked: "personalcare",
  },
  {
    name: "Philips BT3102/15 cordless rechargeable Beard Trimmer - 10 length settings, 60 min run time",
    img: "https://www.reliancedigital.in/medias/Philips-BT3102-15-Shaver-and-Trimmers-491891822-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTE5NHxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaDJmLzkzMzI2NjMxMjM5OTguanBnfDcwNDg1ZTA4OTg0MzllNzFjMDU3MDk2N2Q3NWJmMTUzZGE1MzZlOGNhY2VjZjllOTU3OTM2YjFkZDYzOGJkZWQ",
    price: "1,249.00",
    mrp: "1,495.00",
    discount: "16%(₹246)",
    id: 3,
    linked: "personalcare",
  },
  {
    name: "Misfit by boAt T30 RTL Men's Trimmer, Active Black",
    img: "https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg",
    price: "449.00",
    mrp: "1,499.00",
    discount: "70%(₹1,050)",
    id: 4,
    linked: "personalcare",
  },
  {
    name: "Wahl Cordless Trimmer Mini Groomsman 3 in 1 Grooming Kit, 05608-524 Black",
    img: "https://www.reliancedigital.in/medias/WAHL-05608-524-Trimmers-491891812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDQ4OXxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaDZiLzkzNzQ2NTAyMzY5NTguanBnfDI0NDY2NDIwZGRhYWNhYTBiZTU2YjVkOWUzYzk3NzYxODUxNzc4MTgyNGYxYzU2YTM2MTdiYzZiZjhhYWQ1ZGU",
    price: "199.00",
    mrp: "1,000.00",
    discount: "80%(₹801)",
    id: 5,
    linked: "personalcare",
  },
  {
    name: "Philips Beard Trimmer BT1230/15 with USB Charging",
    img: "https://www.reliancedigital.in/medias/Philips-BT1230-15-TRIMMER-492664323-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MzcyfGltYWdlL2pwZWd8aW1hZ2VzL2g1OS9oYjkvOTc0OTU4NTc4ODk1OC5qcGd8M2JlNGNiNjc3MDUxODY2ZjAwMGQyODE2NTdiOTZkZmM2ODY5Yjg4NDMyMDc0ZDQ1MTE3MWIzMDg0NjgxNTM2NQ",
    price: "699.00",
    mrp: "945.00",
    discount: "26%(₹246)",
    id: 6,
    linked: "personalcare",
  },
  {
    name: "Wahl Grooming Kit Mini T Pro, White and Black",
    img: "https://www.reliancedigital.in/medias/WAHL-Mini-T-Pro-Trimmers-492910963-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjg3OHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGNhLzk4MjkwMjQxMDQ0NzguanBnfDIwM2FlYWE3YjVjMjY1YTE4MmI1MTlmMGI1NWZmYmU3NzAzZjRkMTE5MThmMjI3YjNjMGQyMzBjZGQ1MDk1NWM",
    price: "799.00",
    mrp: "1,649.00",
    discount: "52%(₹850)",
    id: 7,
    linked: "personalcare",
  },
  {
    name: "Phillips 7000 13-in-1 Multigroom Trimmer with Self-sharpening Blades, MG7715/65",
    img: "https://www.reliancedigital.in/medias/Philips-MG7715-65-Trimmer-492864867-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTE0OXxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDdiLzk4MzE3NzM5Mjk1MDIuanBnfGRiNGVlMmNlMjdhYzdlNjQ2Mzg1MjY2ZTBkODU5OGZiZWVjZDRiZDkwMDk1MzdlMTRiOTNlMjk1OTFiYjA1NWQ",
    price: "3,492.00",
    mrp: "4,595.00",
    discount: "24%(₹1,103)",
    id: 8,
    linked: "personalcare",
  },
  {
    name: "Philips MG5740/15 Grooming Kit with Self-sharpening blades & 12 tools",
    img: "https://www.reliancedigital.in/medias/Philips-MG5740-15-TRIMMER-492391977-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjE5M3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaDMzLzk3NzU4NzYyNzYyNTQuanBnfDFmZTc4NzYyODQ5ODcwNGI0MmZiNDk3YTIyYTY0OTNjYjQ4NzA4NmE3ODgwMzAwYTU0NTk3Mzg5ZDVlYzg4N2Y",
    price: "2,399.00",
    mrp: "2,995.00",
    discount: "20%(₹596)",
    id: 9,
    linked: "personalcare",
  },
  {
    name: "Wahl Quickstyle Men's Trimmer, Grey",
    img: "https://www.reliancedigital.in/medias/WAHL-Quickstyle-Trimmers-491189131-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTI2NHxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaGUzLzk4NjU1Nzc0NjM4MzguanBnfGFlZWJiNzg0YmM2M2E5ZTVmMTY0YTRiYjcyMzI0MzE5ZDIxYjJhODQwNmJlN2VjMmUzZjY2ZjQzYTQ5MDg5NzQ",
    price: "449.00",
    mrp: "1,095.00",
    discount: "59%(₹646)",
    id: 10,
    linked: "personalcare",
  },
  {
    name: "Reconnect Iron Man Beard Trimmer with Easy to Clean Detachable Head, Laser Guided for Sharp Precision, 2 Precision Combs 0.5-20mm, 90mins Usage Time, Battery Charging Indicator, 2 Years Warranty",
    img: "https://www.reliancedigital.in/medias/Reconnect-DBT301-Shaver-and-Trimmers-491604302-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NDc5NHxpbWFnZS9qcGVnfGltYWdlcy9oMDAvaDRkLzk0MjUzOTA0MDM2MTQuanBnfDUzM2Q4NTY0YmFlM2RiMDVlZmZhMDNjZTY3YjM4MzA5NWZkYzM4MmQ5NmQzZDZhOGY1ZGQyNTUzZTJhY2M3Nzc",
    price: "349.00",
    mrp: "2,799.00",
    discount: "88%(₹2,450)",
    id: 11,
    linked: "personalcare",
  },
  {
    name: "Reconnect Black Panther 7-in-1 Multi Grooming Kit with 45-degree Precision Blade, Washable Heads, 1hr Usage Time, Battery Charging Indicator, 2 Years Warranty",
    img: "https://www.reliancedigital.in/medias/Reconnect-DMGK101-Shaver-and-Trimmers-491604304-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MDQzM3xpbWFnZS9qcGVnfGltYWdlcy9oZDAvaGVmLzk0MjUzOTAwNzU5MzQuanBnfDMwZjhlNzFjOWY4YTRkYzhkN2MzMzczNzcxZWE3NzFjMjIwZTY0YTBjODkxZDdlMWRlNTZkOWU2MmM5ZGM5MDY",
    price: "349.00",
    mrp: "3,299.00",
    discount: "89%(₹2,950)",
    id: 12,
    linked: "personalcare",
  },
];

export const ItemDetails11 = [
  {
    name: "MI 32 HD Ready Smart LED TV, 4A Horizon, ELA4546IN",
    img: "https://www.reliancedigital.in/medias/Mi-4A-Horizon-Edition-Television-492166368-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjcxM3xpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDk4Lzk3OTA4NzQ3MTQxNDIuanBnfDhjNDk4M2M1MTM1YTViZmFkMTY1NGM1ZmU4ZjFiODNiOGQ2NTMyYzUxYjg0NWJmYWE4MjIzODg4YmEzMWM5ZDY",
    price: "16,499.00",
    mrp: "19,999.00",
    discount: "18%(₹3,500)",
    id: 1,
    linked: "televisions",
  },
  {
    name: "IFFALCON 139.7 cm (55 Inch) Ultra HD (4K) Smart LED TV, 55U71",
    img: "https://www.reliancedigital.in/medias/Iffalcon-55U71-Television-493179244-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjUyMXxpbWFnZS9qcGVnfGltYWdlcy9oZDMvaGM0Lzk4OTU3NzUwMTA4NDYuanBnfDhlMGU4MDEzNjUzZGNmYzM4ZTkzNTA2OGUwNDkyY2Y2ZTZkMzI5NzIyZjQzMzgzYzI1OTU0MTY5MGZjYTk5M2Y",
    price: "25,990.00",
    mrp: "70,990.00",
    discount: "63%(₹45,000)",
    id: 2,
    linked: "televisions",
  },
  {
    name: "Samsung Wondertainment 80 cm (32 Inch) Smart HD Ready TV, UA32T4340BKXXL",
    img: "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDk1NnxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDE3Lzk4NDIyMDUxMzA3ODIuanBnfDljNDA4NjY5ZmYwYjNmMTBlMmYwZGEwODNkMTk5M2ZkMDc5MTgzZTAyY2VmNWYwMjJmYWNlZmEwNzBkNmYyZjI",
    price: "13,490.00",
    mrp: "22,900.00",
    discount: "41%(₹9,410)",
    id: 3,
    linked: "televisions",
  },
  {
    name: "Kodak 139 cm (55 inch) Ultra HD (4K) LED Smart TV, 7XPRO Series 55UHDX7XPRO, Quad Core Processor, Built-In Chromecast",
    img: "https://www.reliancedigital.in/medias/Kodak-55UHDX7XPRO-Television-492166145-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NDEyN3xpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDNmLzk1MTE0Nzk2MDczMjYuanBnfGNkZjZkNTdlYWU4YmQ3YWM0MjU2MWY4OGNlNTBkZTM0YWIzOTQ1NTAwODFkYjkzODJjNGIxNzgwOWI4NzIyZmU",
    price: "24,999.00",
    mrp: "46,999.00",
    discount: "47%(₹22,000)",
    id: 4,
    linked: "televisions",
  },
  {
    name: "Sansui 80 cm (32 Inch) HD Ready Smart TV, Neo Series JSW32CSHD",
    img: "https://www.reliancedigital.in/medias/Sansui-JSW32CSHD-Television-493179126-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzMxMnxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaGRhLzk4OTI2OTQ1NTY3MDIuanBnfDNiNGIzMzY5MzI1NjE2YzA0MTlhMjNmY2JkNGE1MjBhMDFjZWI0ODBlMGRmZjU3NjIwMzI0YTJlNzlmMWI4MTQ",
    price: "8,999.00",
    mrp: "19,990.00",
    discount: "55%(₹10,991)",
    id: 5,
    linked: "televisions",
  },
  {
    name: "Kodak 80 cm (32 inch) HD Ready LED Smart TV, 7XPRO Series 32HDX7XPRO, Quad Core Processor, Built-in Chromecast",
    img: "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Televisions-492166141-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjIzNHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDgwLzk4OTQ2ODczNDI2MjIuanBnfDAxNzdkZTU5YWY0ZjdkMWFhN2NhM2E3ZDY4MjkwZjIzMGNkYjIzYzNkMDkyMTZlNWU3N2ViZTA2YTE4YzcxMzc",
    price: "9,999.00",
    mrp: "18,499.00",
    discount: "46%(₹8,500)",
    id: 6,
    linked: "televisions",
  },
  {
    name: "Hisense 108 cm (43 inch) 2Yr Warranty 4K Ultra HD Smart Certified Android LED TV 43A6GE (Black) with Dolby Vision and ATMOS",
    img: "https://www.reliancedigital.in/medias/HISENSE-43A6GE-Smart-LED-492338735-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjY5OXxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDcwLzk3Nzg4NDI1OTk0NTQuanBnfGFiNzdlZmMxODczMmUyNzdlMDRkZGJjMzEyNTA4YTNhMGVhYjlhYmU0MzYwNDBmNmY4NjBlOGJjNDQwZjEzMjg",
    price: "19,990.00",
    mrp: "44,990.00",
    discount: "56%(₹25,000)",
    id: 7,
    linked: "televisions",
  },
  {
    name: "Hisense Vivid 80 cm(32 inch) HD Ready Smart LED TV, E4G, 32E4G",
    img: "https://www.reliancedigital.in/medias/Hisense-32E4G-Television-492912681-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDM0NXxpbWFnZS9qcGVnfGltYWdlcy9oMTIvaGVlLzk4Mjk4NTgzNDQ5OTAuanBnfDIzYjlkNDkwNjgwYWViZWY0ZjgxZGI5Njk2MGJiYWNmNGU0MmExOGZlNjFhM2E3YTIyNGYxM2FmMzJmZWI5NmU",
    price: "10,990.00",
    mrp: "24,990.00",
    discount: "56%(₹14,000)",
    id: 8,
    linked: "televisions",
  },
];

export const ItemDetails12 = [
  {
    name: "pTron Pulsefit F21 Plus Smart Watch with 1-year warranty, 4.31 cm (1.7 inch) Full Touch Color Display, 10-12 Days Runtime,Up to 20 days Battery Standby Life, Compatible with Android (4.4 plus) & iOS (9.0 plus)",
    img: "https://www.reliancedigital.in/medias/Noise-COLRFIT-CALIBER-GO-Smart-Watch-493178070-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDg2OHxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDQ4Lzk4OTYxMTk0NjgwNjIuanBnfDk5YzRiNTNjYzdhNTIyNWEyODg3MzNkODhjYmI1N2Y4NTJmOTk1N2IwZDVlZjg4YjhmMzQ0YmYyNmEwYzNkNGQ",
    caption: "Slide 1",
    price: "999.00",
    mrp: "3,499.00",
    discount: "71%(₹2,500)",
    linked: "personalcare",
  },
  {
    name: "Hammer Pulse Ace Smart Watch with Bluetooth Calling Multiple Sports Mode, 4.29 cm (1.69 inch) display, 7 Days without Bluetooth Calling, Up to 6 Hours with Bluetooth Calling",
    img: "https://www.reliancedigital.in/medias/Hammer-Pulse-Ace-Pro-Sports-Fitness-Watches-493177732-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjM4NHxpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDlkLzk5MjMxODkyMTExNjYuanBnfDM1NGNjZjNiZDI5MWExODM3ZmMzN2U5YjAyYzBmMDAxOGE5OWM4ODNmYmYxMjc2ZmExODgwYWE3NjM3MDRhZmI",
    caption: "Slide 2",
    price: "10,99.00",
    mrp: "3,990.00",
    discount: "73%(₹2,900)",
    linked: "personalcare",
  },
  {
    name: "Noise ColorFit Caliber Go Smart Watch with 4.29 cm (1.69 inch) HD Display, 40 Sports Modes, 150+ Watch Faces, & IP68 Waterproof (Jet Black)",
    img: "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177969-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDUzNnxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaGIzLzk4OTQ2NzAyMzc3MjYuanBnfDJjMTc3ODdhNzNiMTU2YWU2MDM4ZTRlYTQwYTljMDk1MWRmMjgwMWFkNzI4MmM5NTU2MzA3NjUzNjhkYmZkYWI",
    caption: "Slide 3",
    price: "1,349.00",
    mrp: "3,999.00",
    discount: "66%(₹2,650)",
    linked: "personalcare",
  },
  {
    name: "Fire-Boltt Ninja Smart Watch with Touch to Wake Feature, IP67 Water Resistant (Black)",
    img: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574196-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzkxOHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDQ4Lzk3NTU3Nzg4NzU0MjIuanBnfDE3MDQ0Mjk3NzY5MGUzNWQzZTI5YzJiNTM4MmEzNzY3NzBmZTYxY2ZlZjJiZGQxNDVlYThmZDk4OWM2YTE4ZDE",
    caption: "Slide 4",
    price: "1,399.00",
    mrp: "4,999.00",
    discount: "72%(₹3,600)",
    linked: "personalcare",
  },
  {
    name: "pTron Pulsefit F21 Plus Smart Watch with 1-year warranty, 4.31 cm (1.7 inch) Full Touch Color Display, 10-12 Days Runtime,Up to 20 days Battery Standby Life, Compatible with Android (4.4 plus) & iOS (9.0 plus)",
    img: "https://www.reliancedigital.in/medias/Noise-COLRFIT-CALIBER-GO-Smart-Watch-493178070-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDg2OHxpbWFnZS9qcGVnfGltYWdlcy9oNDUvaDQ4Lzk4OTYxMTk0NjgwNjIuanBnfDk5YzRiNTNjYzdhNTIyNWEyODg3MzNkODhjYmI1N2Y4NTJmOTk1N2IwZDVlZjg4YjhmMzQ0YmYyNmEwYzNkNGQ",
    caption: "Slide 1",
    price: "999.00",
    mrp: "3,499.00",
    discount: "71%(₹2,500)",
    linked: "personalcare",
  },
];

export const ItemDetails13 = [
  {
    name: "Samsung 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC, AR18BYNZAUR (100 percent Copper, Anti-Bacteria Filter, Auto Clean Function, Filter clean indicator, 2022 Launch)",
    img: "https://www.reliancedigital.in/medias/Samsung-AR18BYLZAUR-Split-Air-Conditioner-581026959-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzEzM3xpbWFnZS9qcGVnfGltYWdlcy9oY2UvaDJmLzk4MTMxMjgzODA0NDYuanBnfDZiNDIwMGUzODlmMDAyNjkyNTYyNzA2MTIxN2FiM2M4M2ViZTk3ZTJlOThhNTFlMzJjNDQ0ZmYwMmQwMDkwNGE",
    price: "36,990.00",
    mrp: "65,990.00",
    discount: "44%(₹29,000)",
    id: 1,
    linked: "homeappliances",
  },
  {
    name: "Hisense 1.5 Ton 4 Star, 4 in 1 Convertible Intelligent Inverter Split AC, AS-18TC4RAM0 (100 Percent Copper, PM 2.5 Filter + 3 in 1 Vitacarb Filter, Eco Friendly R-32 gas)",
    img: "https://www.reliancedigital.in/medias/HISENSE-AS-18TC4RAM0-Air-Conditioners-581026857-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzQ1MnxpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDU1Lzk4MTAwNjU0NTcxODIuanBnfDM0MGU2NWE2YjZlNmI2YWZlYWUwMmRlYWNjYjU5ZThhMmYzNGIxOTFhYTNmN2E0ZTY2ZWQ4ODY5MTAxNGI2MWI",
    price: "29,990.00",
    mrp: "47,990.00",
    discount: "38%(₹18,000)",
    id: 2,
    linked: "homeappliances",
  },
  {
    name: "LG 1.5 Ton 5 Star AI 6 in 1 Super Convertible Smart WiFi Inverter Split AC, PS-Q19GWZF (Copper Condenser, 4 Way Swing, Anti-Allergy Filter, Ocean Black Fins, 2022 Launch)",
    img: "https://www.reliancedigital.in/medias/LG-PS-Q19GWZF-SPLITAIRCONS-581026758-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTU4MXxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaGU0Lzk3NjM1NDEyMjE0MDYuanBnfDgyOGVmZGUxMGU5NzA5NTAwOTQ2MzQ3Yjc2NDJmNWNhNTk1MzQ4MzA0ODBjMDZkYTM4ZGY3ZmE2ZjM4OWMxZmY",
    price: "47,990.00",
    mrp: "77,990.00",
    discount: "38%(₹30,000)",
    id: 3,
    linked: "homeappliances",
  },
  {
    name: "Samsung 1.5 Ton 4 Star Hot & Cold Series AR18BX4ZAWK Inverter Split AC",
    img: "https://www.reliancedigital.in/medias/Samsung-AR18BX4ZAWK-Split-Air-Conditioner-581026971-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjg5MHxpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDViLzk4MTMxNTQzMzI3MDIuanBnfDg5NzAyNGRkNWRhZmQyMTdkYWQxNmY4YTRjOTlmNjNmYTZkZTM2MmIxZThmN2RkZTRmZWQ4ZDJmZGZkN2Y4ZGI",
    price: "39,990.00",
    mrp: "53,890.00",
    discount: "26%(₹13,900)",
    id: 4,
    linked: "homeappliances",
  },
  {
    name: "LLOYD 1.5 Ton 5 Star Inverter Split AC, GLS18I5FWGEL (100 Percent Copper,Rapid Cooling,Golden fin condenser,Valve protection cover,2022 Launched)",
    img: "https://www.reliancedigital.in/medias/LLOYD-GLS18I5FWGEL-Split-Air-Conditioner-581026910-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjIzOXxpbWFnZS9qcGVnfGltYWdlcy9oMmQvaDM0Lzk4MjQzNjMxMTg2MjIuanBnfDExMzI3Nzc4NjlhZmE5OGEyMGZhYWFhZGM2NjQ1ZjNiMTBiYjRjNmI1Y2IwNzA1NDZjY2Q5ZDg4MTNjNjYyZTc",
    price: "41,990.00",
    mrp: "60,990.00",
    discount: "31%(₹19,000)",
    id: 5,
    linked: "homeappliances",
  },
  {
    name: "Haier 1.5 Ton 3 Star Triple Inverter+ Split AC, HSU18C-NBS3B (100 percent Copper, 50 Feet Airflow, Hyper PCB, Cools even at 60‚C Ambient Temperature,Self Clean technology)",
    img: "https://www.reliancedigital.in/medias/Haier-HSU18C-NBS3B-Split-Air-Conditioner-581026955-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjQ4MnxpbWFnZS9qcGVnfGltYWdlcy9oY2QvaDcwLzk4MTY5ODgyODcwMDYuanBnfGIyMDUwY2ZjMGVmYzY2MmY2YzI2ZDJjYjllMmI3NTYzNzE5MzBhYTI2MWZlZjA2NTdhZjVmNTc4OTdlODAwZmE",
    price: "35,990.00",
    mrp: "65,490.00",
    discount: "45%(₹29,500)",
    id: 6,
    linked: "homeappliances",
  },
  {
    name: "Samsung 1.5 Ton 3 Star AR18BY3YATA Inverter, Split AC, HD Filter, 2 Way Swing, Floral Design, 5 in 1 Convertible (2022 Launch)",
    img: "https://www.reliancedigital.in/medias/SAMSUNG-AR18BY3YATA-Split-Air-conditioner-581026749-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODU0MXxpbWFnZS9qcGVnfGltYWdlcy9oZTAvaDNhLzk3ODUxMTQ4NTM0MDYuanBnfGU3NDE2YzcxNTkzMDRiYTA2OGQ4YTMxZWQyNjdlMjJkYjk2NjRjNmZjMDM2YjMyNmQ5YTEzOTZlZTNjNmU0ZTg",
    price: "38,490.00",
    mrp: "58,990.00",
    discount: "35%(₹20,500)",
    id: 7,
    linked: "homeappliances",
  },
  {
    name: "HAIER 1.5 Ton 3 Star Split AC, TurboCool HSU18T-TQS3B (Copper Condenser, Micro Dust Filter, Cools even at 54C, R32 Eco friendly Gas, 2022 Launched)",
    img: "https://www.reliancedigital.in/medias/HAIER-HSU18T-TQS3B-Split-ACs-581027005-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTI3fGltYWdlL2pwZWd8aW1hZ2VzL2g5Ny9oNzMvOTgzNTQ3MDkxMzU2Ni5qcGd8M2QzMjY5NjA4NTFiOTYwMjkxZWI2Njk3YjkzNzkzOTcxNmIzYTMxYWYzODEzZGJjN2QxOTIwN2M3OGFjNjE3OQ",
    price: "32,990.00",
    mrp: "60,890.00",
    discount: "46%(₹27,900)",
    id: 8,
    linked: "homeappliances",
  },
  {
    name: "Kelvinator 1.5 Ton 3 Star K600+ Series KAS-X18320P Inverter Split AC with Single Rotary Compressor",
    img: "https://www.reliancedigital.in/medias/Kelvinator-KAS-X18320P-SPLIT-AIRCONS-581026690-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTc4OXxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaDhmLzk4MDg4Mjg0NjUxODIuanBnfGI4NWU0ZDVmNTlkZDdlYmRmYzA0YjQ0MTZlNDZhNDMwMTJhNjk1M2FkMzY3ZTc1ZjIzYTlkNmNiMTk4MWVhNzk",
    price: "31,990.00",
    mrp: "50,490.00",
    discount: "37%(₹18,500)",
    id: 9,
    linked: "homeappliances",
  },
  {
    name: "Samsung 1.5 Ton 5 Star AR18BY5YATZ Inverter Split AC, Wi-Fi, Tri Care Filter, 4 way Swing, Floral Design, 5 in 1 Convertible (2022 Launch)",
    img: "https://www.reliancedigital.in/medias/SAMSUNG-AR18BY5YATZ-Split-Air-conditioner-581026781-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTcxNXxpbWFnZS9qcGVnfGltYWdlcy9oNmMvaDk2Lzk3ODUwOTIzNzQ1NTguanBnfDE3MWI1YjRlMjgwZDY1ZTAyN2E5YzJlMjJkOWExNDQ2Y2IyYWU5MGY1MjVhZWQ0NzZhYzEyNDAyZTkyMzhhYjI",
    price: "47,990.00",
    mrp: "70,990.00",
    discount: "32%(₹23,000)",
    id: 10,
    linked: "homeappliances",
  },
  {
    name: "Panasonic 1.5 Ton 4 Star WiFi Smart Inverter Split AC, WU18YKYXF (Copper Condenser,Nanoe-G, AQI (PM2.5) Sensor,Jetstream Air flow, Anti Corrosive Shield Blu Plus)",
    img: "https://www.reliancedigital.in/medias/Panasonic-WU18YKYXF-SPLITAIRCONS-581026810-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzk3NHxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaDVjLzk3ODEzNjA5MTg1NTguanBnfDAzODNjZWM4NzFiZGQ5NDc0MWRiZjRjM2U5N2UwZjE1NjRhNDE1YzA1OTk0YzQ3N2JjZjRiMzZmMTRiMTFjMzE",
    price: "44,990.00",
    mrp: "61,900.00",
    discount: "27%(₹16,910)",
    id: 11,
    linked: "homeappliances",
  },
];

export const ItemDetails14 = [
  {
    name: "HP 14s-dr3001TU Laptop (Intel Pentium Silver N6000/8 GB/256 GB SSD/UHD Graphics/Windows 11 Home/MSO/HD), 35.6 cm (14 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-681Y7PA-ACJ-Laptop-493178767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjAxOXxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDU2Lzk5MjM5NDA2MTQxNzQuanBnfGEzZDE5OGQxNmY4M2FkMGUxODU2OTg4MDdkOTFkMmZlYmJmZjdiMDAzZTVhYzBiZmVmNThiMmYwYzhmMTkyNGI",
    price: "32,999.00",
    mrp: "37,000.00",
    discount: "11%(₹4,001)",
    id: 1,
    linked: "accessories",
  },
  {
    name: "HP 15s-er1501AU Standard Laptop (AMD Ryzen 3 3250U/8 GB/256 GB SSD/Radeon Graphics/Windows 11 Home/MSO/HD), 39.62 cm (15.6 Inch)",
    img: "https://www.reliancedigital.in/medias/HP-ER1501AU-Laptop-493178397-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDIyLzk5MDE1NTA5Mjc5MDIuanBnfDlkOGRhZGEyOWMyZWQzNTI2YTc4ZTY5ODJhYjBlNTRlZDg5YmQ5YTczM2Q2MTg0ZGRkYTE3Y2IyMmI1NTQzMDY",
    price: "28,990.00",
    mrp: "41,204.00",
    discount: "30%(₹12,214)",
    id: 2,
    linked: "accessories",
  },
  {
    name: "Lenovo L2IN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4 /8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/Full HD), 39.62 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Lenovo-L2IN-Laptops-492574725-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGQyLzk3NDczMjk5NzQzMDIuanBnfDMxMDY2NDQ1MjE3ZDFjOTZiNjRmYTE0NTlhNmYzMWZmNGNjNjY3NzhkZjE2MTdlZTZmMzE2Yjc3NDBmNjYwMGU",
    price: "35,499.00",
    mrp: "59,390.00",
    discount: "40%(₹23,891)",
    id: 3,
    linked: "accessories",
  },
  {
    name: "HP 15s-fq2670TU Laptop (11th Gen Intel Core i3-1115G4/8 GB RAM/256 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-6N043PA-ACJ-Laptop-493177597-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTkyOHxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDZhLzk4ODIyODk1MzcwNTQuanBnfDAzZjY0ZjBmY2RmNWY0YzBiMWU5MGQ1YTkxYWIxMmVhZGJmYTdkNDFkYWRiMGMwNzNhOTlhNzFmM2EzNWQxZGE",
    price: "41,400.00",
    mrp: "45,409.00",
    discount: "9%(₹4,009)",
    id: 4,
    linked: "accessories",
  },
  {
    name: "Lenovo LJIN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4/8GB/512GB SSD/Intel UHD Graphics/Windows 11/MSO/Full HD), 39.62 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Lenovo-LJIN-Laptops-492574616-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2ODcxN3xpbWFnZS9qcGVnfGltYWdlcy9oYjAvaGJiLzk3NDE1NjMzOTYxMjYuanBnfDk3NmMzMWI4MDZjYzU0YzJmZGUxNTJiYzI0MGRjOTQ5Nzg5ZjI1YmM3NzNmNmE3NjQ3ZTQ0NzlhMzI2ZDNlYzU",
    price: "40,499.00",
    mrp: "65,690.00",
    discount: "38%(₹25,191)",
    id: 5,
    linked: "accessories",
  },
  {
    name: "Lenovo IdeaPad 3 Thin and Light Laptop (11th Gen Intel Core i3-1115G4/8 GB/512 GB SSD/Windows 11 Home/MSO/FHD), 39.62 cm (15.6 Inch)",
    img: "https://www.reliancedigital.in/medias/Lenovo-82H802L3IN-Laptop-493177740-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTg4M3xpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDk4Lzk4OTQ2NDQyNTI3MDIuanBnfDUwOTkxZTdiMWYxZjVmY2M3YWI3NDRhZDVjYjViYzMwNzZjZDE4OTk4NGM2YjM2YjkxZmE5OGU5NTgxYzI3NDg",
    price: "38,990.00",
    mrp: "67,090.00",
    discount: "42%(₹28,100)",
    id: 6,
    linked: "accessories",
  },
  {
    name: "HP 15s-fq2672TU Laptop (11th Gen Intel Core i3-1115G4/8GB RAM/512GB SSD/UHD Graphics/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 Inch), Natural Silver",
    img: "https://www.reliancedigital.in/medias/HP-6N045PA-ACJ-Laptop-492850808-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDMwM3xpbWFnZS9qcGVnfGltYWdlcy9oMzEvaGZjLzk4NjQyNzcyMjk1OTguanBnfGE5ZjgwMzdjYzY2MTAyMzhiZWRmNzM3OWI0NTNiMWI2MjcyNTRjMjIwNmY5ZmVlMmQwMDE3MjEyNzVmMDRmMTg",
    price: "43,749.00",
    mrp: "49,977.00",
    discount: "12%(₹6,228)",
    id: 7,
    linked: "accessories",
  },
  {
    name: "HP 15s-fq2671TU Laptop (11th Gen Intel Core i3-1115G4/8 GB RAM/512 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
    img: "https://www.reliancedigital.in/medias/Hp-6N044PA-ACJ-Laptop-493177596-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTYwMHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDMwLzk4ODIyOTA4NDc3NzQuanBnfDgzNzE4ZTExMDNkZmY1YmM2MzQyMWUwY2Y2NGRjMTA1MDJjNDVkNjQ5MTk0ZWIyMTA2NWQwY2I2MWNjOGQzZWI",
    price: "39,999.00",
    mrp: "47,833.00",
    discount: "16%(₹7,834)",
    id: 8,
    linked: "accessories",
  },
];

export const ItemDetails15 = [
  {
    name: "Apple iPhone 14 Plus 512 GB, Midnight",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177749-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzA3N3xpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDFlLzk4OTA0ODg0ODM4NzAuanBnfDkyMjVmOGIzMjIxNjc1MWQwYjM3MDI0M2I1OTEzYTcyMzYwNmZhMTdiYTgwYjVjYjQyNjQ3ODgzZjQ1NzQyZTM",
    caption: "Slide 1",
    price: "1,09,900.00",
    mrp: "1,10,999.00",
    discount: "1%(₹1,099)",
    linked: "mobilesandtablets",
  },
  {
    name: "Apple iPhone 14 Plus 128 GB, Starlight",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177765-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDAyMHxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDAyLzk4OTA1MzYwNjMwMDYuanBnfDQzYjhhMjgyYWJlYWJkNTBiNDM4NzI5YjA4NTU4NzY3Y2Y2ZTJjYWQxNDQ4NDE0ZWViYzJmZTdjZjYwNTQ5ZGU",
    caption: "Slide 2",
    price: "89,990.00",
    mrp: "90,889.00",
    discount: "1%(₹8,99)",
    linked: "mobilesandtablets",
  },
  {
    name: "Apple iPhone 14 Plus 128 GB, Blue",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177756-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjYwNXxpbWFnZS9qcGVnfGltYWdlcy9oYTcvaDgwLzk4OTA1MDE1OTEwNzAuanBnfGExOTdiMzQwNWFjYzY5NWFhNGY3MjVkYmFkZWY1YjdmNjFiNjU0Yzg4NWMzNDRiYmI2NmYzYTM2N2E0ZTY1MzU",
    caption: "Slide 3",
    price: "89,990.00",
    mrp: "90,889.00",
    discount: "1%(₹8,99)",
    linked: "mobilesandtablets",
  },
  {
    name: "Apple iPhone 14 Plus 128 GB, Blue",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaGFmLzk4OTA1NDE5NjEyNDYuanBnfGEwNTZiM2Y3MWY1YmFmOTU3MDI2MjUxM2E0NTI0NTIwMzFhMTE5Y2NjNzQ2MWY1MWI5ZjVmN2JjMmRjZjY3YTU",
    caption: "Slide 4",
    price: "89,990.00",
    mrp: "90,889.00",
    discount: "1%(₹8,99)",
    linked: "mobilesandtablets",
  },
  {
    name: "Apple iPhone 14 Plus 512 GB, Midnight",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177749-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzA3N3xpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDFlLzk4OTA0ODg0ODM4NzAuanBnfDkyMjVmOGIzMjIxNjc1MWQwYjM3MDI0M2I1OTEzYTcyMzYwNmZhMTdiYTgwYjVjYjQyNjQ3ODgzZjQ1NzQyZTM",
    caption: "Slide 1",
    price: "1,09,900.00",
    mrp: "1,10,999.00",
    discount: "1%(₹1,099)",
    linked: "mobilesandtablets",
  },
];

export const ItemDetails16 = [
  {
    name: "boAt Rockerz 255R Pro in Ear Bluetooth Neckband with Upto 10 Hours Playback, ASAP Charge, IPX5, boAt Signature Sound & Integrated Controls(Active Black)",
    img: "https://www.reliancedigital.in/medias/boAt-Rockerz-255-Pro-Active-Bluetooth-Earphones-492912673-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzcwNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaGE3Lzk4MzIxMDEwODUyMTQuanBnfDJkNjAyYzhmNjBmMTIzYTRmZGNjMmJhZWEyY2ZiYzNkYmY3MjM1NjUwODIyOTNjNzg1YzE5MzFkNjc0ZWI2NDg",
    price: "1,099.00",
    mrp: "3,499.00",
    discount: "69%(₹2,400)",
    id: 1,
    linked: "headphones",
  },
  {
    name: "boAt Airdopes 131 RTL Twin Wireless Earbuds with IWP Technology, Bluetooth V5.0, Immersive Audio, Up to 15H Total Playback, Instant Voice Assistant and Type-C Charging",
    img: "https://www.reliancedigital.in/medias/boAt-Airdopes-131-RTL-Earbuds-491973401-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODM2fGltYWdlL2pwZWd8aW1hZ2VzL2g2OC9oYzgvOTgzMjI2MTg3Nzc5MC5qcGd8ZmIzMWZlZDQxNGRiYmQ1YWVjYTNmNDM3MTc4MGNlYmNlYjg1NTZmNDA0NzAzOTY5NmQyNjYyNmJhOWIwZGMxYg",
    price: "1,099.00",
    mrp: "2,990.00",
    discount: "63%(₹1,891)",
    id: 2,
    linked: "headphones",
  },
  {
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    img: "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: "18,500.00",
    id: 3,
    linked: "headphones",
  },
  {
    name: "boAt Airdopes 148 True Wireless Airdopes, Active Black",
    img: "https://www.reliancedigital.in/medias/boAt-Airdopes148-TrueWireless-492579512-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODQxNHxpbWFnZS9qcGVnfGltYWdlcy9oODMvaDIwLzk4MTY0MDE1MTA0MzAuanBnfDA2YzYxZGIxZmViZGE4MmY4ZTI0MTI0MmNhMDY1YzYzYTI1NjQzZjY4YWMyY2ZkNjNhYWYzZTUwNTE0NmE1Yzk",
    price: "1,299.00",
    mrp: "4,490.00",
    discount: "71%(₹3,191)",
    id: 4,
    linked: "headphones",
  },
  {
    name: "OnePlus Nord Buds Wireless Earbuds with 4 Mics and AI Noise Reduction, Black Slate",
    img: "https://www.reliancedigital.in/medias/OnePlus-NORD-BUDS-True-Wireless-492912670-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODg4OHxpbWFnZS9qcGVnfGltYWdlcy9oOWMvaGIyLzk4MzQ2NzI4MTYxNTguanBnfGM1NTZmODdmODNkMTQ2ZDUyNjU4MGQzMzY1YzM2OTBiNzYyZjdhYzQxY2UxZWQwOGMzMzBkNTdlZmNlOGNjODg",
    price: "2,499.00",
    mrp: "2,999.00",
    discount: "17%(₹500)",
    id: 5,
    linked: "headphones",
  },
  {
    name: "boAt Airdopes 131 RTL Twin Wireless Earbuds with IWP Technology, Bluetooth V5.0, Immersive Audio, Up to 15H Total Playback, Instant Voice Assistant and Type-C Charging, Black",
    img: "https://www.reliancedigital.in/medias/boAt-Airdopes-131-Airdopes-492912674-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODcwfGltYWdlL2pwZWd8aW1hZ2VzL2hmYi9oZmMvOTkwNDQ3MzE3ODE0Mi5qcGd8YWQ4ZTg0NDAwMjg3M2Q2NDQwMzRlNTVjNzA3NDU5MDkyZTE5NzY1MzZmNGY2ODY5OWZiYzVkOWEzOTQ2OWU3YQ",
    price: "1,099.00",
    mrp: "2,990.00",
    discount: "63%(₹1,891)",
    id: 6,
    linked: "headphones",
  },
  {
    name: "OnePlus Bullets Z2 Wireless Neckband Earphone with AI Noise Cancellation, Magico Black",
    img: "https://www.reliancedigital.in/medias/OnePlus-Bullets-Z2-Wireless-Earphone-492796790-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MTk1fGltYWdlL2pwZWd8aW1hZ2VzL2hjNi9oMDkvOTgzODE4MDA0MDczNC5qcGd8NWRkMjEyZjQxMTBkYzliZmY1ZTA0NTIwMmQ3MWMxZjgyMDE3ZjdiMjVmMmFjNGY1OTg4NWNjNDU0NTY0MzdlOA",
    price: "1,699.00",
    mrp: "2,290.00",
    discount: "26%(₹591)",
    id: 7,
    linked: "headphones",
  },
  {
    name: "pTron InTunes Classic Bluetooth 5.2 Wireless Neckband Earphones with 24Hrs Playback Time, Made in India, Hi-Fi Stereo Audio, Deep Bass, Type-C Fast Charging, Voice Assistant, IPX4 & In-line Music & Call Controls (Black)",
    img: "https://www.reliancedigital.in/medias/pTron-InTunes-Classic-Bluetoth-Earphones-493285627-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oNzQvaGYxLzk4Njc1ODE2NTMwMjIuanBnfGNlMjliN2RhOGFiMmE1ZThjZDhhZjhhOTZlZWYxYTgzMjcyNzQyZGViZTE2YzdkMDkxZGI3YTQyMjQwYTIzM2I",
    price: "499.00",
    mrp: "1,899.00",
    discount: "74%(₹1,400)",
    id: 8,
    linked: "headphones",
  },
  {
    name: "pTron Basspods P181 Bluetooth 5.1 Wireless Headphones, 32Hrs Total Playtime, Immersive Stereo Sound, Stereo Calls, Snug-fit TWS Earbuds, Touch Controls, Voice Assistance, Type-C Fast Charging & IPX4 (Black)",
    img: "https://www.reliancedigital.in/medias/pTron-Basspods-P181-Bluetooth-Earphones-492796965-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjMyM3xpbWFnZS9qcGVnfGltYWdlcy9oYWIvaDlmLzk4MjU4OTQ4MjYwMTQuanBnfDFiNDA1MjIwOGNkMjM4YmVmYThiMjY2OWEyMzg3OWRmNDQ3MDBhYzMwYjcxOTMyZWEwNmRhMDQyMWMyMDZmZTk",
    price: "649.00",
    mrp: "2,999.00",
    discount: "78%(₹2,350)",
    id: 9,
    linked: "headphones",
  },
  {
    name: "Apple MLWK3HN/A Airpods Pro with Magsafe Charging Case, White",
    img: "https://www.reliancedigital.in/medias/Apple-Airpods-pro-492571631-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTAyNnxpbWFnZS9qcGVnfGltYWdlcy9oZjgvaDg3Lzk4MjU2MDg2NjMwNzAuanBnfGRlN2MxYjQxYWMyMmU1MzFlY2E0NzkxNGQ4ZjNmNTJhZGExZjIxODQ4MTZkMjA5ZmE2YWU1N2FmNmJhOWJkYjM",
    price: "20,990.00",
    mrp: "26,300.00",
    discount: "20%(₹5,310)",
    id: 10,
    linked: "headphones",
  },
];

export const ItemDetails17 = [
  {
    name: "Nikon D3500 DSLR Camera with AF-P 18-55 mm + AF-P 70-300 mm VRn GFWKKWGFNNW Kit",
    img: "https://www.reliancedigital.in/medias/Nikon-D3500-DSLR-Camera-491431009-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MjUzfGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oMDEvOTA3MDM1NjI2NzAzOC5qcGd8NGFmZDk5NDM1MjA0NDFkY2Q0M2FmYzY0ZTlmYmUxZTU1MjJiZWE4ZDNkNTI5Mzg4M2NkOWNjZjdhY2MwZDFkZA",
    price: "48,990.00",
    mrp: "53,950.00",
    discount: "9%(₹4,960)",
    id: 1,
    linked: "cameras",
  },
  {
    name: "Nikon COOLPIX P1000 Prosumer Camera 16 MP, Black Over THINGKbbsdg",
    img: "https://www.reliancedigital.in/medias/Nikon-P1000-Prosumer-Camera-491430998-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTE5OHxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaDVkLzkwNTM4NDQ1MzczNzQuanBnfGE0ZThhNWI3YzE1ZGEzNzcwNjlkZWQzNjYxMmZhMjEwMjhlYjkzYWU0Njg4YjhmYzU4NGI3N2ZkODRiNGQwMjA",
    price: "64,990.00",
    mrp: "69,950.00",
    discount: "7%(₹4,960)",
    id: 2,
    linked: "cameras",
  },
  {
    name: "Nikon Z 50 mm Prime LensProsumer Camera 16 MP, Black Over THINGKbbsdg",
    img: "https://www.reliancedigital.in/medias/Nikon-Z7-Camera-Lenses-491431045-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTg0M3xpbWFnZS9qcGVnfGltYWdlcy9oY2YvaGEyLzkwNjk4NjgyODU5ODIuanBnfGM0ZGQ3OGZmZTE4NDdjODI0NTYyN2Q3MzNmMTc2ZDI3MGYzMDllYzIwZGUwMjA2YzFjNjU5ODY1OWY3NDRiMGU",
    price: "47,990.00",
    mrp: "50,950.00",
    discount: "6%(₹2,960)",
    id: 3,
    linked: "cameras",
  },
  {
    name: "Nikon Z 35 mm Prime Lens Prosumer Camera 16 MP, Black Over THINGKbbsdg",
    img: "https://www.reliancedigital.in/medias/Nikon-Z7-Camera-Lenses-491431044-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTc1OHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDc2LzkwNjk4NzAyNTIwNjIuanBnfDNjOGI2YzNiM2JkMTIyNmU4MDIxZTc2MzAyNzQ1NmFjYWFmMjhkMTlkMmFiNDQ1MjBiZGJlNzhhN2I4OWZjYTA",
    price: "62,990.00",
    mrp: "66,950.00",
    discount: "6%(₹3,960)",
    id: 4,
    linked: "cameras",
  },
  {
    name: "Nikon Z7 Mirrorless Camera with Mount Adapter",
    img: "https://www.reliancedigital.in/medias/Nikon-Z7-DSLR-Cameras-491431042-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTgyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDA4LzkwNzIxMDUwMjk2NjIuanBnfGY2M2NlOWEyODdmYTU4ZjM2N2Q1YWJhYzgyZWM2NGJlNWU1MjJjMjU3ZDE0NmVhZmJhZWM1ZDkyNTY3YmIxYjQ",
    price: "2,81,950.00",
    mrp: "2,96,049.00",
    discount: "5%(₹14,099)",
    id: 5,
    linked: "cameras",
  },
  {
    name: "Nikon Z7 Mount Adapter for Nikon Mirrorless Cameras",
    img: "https://www.reliancedigital.in/medias/Nikon-Z7-Camera-Lenses-491431046-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjI5MXxpbWFnZS9qcGVnfGltYWdlcy9oZjAvaDYyLzkwODI4OTU2MzAzNjYuanBnfGQwNzhiMzg1MzU2NTU5MTkxMzgzODhiYjRmMzRmZmE1NmFiZDJhNDU5NjMyN2ZlMTdlN2ViM2E0NGQwMjZmOTM",
    price: "19,950.00",
    mrp: "20,948.00",
    discount: "5%(₹998)",
    id: 6,
    linked: "cameras",
  },
  {
    name: "Nikon JAA830DA 70-200 mm Camera Lens BEATYFULL Prosumer Camera 16 MP, Black",
    img: "https://www.reliancedigital.in/medias/Nikon-LENS-70-200mm-f2.8E-FL-ED-VR-491336345-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDEwN3xpbWFnZS9qcGVnfGltYWdlcy9oYzUvaDAwLzkwNjA1MzE5OTQ2NTQuanBnfGZkMmYzNTM0N2Q2NmNmZGIzNjI3NDliZmE3YmU2MDMzZGI1MTc4Y2MxYjQ1NjFkNjBlODY3YmUzM2YwYmMyNzQ",
    price: "1,62,990.00",
    mrp: "1,69,950.00",
    discount: "4%(₹6,960)",
    id: 7,
    linked: "cameras",
  },
  {
    name: "Nikon Z7 Mirrorless Camera with 24-70 mm Lens Kit and Mount Adapter",
    img: "https://www.reliancedigital.in/medias/Nikon-Z7-DSLR-Cameras-491431043-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDQzN3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDlhLzkwNzIxMDMzOTEyNjIuanBnfDcxNDg4MjYwOTdmOTAyZGYwMTQwNGFlY2RjMmY5NjVmZjVmZDExOWNkMjJlMjMzN2Q1ZTBiMDJiMGVjNjRiZTI",
    price: "2,59,990.00",
    mrp: "2,82,950.00",
    discount: "8%(₹22,960)",
    id: 8,
    linked: "cameras",
  },
  {
    name: "Nikon Z7 Mirrorless Camera with 24-70 mm Lens Kit",
    img: "https://www.reliancedigital.in/medias/Nikon-Z7-DSLR-Cameras-491431041-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDUxMnxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDYwLzkwNzIxMDY5OTU3NDIuanBnfDUxMzY4NzI5NGY3MTc4NzEzNjg2NDMwYmFjZTA3MDBkNjA2MGQxNjEwYmE4MzAyYTE4MzQ2ZTZjYzhhYzQwZTc",
    price: "2,52,499.00",
    mrp: "2,71,450.00",
    discount: "7%(₹18,951)",
    id: 9,
    linked: "cameras",
  },
  {
    name: "GoPro Hero 7 Action Camera with 12MP Photos + 4K60 Video and Rugged, Waterproof Design, Black",
    img: "https://www.reliancedigital.in/medias/Gopro-Action-Camera-Hero7-Black-491430990-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTQxNnxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDgwLzkwMzI3ODg2NzI1NDIuanBnfGY5NzE1N2FiOGZmZjVlY2VmNDI5N2VlYjk3OTM2ODEwMjgxNjg5Y2E5ZDM2NmViOGU2NGIxYmMxZDY2ZTQ0NWY",
    price: "29,999.00",
    mrp: "30,500.00",
    discount: "2%(₹501)",
    id: 10,
    linked: "cameras",
  },
  {
    name: "Olympus Mirrorless OM-D E-M1X Camera Body, Black",
    img: "https://www.reliancedigital.in/medias/Olympus-EM1XINBLK-CAMERA-492571618-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDUxNXxpbWFnZS9qcGVnfGltYWdlcy9oMTIvaDRiLzk3Mjc4MjY3ODgzODIuanBnfDViMGQ3NjMzZGRmMzFlZjljNmRhN2YwYzliZTExNmU1ZTgxNzMwM2RkZTkyN2Q4NDM4MjA3Mzk2MWM4MjNlNTY",
    price: "1,34,990.00",
    id: 11,
    linked: "cameras",
  },
  {
    name: "Insta 360 One R 2.54 cm (1 Inch) Edition Action Camera with Night Shot, Voice Control",
    img: "https://www.reliancedigital.in/medias/Insta-360-One-R-1-Inch-Edition-Action-Cameras-491934729-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTIyMXxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDhkLzk3NDIyMzM2OTgzMzQuanBnfDNhOWI3MTI3NGJjZTE1YmNjNDRjYjg3YTgyZTQzOGVhNjk0YzVmNGIyODgzYzNhY2FkOTEzYTg3NGY0ZmJkZmY",
    price: "45,500.00",
    mrp: "54,990.00",
    discount: "17%(₹9,490)",
    id: 12,
    linked: "cameras",
  },
];

export const ItemDetails18 = [
  {
    img: "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
    caption: "Slide 1",
    categories: "Smartphone",
    linked: "personalcare",
  },
  {
    img: "https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
    caption: "Slide 2",
    categories: "Washing Machines",
    linked: "homeappliances",
  },
  {
    img: "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
    caption: "Slide 3",
    categories: "Laptops",
    linked: "computers",
  },
  {
    img: "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
    caption: "Slide 4",
    categories: "Televisions",
    linked: "televisions",
  },
  {
    img: "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
    caption: "Slide 5",
    categories: "Smart Wearables",
    linked: "personalcare",
  },
  {
    img: "https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
    caption: "Slide 5",
    categories: "Speakers & Headsets",
    linked: "homeappliances",
  },
];
