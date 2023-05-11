import { motion } from "framer-motion";


export const Background = () => {
  return ( <div>

  < img className=" test" src="https://www.iceturtlestudios.com/wp-content/uploads/2022/07/logo512x512-e1656703794928.png"></img>
  <h1>Ice Turtle Time !!! </h1>

    <  motion.div
      className="background"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         
      />
 </div> );
}


