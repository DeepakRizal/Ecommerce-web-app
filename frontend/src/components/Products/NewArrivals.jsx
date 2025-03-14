import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Casual Sneakers",
      price: 80,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Casual Sneakers",
        },
      ],
    },
    {
      _id: "3",
      name: "Classic Wristwatch",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Classic Wristwatch",
        },
      ],
    },
    {
      _id: "4",
      name: "Leather Handbag",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Leather Handbag",
        },
      ],
    },
    {
      _id: "5",
      name: "Sports Hoodie",
      price: 90,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Sports Hoodie",
        },
      ],
    },
    {
      _id: "6",
      name: "Elegant Sunglasses",
      price: 110,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Elegant Sunglasses",
        },
      ],
    },
    {
      _id: "7",
      name: "Denim Jeans",
      price: 75,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Denim Jeans",
        },
      ],
    },
    {
      _id: "8",
      name: "Luxury Perfume",
      price: 130,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Luxury Perfume",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  //Update Scroll Buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrope on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons  */}
        <div className="absolute right-0 bottom-[30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } bg-white text-black`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } bg-white text-black`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* srollable content  */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => {
          return (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[400px] object-cover rounded-lg"
                draggable={false}
              />
              <div className="absolute bottom-0 right-0 text-white p-4 rounded-b-lg ">
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivals;
