import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      price: 15,
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      price: 40,
      quantity: 1,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Sneakers",
      size: "42",
      color: "White",
      price: 60,
      quantity: 1,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Hoodie",
      size: "XL",
      color: "Black",
      price: 35,
      quantity: 1,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Cap",
      size: "One Size",
      color: "Green",
      price: 10,
      quantity: 1,
      image: "https://picsum.photos/200?random=5",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size:{product.size} | color:{product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
