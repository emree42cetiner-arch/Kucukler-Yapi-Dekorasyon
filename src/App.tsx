import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import AlcapanAsmaTavan from "./pages/AlcapanAsmaTavan";
import DisCepheBoya from "./pages/DisCepheBoya";
import ZeminKaplama from "./pages/ZeminKaplama";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hizmetler/alcipan-asma-tavan" element={<AlcapanAsmaTavan />} />
          <Route path="/hizmetler/dis-cephe-boya" element={<DisCepheBoya />} />
          <Route path="/hizmetler/zemin-kaplama" element={<ZeminKaplama />} />
          <Route path="/hizmetler/:slug" element={<ServicePage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
