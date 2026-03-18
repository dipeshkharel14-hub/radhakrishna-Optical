"use client"
import React from 'react'

const fields = ['SPH', 'CYL', 'AXIS', 'ADD'] as const;

export default function PrescriptionMatrix({ register }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 glass rounded-3xl">
      {['Right', 'Left'].map((eye) => (
        <div key={eye} className="space-y-3">
          <h3 className="text-emerald-400 font-bold text-[10px] uppercase tracking-[0.2em]">{eye} Eye</h3>
          <div className="grid grid-cols-2 gap-3">
            {fields.map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-[10px] text-slate-500 mb-1">{field}</label>
                <input
                  {...register(`${eye.toLowerCase()}.${field.toLowerCase()}`)}
                  className="bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-white focus:border-emerald-500 outline-none text-sm"
                  placeholder="0.00"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
