"use client";

import ConnectButton from "@/components/ConnectButton";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useConnect, useDisconnect,useWaitForTransactionReceipt } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();
  // const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  return (
     <div className="min-h-screen bg-gray-50">
     {/* Header */}
     <header className="bg-white shadow-sm">
       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
         <div className="flex items-center space-x-4">
           <i className="fas fa-building text-2xl text-blue-600"></i>
           <h1 className="text-xl font-bold">Okido Finance</h1>
         </div>
         <div className="flex items-center space-x-6">
           <button className="!rounded-button whitespace-nowrap text-gray-600 hover:text-gray-900">
             <i className="fas fa-wallet mr-2"></i>
             Connect Wallet
           </button>
           <button className="!rounded-button whitespace-nowrap bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
             <i className="fas fa-plus mr-2"></i>
             Add Property
           </button>
         </div>
       </div>
     </header>

     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-2xl font-bold text-white mb-8">
          Morph Starter Kit
        </h1>
        <div className="bg-gray-800 rounded-lg p-6">
          {isConnected ? (
            <>
              <p className="text-white">Connected to {address}</p>
              <button
                onClick={() => disconnect()}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Disconnect
              </button>
            </>
          ) : (
            <ConnectButton />
          )}
        </div>
      </div>

     {/* Main Content */}
     <main className="max-w-7xl mx-auto px-4 py-8">
       <div className="mb-8">
         <h2 className="text-2xl font-bold mb-6">Properties</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
   {
     id: 1,
     name: "Luxury Villa in Beverly Hills",
     price: 1000,
     totalShares: 100,
     sharesSold: 5,
     image: 'https://ai-public.mastergo.com/ai/img_res/a52e1047a3916b5db812621ee9a420e5.jpg',
     location: "Beverly Hills, CA",
     type: "Residential",
     yield: "8.5% annually"
   },
   {
     id: 2,
     name: "Downtown Commercial Complex",
     price: 2000,
     totalShares: 200,
     sharesSold: 15,
     image: 'https://ai-public.mastergo.com/ai/img_res/00ecba5e9aa10ecd0a2956742df86072.jpg',
     location: "Manhattan, NY",
     type: "Commercial",
     yield: "10.2% annually"
   }
 ].map((property) => (
             <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
               <div className="h-48 overflow-hidden">
                 <img 
                   src={property.image} 
                   alt={property.name}
                   className="w-full h-full object-cover object-top"
                 />
               </div>
               <div className="p-4">
                 <h3 className="text-lg font-semibold mb-2">{property.name}</h3>
                 <div className="space-y-2">
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-600">Price Per Share:</span>
                     <span className="font-medium">${property.price}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-600">Total Shares:</span>
                     <span className="font-medium">{property.totalShares}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-600">Shares Sold:</span>
                     <span className="font-medium">{property.sharesSold}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-600">Location:</span>
                     <span className="font-medium">{property.location}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-gray-600">Expected Yield:</span>
                     <span className="font-medium text-green-600">{property.yield}</span>
                   </div>
                 </div>
                 <button className="!rounded-button whitespace-nowrap mt-4 w-full bg-blue-600 text-white py-2 hover:bg-blue-700">
                   Buy Shares
                 </button>
               </div>
             </div>
           ))}
         </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
         <div className="bg-white p-6 rounded-lg shadow-md">
           <div className="flex items-center justify-between">
             <div>
               <p className="text-gray-600">Total Investment</p>
               <p className="text-2xl font-bold">$245,000</p>
             </div>
             <i className="fas fa-chart-line text-3xl text-blue-600"></i>
           </div>
         </div>
         <div className="bg-white p-6 rounded-lg shadow-md">
           <div className="flex items-center justify-between">
             <div>
               <p className="text-gray-600">Active Properties</p>
               <p className="text-2xl font-bold">8</p>
             </div>
             <i className="fas fa-building text-3xl text-green-600"></i>
           </div>
         </div>
         <div className="bg-white p-6 rounded-lg shadow-md">
           <div className="flex items-center justify-between">
             <div>
               <p className="text-gray-600">Total Returns</p>
               <p className="text-2xl font-bold">$12,450</p>
             </div>
             <i className="fas fa-dollar-sign text-3xl text-yellow-600"></i>
           </div>
         </div>
       </div>
     </main>
   </div>
  );
}
