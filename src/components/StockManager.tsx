"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../lib/db';

export default function StockManager() {
  const { register, handleSubmit, reset } = useForm();
  const inventory = useLiveQuery(() => db.stock.toArray());

  const addItem = async (data: any) => {
    await db.stock.add({ ...data, quantity: Number(data.quantity), price: Number(data.price) });
    reset();
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(addItem)} className="glass p-6 rounded-3xl grid grid-cols-2 gap-3 border border-white/5">
        <input {...register("modelName")} placeholder="Frame Model Name" className="col-span-2 bg-black/40 border border-white/10 rounded-xl p-3 outline-none" />
        <input {...register("quantity")} type="number" placeholder="Qty" className="bg-black/40 border border-white/10 rounded-xl p-3 outline-none" />
        <input {...register("price")} type="number" placeholder="Price" className="bg-black/40 border border-white/10 rounded-xl p-3 outline-none" />
        <button className="col-span-2 bg-emerald-500 text-black font-bold py-3 rounded-xl uppercase text-xs">Add to Inventory</button>
      </form>

      <div className="grid grid-cols-1 gap-3">
        {inventory?.map(item => (
          <div key={item.id} className="p-4 glass rounded-2xl flex justify-between items-center border border-white/5">
            <div>
              <p className="font-bold text-white uppercase text-sm">{item.modelName}</p>
              <p className="text-[10px] text-slate-500">Stock: {item.quantity} units</p>
            </div>
            <p className="text-emerald-400 font-mono font-bold text-sm">Rs. {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
