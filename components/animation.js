export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const firstName = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1, //right to left
    },
  },
};
export const scrollDown = {
  initial: {
    x: 200,

    transition: {
      delay: 2,
    },
  },
  animate: {
    x: 0,
    transition: {
      delay: 2.5,

      delayChildren: 2.5,
      staggerChildren: 0.04,
      staggerDirection: 1, //right to left
    },
  },
};

export const letter = {
    initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
export const letterScroll = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ...transition },
  },
};

export const fullStackTitle = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,
      delayChildren: 0.5,
      staggerChildren: 0.09,
      staggerDirection: 1, //right to left
    },
  },
};
export const fullStackLetter = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 5, ...transition },
  },
};

export const scrollAnimation = {
  initial: {
    y: -570,
  },
  animate: {
    y: 0,
    transition: { delay: 1.7, duration: 1, ...transition },
  },
};

export const ballAnimatin = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: { delay: 1.4, duration: 0.5, ...transition },
  },
};
