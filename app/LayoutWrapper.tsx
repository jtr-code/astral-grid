const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-gray-50 min-h-screen w-full p-4">{children}</div>;
};

export default LayoutWrapper;
