'use client';
import {motion} from 'framer-motion';
import { Batch } from '../ui/Batch';

const stack1 = [
  "Next.js", "React", "TailwindCSS", "Framer Motion", 
  "TypeScript", "Node.js", "PostgreSQL", "Prisma"
];
const stack2 = [
  "Next.js", "React", "TailwindCSS", "Framer Motion", 
  "TypeScript", "Node.js", "PostgreSQL", "Prisma"
];

export const Stack = () => {
 return (
    <div>
        <h2 className='instrument-serif-regular-italic text-xl mb-4 '>
         Tools and Technologies
        </h2>
    <div className='flex flex-col gap-4 w-full overflow-hidden'>
     <motion.div className='flex flex-nowrap gap-4' animate={{x:"-50%"}} transition={{ease:"linear", duration:60, repeat:Infinity,}}>
        {
            [...stack1, ...stack1,...stack1].map((item, index)=> (
                <Batch key={index}>
                    <span className=''>
                        {item}
                    </span>
                </Batch>
            
            ))
        }
     </motion.div>
      <motion.div className='flex flex-nowrap gap-4' initial={{ x: "-50%" }}
    animate={{ x: 0 }} transition={{ease:"linear", duration:60, repeat:Infinity,}}>
        {
            [...stack2, ...stack2,...stack2].map((item, index)=> (
                <Batch key={index}>
                    <span className=''>
                        {item}
                    </span>
                </Batch>
            
            ))
        }
     </motion.div>
    </div>
    </div>
 )
}