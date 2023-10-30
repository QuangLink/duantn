import axios from "axios";

const apiUrlBase = "https://duantn-backend.onrender.com/category/";

const categoryUrls = {
  sale: apiUrlBase + "sale",
  applephone: apiUrlBase + "apple",
  appletablet: apiUrlBase + "apple",
  samsung: apiUrlBase + "samsung",
  xiaomi: apiUrlBase + "xiaomi",
  hp: apiUrlBase + "hp",
  asus: apiUrlBase + "asus",
  lenovo: apiUrlBase + "lenovo",
  acer: apiUrlBase + "acer",
};

const fetchDataForCategory = async (category) => {
  try {
    const response = await axios.get(categoryUrls[category]);
    return response.data.map((product) => ({
      name: product.prodName,
      img: product.prodImg,
      price: product.prodPrice,
      id: product.prodID,
      sale: product.prodSale,
      original: product.prodPriceSale,
    }));
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    return [];
  }
};

export let PrSale = [];
export let PrApplePhone = [];
export let PrAppleTablet = [];
export let PrSamsung = [];
export let PrXiaomi = [];
export let PrHp = [];
export let PrAsus = [];
export let PrLenovo = [];
export let PrAcer = [];

const fetchDataForAllCategories = async () => {
  PrSale = await fetchDataForCategory("sale");
  PrApplePhone = await fetchDataForCategory("applephone");
  PrAppleTablet = await fetchDataForCategory("appletablet");
  PrSamsung = await fetchDataForCategory("samsung");
  PrXiaomi = await fetchDataForCategory("xiaomi");
  PrHp = await fetchDataForCategory("hp");
  PrAsus = await fetchDataForCategory("asus");
  PrLenovo = await fetchDataForCategory("lenovo");
  PrAcer = await fetchDataForCategory("acer");
};

fetchDataForAllCategories();

// Lazy load images
const images = document.querySelectorAll("img[data-src]");
const options = {
  rootMargin: "0px",
  threshold: 0.1,
};

const loadImage = (image) => {
  image.src = image.dataset.src;
  image.removeAttribute("data-src");
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      loadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);
images.forEach((image) => observer.observe(image));


export const BannersCenter = [
  {
    id: 1,
    name: "Máy tính",
    imgbnct:
      "https://i.pinimg.com/564x/a5/6c/93/a56c930c91e49eebd953ff0d51a9bec6.jpg",
  },
];

export const BannersLeft = [
  {
    id: 1,
    name: "Máy tính",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png",
  },
];

export const CateFeatures = [
  {
    id: 1,
    name: "Máy tính",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png",
  },
  {
    id: 2,
    name: "Tablet",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tablet-128x129.png",
  },
  {
    id: 3,
    name: "Đồng hồ thông minh",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-moi-128x129.png",
  },
  {
    id: 4,
    name: "Điện thoại độc quyền",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/dien-thoai-doc-quyen-128x128.png",
  },
  {
    id: 5,
    name: "Màn hình máy tính",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png",
  },
  {
    id: 6,
    name: "Phụ kiện di động",
    imgcatehot:
      "https://duhung.vn/wp-content/uploads/2023/05/Bo-phu-kien-di-dong-Yealink-cho-WH6367-2.png",
  },
  {
    id: 7,
    name: "Phụ kiện Gaming",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Phukiengaming-128x129.png",
  },
  {
    id: 8,
    name: "Thiết bị âm thanh",
    imgcatehot:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Loa-128x128.png",
  },
  {
    id: 9,
    name: "Điều hòa",
    imgcatehot:
      "https://tse4.mm.bing.net/th?id=OIP.7BSmCxRZXYWjuGgMj_vDWQHaHa&pid=Api&P=0&h=220",
  },
  {
    id: 10,
    name: "Thiết bị làm mát",
    imgcatehot:
      "https://tse2.mm.bing.net/th?id=OIP.xFEN277jlGRs4XzhB_E5jAHaE8&pid=Api&P=0&h=220",
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
