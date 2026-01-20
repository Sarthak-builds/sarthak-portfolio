'use client';
import { motion } from 'framer-motion';
import { Batch } from '../ui/Batch';
import { stack1, stack2 } from '@/data/stack'; 

export const Stack = () => {
 return (
    <div className='mt-50'>
        <h2 className='instrument-serif-regular-italic text-2xl mb-4 text-white/90'>
         Tools and Technologies
        </h2>
        
    <div className='flex flex-col gap-4 w-full overflow-hidden hanken-grotesk'>
      <motion.div 
        className='flex flex-nowrap gap-4 hanken-grotesk' 
        animate={{x:"-50%"}} 
        transition={{ease:"linear", duration:60, repeat:Infinity}}
      >
        {[...stack1, ...stack1, ...stack1].map((item, index)=> (
            <Batch key={`${item.name}-${index}`}>
               <div className="flex items-center gap-2 px-1">
                   <item.icon 
                      className="w-5 h-7" 
                      style={{ color: item.color }} 
                   />
                   <span className='text-gray-200 whitespace-nowrap'>
                       {item.name}
                   </span>
               </div>
            </Batch>
        ))}
      </motion.div>
      <motion.div 
        className='flex flex-nowrap gap-4' 
        initial={{ x: "-50%" }}
        animate={{ x: 0 }} 
        transition={{ease:"linear", duration:60, repeat:Infinity}}
      >
        {[...stack2, ...stack2, ...stack2].map((item, index)=> (
            <Batch key={`${item.name}-${index}`}>
                <div className="flex items-center gap-2 px-1">
                   <item.icon 
                      className="w-6 h-7" 
                      style={{ color: item.color }} 
                   />
                   <span className='text-gray-200 whitespace-nowrap'>
                       {item.name}
                   </span>
               </div>
            </Batch>
        ))}
      </motion.div>

    </div>
    </div>
 )
}