import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import Fastfood from "../../../assets/fastfood-category.jpeg"
import PlusIcon from "../../../assets/plus-icon.svg";
import SingleProductDetails from './SingleProductDetails';



const categorythreeProduct = [
  { id: "1", name: "Baja Turkey with Sliced Avocado", image: Fastfood },
  { id: "2", name: "Baja Turkey with Sliced Avocado", image: Fastfood },
  { id: "3", name: "Baja Turkey with Sliced Avocado", image: Fastfood },
  { id: "4", name: "Baja Turkey with Sliced Avocado", image: Fastfood },
  { id: "5", name: "Baja Turkey with Sliced Avocado", image: Fastfood },
  { id: "6", name: "Baja Turkey with Sliced Avocado", image: Fastfood },
];


const CategoryThreeProduct = () => {
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
      <h2 className='text-xl text-[#111111] mb-4 capitalize font-semibold'>Fast Food</h2>

      <div className='grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-5 gap-4'>
        {categorythreeProduct.map((fastfood, index) => (
          <div key={index} onClick={() => handleProductClick(fastfood)} className='nearby-merchants-card overflow-hidden flex flex-col rounded-lg cursor-pointer'>
            <div className='h-[240px] xxs:h-[220px] md:h-[280px]'>
              <img src={fastfood.image} alt={fastfood.name} className='w-full h-full object-cover' />
            </div>

            <div className='p-4'>
              <h3 className='text-sm font-semibold leading-5 truncate mb-3'>{fastfood.name}</h3>

              <div className='flex items-center gap-2 justify-between'>
                <h4 className='text-base font-semibold'>£12.00</h4>

                <div>
                  {!addedProduct[fastfood.id]?.isAdded ? (
                    <button
                      className='h-9 px-4 text-xs uppercase text-white bg-[#0B1223] rounded flex items-center justify-center gap-1 transition-all duration-500 hover:bg-opacity-90'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddClick(fastfood.id);
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
                          handleQuantityChange(fastfood.id, -1);
                        }}
                        disabled={addedProduct[fastfood.id].quantity <= 1}
                      >
                        -
                      </button>
                      <span className='font-semibold text-sm text-center min-w-6'>{addedProduct[fastfood.id]?.quantity}</span>
                      <button
                        className='px-2 font-semibold text-sm'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuantityChange(fastfood.id, 1);
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

export default CategoryThreeProduct