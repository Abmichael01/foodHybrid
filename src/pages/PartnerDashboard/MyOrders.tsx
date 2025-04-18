import Orders from '@/components/PartnerDashboard/MyOrders/Orders'
import Tab from '@/components/PartnerDashboard/MyOrders/Tab'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const orders =[
  {
    "id": 5210,
    "name": "Order",
    "price": 350,
    "status": "Processing",
    "returns": 12,
    "productsCount": 3
  },
  {
    "id": 5214,
    "name": "Order",
    "price": 275,
    "status": "Processing",
    "returns": 3,
    "productsCount": 1
  },
  
]


const MyOrders: React.FC = () => {
  const [params] = useSearchParams();
  const currentTab = params.get("tab");
  const filteredOrders = orders.filter( order => {
    if (currentTab === "processing") return order.status === "Processing";
    if (currentTab === "ongoing") return order.status === "In-Transit" || order.status === "Approved";
    if (currentTab === "history") return order.status === "Settled";
  })

  return (
    <div className='space-y-10 h-full'>
      <Tab />
      <Orders orders={filteredOrders} tab={currentTab as string} />
    </div>
  )
}

export default MyOrders