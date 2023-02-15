type TContainer = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ children, className }: TContainer) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Container;
