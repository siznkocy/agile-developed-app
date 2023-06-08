interface ChildrenProps {
  children: React.ReactNode;
  center?: boolean;
}

export const LineSectionTemplate = ({ children, center }: ChildrenProps) => {
  return (
    <div className={`py-2 space-y-2 ${center ? "text-center" : ""}`}>
      {children}
    </div>
  );
};
