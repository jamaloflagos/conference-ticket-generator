"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface TicketData {
  fullname: string;
  email: string;
  username: string;
  filePreview: string | null;
}

const TicketContext = createContext<{
  data: TicketData;
  setData: (data: TicketData) => void;
}>({
  data: { fullname: "", email: "", username: "", filePreview: null },
  setData: () => {},
});

export const useTicket = () => useContext(TicketContext);

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TicketData>({
    fullname: "",
    email: "",
    username: "",
    filePreview: null,
  });

  return (
    <TicketContext.Provider value={{ data, setData }}>
      {children}
    </TicketContext.Provider>
  );
};
