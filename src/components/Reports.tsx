import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ReportsProps {
  data: any;
}

const Reports = ({ data }: ReportsProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">District Reports</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>District</TableHead>
            <TableHead>Population</TableHead>
            <TableHead>Area (km²)</TableHead>
            <TableHead>Density</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Colombo</TableCell>
            <TableCell>2.3M</TableCell>
            <TableCell>699</TableCell>
            <TableCell>3,305</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Reports;