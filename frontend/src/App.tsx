import { Routes, Route } from "react-router-dom";
import { Form } from "@/pages/Form";
import { HomePage } from "@/pages/HomePage";
import { Toaster } from "@/components/ui/sonner";

export function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}
