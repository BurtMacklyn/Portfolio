import React from 'react';

import { motion } from 'framer-motion';
import animation from 'src/config/animation';

export default function SocialOutline(): JSX.Element {
  return (
    <motion.div
      variants={{
        close: {
          width: ['3.6rem', '3.6rem', '3.6rem', '0rem'],
          height: ['12.4rem', '0rem', '0rem', '0rem']
        },
        open: {
          width: ['0rem', '3.6rem', '3.6rem', '3.6rem'],
          height: ['0rem', '0rem', '0rem', '12.4rem']
        }
      }}
      initial="open"
      exit="close"
      animate="open"
      transition={{ type: 'linear', duration: animation.socialOutlineDuration }}
      className="header__socials--outline"
    ></motion.div>
  );
}
