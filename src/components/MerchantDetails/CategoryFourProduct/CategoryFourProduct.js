import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import PlusIcon from "../../../assets/plus-icon.svg";
import SnacksCategory from "../../../assets/snacks-category.jpeg";
import SingleProductDetails from './SingleProductDetails';



const categorythreeProduct = [
    { id: "1", name: "Baja Turkey with Sliced Avocado", image: SnacksCategory },
    { id: "2", name: "Baja Turkey with Sliced Avocado", image: SnacksCategory },
    { id: "3", name: "Baja Turkey with Sliced Avocado", image: SnacksCategory },
    { id: "4", name: "Baja Turkey with Sliced Avocado", image: SnacksCategory },
    { id: "5", name: "Baja Turkey with Sliced Avocado", image: SnacksCategory },
    { id: "6", name: "Baja Turkey with Sliced Avocado", image: SnacksCategory },
];



const CategoryFourProduct = () => {
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
            <h2 className='text-xl text-[#111111] mb-4 capitalize font-semibold'>Snacks</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-4'>
                {categorythreeProduct.map((snacks, index) => (
                    <div key={index} onClick={() => handleProductClick(snacks)} className='cardshadow2 flex p-2 xxs:p-4 rounded-lg justify-between gap-2 cursor-pointer'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h2 className='mt-1 truncate font-semibold text-base'>Chocolate Chip</h2>
                                <p className='mt-1 break-words font-medium text-xs md:text-sm text-[#808080] mb-2'>Soft, buttery, chock full of chips. What more can we say? Enjoy.</p>
                            </div>
                            <small className='font-semibold text-lg'>£4.00</small>
                        </div>



                        <div className='relative'>
                            <div className='rounded-lg mb-4 cardshadow3 p-1 h-[120px] xxs:h-[151px] w-[120px] xxs:w-[151px] overflow-hidden relative'>
                                <img src={SnacksCategory} alt="SnacksCategory" className='w-full h-full object-cover' />
                            </div>

                            <div className='absolute bottom-0 flex justify-center left-0 right-0 mx-auto'>
                                {!addedProduct[snacks.id]?.isAdded ? (
                                    <button
                                        className='h-9 px-4 text-xs uppercase text-white bg-[#0B1223] rounded flex items-center justify-center gap-1 transition-all duration-500 hover:bg-opacity-90'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddClick(snacks.id);
                                        }}
                                    >
                                        {t('add')}
                                        <img src={PlusIcon} alt="PlusIcon" className='w-4 h-4' />
                                    </button>
                                ) : (
                                    <div className='border border-[#E6E6E6] bg-white rounded flex items-center h-9'>
                                        <button
                                            className='px-2 font-semibold text-sm'
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleQuantityChange(snacks.id, -1);
                                            }}
                                            disabled={addedProduct[snacks.id].quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className='font-semibold text-sm text-center min-w-6'>{addedProduct[snacks.id]?.quantity}</span>
                                        <button
                                            className='px-2 font-semibold text-sm'
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleQuantityChange(snacks.id, 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                )}
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

export default CategoryFourProduct