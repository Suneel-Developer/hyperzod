import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import Wraps from "../../../assets/wraps-category.jpeg"
import PlusIcon from "../../../assets/plus-icon.svg";
import SingleProductDetails from "./SingleProductDetails"



const categorytwoProduct = [
  { id: "1", name: "Buffalo Chicken", image: Wraps },
  { id: "2", name: "Shoes & Footwear", image: Wraps },
  { id: "3", name: "Shoes & Footwear", image: Wraps },
  { id: "4", name: "Shoes & Footwear", image: Wraps },
  { id: "5", name: "Shoes & Footwear", image: Wraps },
  { id: "6", name: "Shoes & Footwear", image: Wraps },
];


const CategoryTwoProduct = () => {
  const { t } = useTranslation();
  const [addedProduct, setAddedProduct] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleQuantityChange = (id, amount) => {
    setAddedProduct(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        quantity: Math.max((prevState[id]?.quantity || 1) + amount, 1)
      }
    }));
  };


  const handleAddClick = (id) => {
    setAddedProduct(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isAdded: true,
        quantity: 1,
      }
    }));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
};

const handleCloseDetails = () => {
    setSelectedProduct(null);
};

  // Toggle the no-scroll class on the body element when the popup is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedProduct]);


  return (
    <section className='pt-8 px-3 md:px-7'>
      <h2 className='text-xl text-[#111111] mb-4 capitalize font-semibold'>Wraps </h2>

      <div className='grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-5 gap-4'>
        {categorytwoProduct.map((wrapsproduct, index) => (
          <div key={index} onClick={() => handleProductClick(wrapsproduct)} className='nearby-merchants-card overflow-hidden rounded-lg cursor-pointer'>
            <div className='h-[240px] xxs:h-[220px] md:h-[280px]'>
              <img src={wrapsproduct.image} alt="Wraps" className='w-full h-full object-cover' />
            </div>

            <div className='p-4'>
              <h3 className='text-sm font-semibold leading-5 truncate mb-3'>{wrapsproduct.name}</h3>

              <div className='flex items-center gap-2 justify-between'>
                <h4 className='text-base font-semibold'>£12.00</h4>

                <div>
                  {!addedProduct[wrapsproduct.id]?.isAdded ? (
                    <button
                      className='h-9 px-4 text-xs uppercase text-white bg-[#0B1223] rounded flex items-center justify-center gap-1 transition-all duration-500 hover:bg-opacity-90'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddClick(wrapsproduct.id);
                      }}
                    >
                       {t('add')}
                      <img src={PlusIcon} alt="PlusIcon" className='w-4 h-4' />
                    </button>
                  ) : (
                    <div className='border border-[#E6E6E6] rounded flex items-center h-9'>
                      <button
                        className='px-2 font-semibold text-sm'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(wrapsproduct.id, -1);
                        }}
                        disabled={addedProduct[wrapsproduct.id].quantity <= 1}
                      >
                        -
                      </button>
                      <span className='font-semibold text-sm text-center min-w-6'>{addedProduct[wrapsproduct.id]?.quantity}</span>
                      <button
                        className='px-2 font-semibold text-sm'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(wrapsproduct.id, 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Single Product Details Modal */}
      {selectedProduct && (
        <SingleProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}
    </section>
  )
}

export default CategoryTwoProduct