import { useState } from "react";
import Map from "@/components/Map";
import Summary from "@/components/Summary";
import Reports from "@/components/Reports";
import DataLoader from "@/components/DataLoader";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [districtData, setDistrictData] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Sri Lanka District Data Dashboard</h1>
        
        <DataLoader onDataLoad={setDistrictData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2 p-4">
            <Map data={districtData} />
          </Card>
          <Card className="p-4">
            <Summary data={districtData} />
          </Card>
        </div>
        
        <Card className="p-4">
          <Reports data={districtData} />
        </Card>
      </div>
    </div>
  );
};

export default Index;