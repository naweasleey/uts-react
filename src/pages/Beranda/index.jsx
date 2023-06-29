import React from "react";
import "./beranda.css";
import Card from "./../../components/Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

const products = [
  {
    id: 1,
    name: "MacBook Air 15”",
    image: "/macbook_air_15.jpg",
    price: 26999999,
    category: "Laptop",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    image: "/iphone_14_pro.jpg",
    price: 19999999,
    category: "Laptop",
  },
  {
    id: 3,
    name: "iPhone 14",
    image: "/iphone_14.jpg",
    price: 15999999,
    category: "Laptop",
  },
  {
    id: 4,
    name: "Apple Vision Pro",
    image: "/apple_vision_pro.jpg",
    price: 66999999,
    category: "Laptop",
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    image: "apple_watch_series_8.jpg",
    price: 7999999,
    category: "Laptop",
  },
  {
    id: 6,
    name: "iPad Pro",
    image: "/ipad_pro.jpg",
    price: 15999999,
    category: "Laptop",
  },
  {
    id: 7,
    name: "MacBook Air 15”",
    image: "/macbook_air_15.jpg",
    price: 26999999,
    category: "Laptop",
  },
  {
    id: 8,
    name: "iPhone 14 Pro",
    image: "/iphone_14_pro.jpg",
    price: 19999999,
    category: "Laptop",
  },
  {
    id: 9,
    name: "iPhone 14",
    image: "/iphone_14.jpg",
    price: 15999999,
    category: "Laptop",
  },
  {
    id: 10,
    name: "Apple Vision Pro",
    image: "/apple_vision_pro.jpg",
    price: 66999999,
    category: "Laptop",
  },
  {
    id: 11,
    name: "Apple Watch Series 8",
    image: "apple_watch_series_8.jpg",
    price: 7999999,
    category: "Laptop",
  },
  {
    id: 12,
    name: "iPad Pro",
    image: "/ipad_pro.jpg",
    price: 15999999,
    category: "Laptop",
  },
];

const Beranda = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [typeSort, setTypeSort] = useState("asc");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [newProduct, setNewProduct] = useState();
  const [idSquence, setIdSequence] = useState(products.length);


  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  let productBiasa = products
    .toSorted((a, b) => {
      if (typeSort == "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchProduct) &&
        product.price > minPrice &&
        product.price < maxPrice
    );

  const Tentang = (e) => {
    navigate(`/tentang/${e}`);
  };

  return (
    <div>
      <div className="wrapper-action">
      <button onClick={() => setNewProduct({ id: idSquence })}>Tambah</button>
        {newProduct && (
          <form
            className="card dialog"
            onSubmit={(e) => {
              e.preventDefault();
              setProducts([...products, newProduct]);
              setNewProduct();
              setIdSequence(idSquence + 1);
            }}
          >
            <h1>Tambah Produk</h1>
            <label>
              Nama
              <input
                type="text"
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                required
                autoFocus
              />
            </label>
            <label>
              Harga
              <input
                type="number"
                onChange={(e) =>
                  setNewPlanet({ ...newPlanet, diameter: e.target.value })
                }
                required
              />
            </label>
            <div>
              <button onClick={() => setNewProduct()}>Batal</button>
              <button>Simpan</button>
            </div>
          </form>
        )}

        <div className="wrapper-cari">
          <label>Cari Produk</label>
          <input
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
        <div className="wrapper-cari">
          <label>Minimal Harga</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="wrapper-cari">
          <label>Maksimal Harga</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => {
              e.target.value
                ? setMaxPrice(e.target.value)
                : setMaxPrice(Infinity);
            }}
          />
        </div>
        <div className="wrapper-cari">
          <label>Sorting By</label>
          <select
            name="sortingBy"
            id="sortingBy"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="name">Nama Produk</option>
            <option value="price">Harga Produk</option>
          </select>
        </div>
        <div className="wrapper-cari">
          <label>Type Sort</label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setTypeSort(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="wrapper-product">
        {productBiasa
          .filter((_product, i) => i < 4 * page && i >= 4 * page - 4)
          .map((product) => {
            return (
              <Card key={product.id}>
                <img
                  className="card-img"
                  src={product.image}
                  alt={product.name}
                />
                <p className="card-name">
                  ({product.id}) {product.name}
                </p>
                <p className="card-price">
                  Rp. {product.price.toLocaleString("Id-ID")}
                </p>
                <p className="card-category">({product.category})</p>
              </Card>
            );
          })}
      </div>
      <div className="wrapper-pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page == 1}
          className="btn-pagination"
        >
          <BiArrowToLeft size={16} /> Sebelumnya
        </button>
        <span>{page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page == Math.ceil(productBiasa.length / 4)}
          className="btn-pagination"
        >
          Selanjutnya <BiArrowToRight size={16} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Beranda;
