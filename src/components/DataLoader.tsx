import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface DataLoaderProps {
  onDataLoad: (data: any) => void;
}

const DataLoader = ({ onDataLoad }: DataLoaderProps) => {
  const [sheetUrl, setSheetUrl] = useState("");

  const handleLoad = async () => {
    try {
      // TODO: Implement Google Sheets API integration
      toast({
        title: "Loading data...",
        description: "This feature will be implemented in the next version.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load data from Google Sheets",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Enter Google Sheet URL"
        value={sheetUrl}
        onChange={(e) => setSheetUrl(e.target.value)}
        className="max-w-xl"
      />
      <Button onClick={handleLoad}>Load Data</Button>
    </div>
  );
};

export default DataLoader;