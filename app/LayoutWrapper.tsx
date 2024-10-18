const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-black dark:bg-dark-bg dark:text-white p-8">
      {children}
    </div>
  );
};

export default LayoutWrapper;
