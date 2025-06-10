const AnimatedTitle = ({ text, visible }) => {
  return (
    <h1 className={`uppercase text-6xl lg:text-7xl font-bold text-white transition-all duration-700 ease-[cubic-bezier(.77,0,.18,1)] delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block hover:animate-bounce hover:text-blue-400 transition-colors duration-200 cursor-default"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};
export default AnimatedTitle;