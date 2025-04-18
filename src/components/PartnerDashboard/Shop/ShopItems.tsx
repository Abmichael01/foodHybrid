import React from 'react'
import rice from "@/assets/images/shop-rice.webp"
import beans from "@/assets/images/shop-beans.webp"
import ShopItem from './ShopItem'

const items = [
    {
        name: "Food Hybrid Rice",
        bagsPerUnit: 5,
        price: 153,
        img: rice,
    },
    {
        name: "Food Hybrid Beans",
        bagsPerUnit: 2,
        price: 343,
        img: beans,
    },
    {
        name: "Food Hybrid Rice",
        bagsPerUnit: 5,
        price: 153,
        img: rice,
    },
    {
        name: "Food Hybrid Beans",
        bagsPerUnit: 2,
        price: 343,
        img: beans,
    },
    {
        name: "Food Hybrid Rice",
        bagsPerUnit: 5,
        price: 153,
        img: rice,
    },
    {
        name: "Food Hybrid Beans",
        bagsPerUnit: 2,
        price: 343,
        img: beans,
    },
    {
        name: "Food Hybrid Rice",
        bagsPerUnit: 5,
        price: 153,
        img: rice,
    },
    {
        name: "Food Hybrid Beans",
        bagsPerUnit: 2,
        price: 343,
        img: beans,
    },
]

const ShopItems: React.FC = () => {
  return (
    <div className='space-y-[24px]'>
        {items.map((item, index) => (
            <div key={index}>
                <ShopItem item={item} />
            </div>
        ))}
    </div>
  )
}

export default ShopItems