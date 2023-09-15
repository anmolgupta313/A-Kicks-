const { Products } = require("../models");

// const prod1= require('../Images/aj1unc.jpg')
// const prod2= require('../Images/mocha.jpg')
// const prod3= require('../Images/travisfrag.jpg')
const productsData = [
  {
    productName: "Air Jordan 1 High UNC",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/358111/1.jpg",
    price: 400,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "Air Jordan 1 High Travis Scott Mocha",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/806920/1.jpg",
    price: 2200,
    size: "11",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "Air Jordan 1 High Travis Scott Fragments",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/272696/1.jpg",
    price: 2500,
    size: "9",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 5 RETRO SE 'BURGUNDY' 2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/365489/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id:2,
  },
  {
    productName: "UNION LA X BEPHIE'S BEAUTY SUPPLY X AIR JORDAN 1 RETRO",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/365271/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "WMNS AIR JORDAN 4 RETRO 'FROZEN MOMENTS",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/367070/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR MAX CB 94 OG 'BLACK PURPLE' 2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/365486/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 1,
  },
  {
    productName: "AIR JORDAN 4 RETRO 'THUNDER' 2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/353523/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 3 RETRO 'PALOMINO'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/360704/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 4 RETRO 'DOERNBECHER'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/011499/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'CHICAGO LOST & FOUND'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/307016/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'PALOMINO'",
    productDescription:
    "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/351725/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "MARVEL X AIR JORDAN 1 RETRO HIGH OG 'NEXT CHAPTER'",
    productDescription:"Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/349168/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "TRAVIS SCOTT X AIR JORDAN 1 LOW OG SP PS 'BLACK PHANTOM'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/333976/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "TRAVIS SCOTT X AIR JORDAN 1 LOW OG TD 'REVERSE MOCHA'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/315865/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'DARK MOCHA",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/162310/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "FRAGMENT DESIGN X TRAVIS SCOTT X AIR JORDAN 1 RETRO ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/267414/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'YELLOW TOE' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/310578/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "YEEZY BOOST 350 V2 'MX DARK SALT' ",
    productDescription:
      "The adidas Yeezy Boost 350 V2 'MX Dark Salt' arrives with a Primeknit upper featuring neutral shades of silver, grey, and black and laced up for a secure fit. The shoe features a full-length Boost midsole encased in a ribbed TPU cage which is supported by a grippy rubber outsole. A bold black side stripe complements the swirling design, running along the lateral side and matching the heels webbing pull tab.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/368573/1.jpg",
    price: 400,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 700 'WAVE RUNNER' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/378290/1.jpg",
    price: 550,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'BONE' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/299345/1.jpg",
    price: 380,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'ONYX' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/296515/1.jpg",
    price: 380,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'GRANITE' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/322531/1.jpg",
    price: 300,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 700 'ANALOG' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/138422/1.jpg",
    price: 330,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'CARBON BELUGA' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/341927/1.jpg",
    price: 320,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 'PIRATE BLACK' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/338490/1.jpg",
    price: 390,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'BRED'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/800389/1.jpg",
    price: 450,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 700 'UTILITY BLACK' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/375973/1.jpg",
    price: 330,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY 500 'BONE WHITE' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/368576/1.jpg",
    price: 370,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'ZEBRA' 2022/2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/369153/1.jpg",
    price: 450,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'SLATE'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/308404/1.jpg",
    price: 405,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY 500 'UTILITY BLACK' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/369155/1.jpg",
    price: 380,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'STATIC NON-REFLECTIVE' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/375976/1.jpg",
    price: 290,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },

];

const seedProducts = () => {
  return Products.bulkCreate(productsData);
};

module.exports = seedProducts;
