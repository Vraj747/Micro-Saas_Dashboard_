import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { KPIData } from '../../types/analytics';

interface KPICardProps {
  data: KPIData;
}

export const KPICard: React.FC<KPICardProps> = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{data.title}</p>
        <h3 className="text-2xl font-bold mt-1">{data.value}</h3>
        <p className={`text-sm flex items-center mt-2 ${
          data.trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {data.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span>{data.change}%</span>
        </p>
      </div>
    </div>
  </div>
);
