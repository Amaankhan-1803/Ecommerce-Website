 import p1 from '../Assets/athletic-cotton-socks-6-pairs.jpg'
 import p2 from '../Assets/intermediate-composite-basketball.jpg'
 import p3 from '../Assets/adults-plain-cotton-tshirt-2-pack-teal.jpg'
 import p4 from '../Assets/black-2-slot-toaster.jpg'
 import p5 from '../Assets/6-piece-white-dinner-plate-set.jpg'
 import p6 from '../Assets/6-piece-non-stick-baking-set.webp'
 import p7 from '../Assets/plain-hooded-fleece-sweatshirt-yellow.jpg'
 import p8 from '../Assets/luxury-tower-set-6-piece.jpg'
 import p9 from '../Assets/liquid-laundry-detergent-plain.jpg'
 import p10 from '../Assets/knit-athletic-sneakers-gray.jpg'
 import p11 from '../Assets/women-chiffon-beachwear-coverup-black.jpg'
 import p12 from '../Assets/round-sunglasses-black.jpg'
 import p13 from '../Assets/women-beach-sandals.jpg'
 import p14 from '../Assets/blackout-curtain-set-beige.webp'
 import p15 from '../Assets/men-slim-fit-summer-shorts-gray.jpg'
 import p16 from '../Assets/electric-glass-and-steel-hot-water-kettle.webp'
 import p17 from '../Assets/facial-tissue-2-ply-18-boxes.jpg'
 import p18 from '../Assets/straw-sunhat.webp'
 import p19 from '../Assets/sky-flower-stud-earrings.webp'
 import p20 from '../Assets/women-stretch-popover-hoodie-black.jpg'
 import p21 from '../Assets/bathroom-rug.jpg'
 import p22 from '../Assets/women-knit-ballet-flat-black.jpg'
 import p23 from '../Assets/men-golf-polo-t-shirt-blue.jpg'
 import p24 from '../Assets/trash-can-with-foot-pedal-50-liter.jpg'
 import p25 from '../Assets/duvet-cover-set-blue-twin.jpg'
 import p26 from '../Assets/women-chunky-beanie-gray.webp'
 import p27 from '../Assets/men-chino-pants-beige.jpg'
 import p28 from '../Assets/men-athletic-shoes-green.jpg'
 import p29 from '../Assets/men-navigator-sunglasses-brown.jpg'
 import p30 from '../Assets/non-stick-cooking-set-15-pieces.webp'
 import p31 from '../Assets/vanity-mirror-silver.jpg'
 import p32 from '../Assets/women-french-terry-fleece-jogger-camo.jpg'
 import p33 from '../Assets/double-elongated-twist-french-wire-earrings.webp'
 import p34 from '../Assets/round-airtight-food-storage-containers.jpg'
 import p35 from '../Assets/coffeemaker-with-glass-carafe-black.jpg'
 import p36 from '../Assets/blackout-curtains-black.jpg'
 import sizechart from '../Assets/clothing-size-chart.png'
 
 

 let products = [
  // 1
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image:p1 ,
    name: "Athletic Cotton Socks",
    rating: {
      stars: 4.5,
      count: 87
    },
    price: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ],
    category: "sports"
  },
  // 2
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: p2,
    name: "Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    price: 2095,
    keywords: [
      "sports",
      "basketballs"
    ],
    category: "sports"
  },

  // 3
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: p3,
    name: "T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    price: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: sizechart,
    category:'fashion'
  },

  //4
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: p4,
    name: "Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    price: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ],
    category:'kitchen'
  },

  //5
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: p5,
    name: "Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    price: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ],
    category:'kitchen'
  },

  //6
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: p6,
    name: "Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175
    },
    price: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ],
    category:'kitchen'
  },

  //7
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: p7,
    name: "Yellow Hoody",
    rating: {
      stars: 4.5,
      count: 317
    },
    price: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ],
    category:'fashion'
  },

  //8
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: p8,
    name: "Luxury Towel Set",
    rating: {
      stars: 4.5,
      count: 144
    },
    price: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ],
    category:'fashion'
  },

  //9
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: p9,
    name: "Liquid Laundry Detergent",
    rating: {
      stars: 4.5,
      count: 305
    },
    price: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ],
    category:'cleaning'
  },

  //10
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: p10,
    name: "Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    price: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ],
    category:'sports'
  },

  //11
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: p11,
    name: "Beachwear ",
    rating: {
      stars: 4.5,
      count: 235
    },
    price: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: sizechart,
    category:'fashion'
  },

  //12
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: p12,
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    price: 1560,
    keywords: [
      "accessories",
      "shades"
    ],
    category:'fashion'
  },

  //13
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: p13,
    name: " Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    price: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ],
    category:'fashion'
  },

  //14
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: p14,
    name: "Blackout Curtains -Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    price: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ],
    category:'decor'
  },

  //15
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: p15,
    name: "Men's Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    price: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ],
    category:'fashion'
  },

  //16
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: p16,
    name: "Tea Water Kettle",
    rating: {
      stars: 5,
      count: 846
    },
    price: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ],
    category:'kitchen'
  },

  //17
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: p17,
    name: " Soft Tissue",
    rating: {
      stars: 4,
      count: 99
    },
    price: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ],
    category:'kitchen'
  },

  //18
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: p18,
    name: "Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    price: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ],
    category:'fashion'
  },

  //19
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: p19,
    name: "Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52
    },
    price: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ],
    category:'fashion'
  },

  //20
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: p20,
    name: "Women's Hoodie",
    rating: {
      stars: 4.5,
      count: 2465
    },
    price: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: sizechart,
    category:'fashion'
  },

  //21
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: p21,
    name: "Bath Rug Mat ",
    rating: {
      stars: 4.5,
      count: 119
    },
    price: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ],
    category:'cleaning'
  },

  //22
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: p22,
    name: "Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    price: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ],
    category:'fashion'
  },

  //23
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: p23,
    name: "Men's Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    price: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: sizechart,
    category:'fashion'
  },

  //24
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: p24,
    name: "Trash Can",
    rating: {
      stars: 4.5,
      count: 2286
    },
    price: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ],
    category:'cleaning'
  },

  //25
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: p25,
    name: "Duvet Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    price: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ],
    category:'decor'
  },

  //26
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: p26,
    name: "Women's Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    price: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ],
    category:'fashion'
  },

  //27
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: p27,
    name: "Men's Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    price: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ],
    category:'fashion'
  },

  //28
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: p28,
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    price: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ],
    category:'fashion'
  },

  //29
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: p29,
    name: "Men's Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    price: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ],
    category:'fashion'
  },

  //30
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: p30,
    name: "Cookware Set",
    rating: {
      stars: 4.5,
      count: 511
    },
    price: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ],
    category:'kitchen'
  },

  //31
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: p31,
    name: "Vanity Mirror- Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    price: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ],
    category:'fashion'
  },

  //32
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: p32,
    name: "Women's Jogger",
    rating: {
      stars: 4.5,
      count: 248
    },
    price: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ],
    category:'fashion'
  },

  //33
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: p33,
    name: "French Wire Earrings",
    rating: {
      stars: 4.5,
      count: 117
    },
    price: 2400,
    keywords: [
      "accessories",
      "womens"
    ],
    category:'fashion'
  },

  //34
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: p34,
    name: " Food Storage Containers ",
    rating: {
      stars: 4,
      count: 126
    },
    price: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ],
    category:'kitchen'
  },

  //35
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: p35,
    name: "Coffeemaker",
    rating: {
      stars: 4.5,
      count: 1211
    },
    price: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ],
    category:'kitchen'
  },

  //36
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: p36,
    name: "Blackout Curtains",
    rating: {
      stars: 4.5,
      count: 363
    },
    price: 3099,
    keywords: [
      "bedroom",
      "home"
    ],
    category:'decor'
  },

  
];

export default products;