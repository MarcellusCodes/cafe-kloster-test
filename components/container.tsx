type TContainer = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ children, className, ref }: TContainer) => {
  return (
    <div ref={ref} className={`container mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
