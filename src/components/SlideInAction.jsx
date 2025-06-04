import { m, LazyMotion, domAnimation } from "framer-motion";

const SlideInSection = ({ children }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }} // animate every time in view, 30% visible
        className="your-tailwind-classes-here"
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default SlideInSection;
