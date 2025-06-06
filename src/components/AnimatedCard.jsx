import { m, LazyMotion, domAnimation } from "framer-motion";

const AnimatedCard = ({ title, subtitle, content }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-white shadow-2xl rounded-lg p-6 max-w-md mx-auto my-10"
      >
        <span className="text-indigo-500 uppercase text-sm font-semibold tracking-widest opacity-70">
          {subtitle}
        </span>
        <h2 className="text-3xl font-bold mb-2 text-gray-800 font-sans">
          {title?.split("").map((char, index) =>
            char === " " ? " " : (
              <span key={index} className="bounce inline-block">{char}</span>
            )
          )}
        </h2>
        <p className="text-gray-600 text-md">{content}</p>
      </m.div>
    </LazyMotion>
  );
};

export default AnimatedCard;
