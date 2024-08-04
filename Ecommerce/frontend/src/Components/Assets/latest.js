import p1_img from './athletic-cotton-socks-6-pairs.jpg'
import p2_img from './intermediate-composite-basketball.jpg'
import p3_img from './adults-plain-cotton-tshirt-2-pack-teal.jpg'
import p4_img from './black-2-slot-toaster.jpg'

const latest = [
    // 1
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image:  p1_img,
      name: " Cotton Socks ",
      rating: {
        stars: 4.5,
        count: 87
      },
      price: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    },
    // // 2
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      image: p2_img,
      name: "Basketball",
      rating: {
        stars: 4,
        count: 127
      },
      price: 2095,
      keywords: [
        "sports",
        "basketballs"
      ]
    },
    // // 3
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: p3_img,
      name: " Cotton T-Shirt - 2 Pack",
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
      sizeChartLink: "clothing-size-chart.png"
    },
    // //4
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: p4_img,
      name: "Toaster- Black",
      rating: {
        stars: 5,
        count: 2197
      },
      price: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ]
    }
]
export default latest;