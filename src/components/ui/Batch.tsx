import React from "react"

 interface BatchProps {
  children: React.ReactNode;
  key:any;
 }
export const Batch = ({children, ...props}:BatchProps) => {
  return (
    <div className=" relative inline-flex items-center justify-center px-4 py-1.5 
                bg-white/5 backdrop-blur-md border border-white/10 
                text-[15px] font-medium text-white/90 tracking-wide 
                rounded-full shadow-sm hanken-grotesk
                transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/20">
     {children}
    </div>
  )
}