// src/components/ProductList.jsx
import ProductItem from './ProductItem';

const dummyProducts = [
  {
    _id: "1",
    name: "Casual T-Shirt",
    price: 799,
    image: "https://m.media-amazon.com/images/I/51QtaB4auXL._SY741_.jpg"
  },
  {
    _id: "2",
    name: "Running Shoes",
    price: 1299,
    image: "https://th.bing.com/th?id=OPAC.PKPDFQ3zDBxo%2fw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
  },
  {
    _id: "3",
    name: "Blue Jeans",
    price: 999,
    image: "https://rukminim1.flixcart.com/image/1408/1408/jean/n/u/3/bmw-darklevis-ben-martin-32-original-imaedpc4zcgjadsv.jpeg?q=90"
  },
  {
    _id: "4",
    name: "Hooded Jacket",
    price: 1499,
    image: "https://image.kpopmap.com/2022/01/top-5-korean-actors-who-look-the-best-in-a-hoodie_soop-management.jpeg"
  },
  {
    _id: "5",
    name: "Sunglasses",
    price: 799,
    image: "https://m.media-amazon.com/images/I/61KQXq71FJL._AC_UL640_QL65_.jpg"
  },
  {
    _id: "6",
    name: "Wrist Watch",
    price: 1999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    _id: "7",
    name: "Sports Cap",
    price: 299,
    image: "https://i.pinimg.com/originals/4b/79/e4/4b79e4f3a134e1186284dbd22e5b7cf4.jpg"
  },
  {
    _id: "8",
    name: "Formal Shirt",
    price: 1599,
    image: "https://i.pinimg.com/originals/4e/b7/79/4eb77999f1c9eb7c321b2c961b30edc9.jpg"
  },
  {
    _id: "9",
    name: "Leather Belt",
    price: 1499,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/054905/01/fnd/IND/fmt/png/VIENNA-Leather-Belt"
  },
  {
    _id: "10",
    name: "Sneakers",
    price: 1199,
    image: "https://tse1.mm.bing.net/th/id/OIP.1Nfgy1uL3ipr06sHV5fnbQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    _id: "11",
    name: "Travel Backpack",
    price: 1599,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  },
  {
    _id: "12",
    name: "Sandals",
    price: 699,
    image: "https://cdna.lystit.com/photos/jcrew/36b241f3/jcrew-hthr-espresso-Strappy-Block-heel-Sandals-60mm-In-Suede.jpeg"
  },
  {
    _id: "13",
    name: "Printed T-Shirt",
    price: 549,
    image: "https://cf.shopee.co.th/file/31686f4fbbd6e3c6eaa07b02e850cbea"
  },
  {
    _id: "14",
    name: "Analog Watch",
    price: 16999,
    image: "https://m.media-amazon.com/images/I/71otLA6VaYL._SL1500_.jpg"
  },
  {
    _id: "15",
    name: "Denim Jacket",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/71XfkMYMY+L._SY741_.jpg"
  }
];

const ProductList = ({ searchText = '' }) => {
  const filteredProducts = dummyProducts.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-8">
      {filteredProducts.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
