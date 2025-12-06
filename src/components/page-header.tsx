export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  actions,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between pb-4 mb-6 ${className}`}>
      <div>
        <h1 className="text-present-1">{title}</h1>
        {subtitle && <p className="text-present-4">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
};
