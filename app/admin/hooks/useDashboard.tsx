import { useState } from "react";

export default function useDashboard() {
  const [reports, setReports] = useState([]);

  const downloadReports = () => {};

  return { reports, downloadReports };
}
