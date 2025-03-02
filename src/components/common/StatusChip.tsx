
import React from 'react';

type StatusType = 'pending' | 'approved' | 'rejected';

interface StatusChipProps {
  status: StatusType;
  className?: string;
}

const StatusChip: React.FC<StatusChipProps> = ({ status, className = '' }) => {
  const statusConfig = {
    pending: {
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      label: 'Pending',
    },
    approved: {
      color: 'bg-kirana-green text-green-700 border-green-200',
      label: 'Approved',
    },
    rejected: {
      color: 'bg-red-50 text-red-700 border-red-200',
      label: 'Rejected',
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`
        inline-flex items-center py-1 px-3 text-xs font-medium 
        rounded-full border transition-all duration-300
        ${config.color} ${className}
      `}
    >
      <span className="relative">
        <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-current opacity-70"></span>
        {config.label}
      </span>
    </div>
  );
};

export default StatusChip;
