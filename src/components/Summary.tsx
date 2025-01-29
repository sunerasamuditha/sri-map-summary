import { Card } from "@/components/ui/card";

interface SummaryProps {
  data: any;
}

const Summary = ({ data }: SummaryProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Summary Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Districts</h3>
          <p className="text-2xl font-bold text-primary">25</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Population</h3>
          <p className="text-2xl font-bold text-primary">22.1M</p>
        </Card>
      </div>
    </div>
  );
};

export default Summary;