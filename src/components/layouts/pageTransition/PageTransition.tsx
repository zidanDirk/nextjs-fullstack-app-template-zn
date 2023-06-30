import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export interface IPageTransition extends React.ComponentPropsWithoutRef<'div'> {}

const variants = {
  hidden: { opacity: 0, x: -200, y: 32 },
  enter: { opacity: 1, x: 32, y: 32 },
  exit: { opacity: 0, x: -200, y: 32 },
}

const PageTransition: React.FC<IPageTransition> = ({ children }) => {
  const router = useRouter()
  const pageKey = router.asPath
  
  return (
    <motion.div
      key={ pageKey }
      variants={variants} 
      initial="hidden" 
      animate="enter" 
      exit="exit"
      transition={{ type: 'linear' }} //
		>
			{children}
		</motion.div>
  );
};

export default PageTransition;
