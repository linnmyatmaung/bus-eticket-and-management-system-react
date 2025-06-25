import { router } from "@/config/routes";
import "./index.css";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
        <Toaster />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
