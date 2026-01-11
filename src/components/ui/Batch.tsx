import React from "react"

 interface BatchProps {
  children: React.ReactNode;
  key:any;
 }
export const Batch = ({children, ...props}:BatchProps) => {
  return (
    <div className=" relative bg-white/8 text-[13px] px-4 py-1 text-center flex items-center rounded-3xl hanken-grotesk">
     {children}
    </div>
  )
}