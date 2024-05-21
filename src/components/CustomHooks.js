import { useEffect, useState } from "react";

export const useDataFromLocal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const existingDataString = localStorage.getItem("userData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    setData(existingData);
  }, []);

  return data;
};
