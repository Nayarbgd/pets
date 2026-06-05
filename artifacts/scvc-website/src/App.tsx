import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Reviews from "@/pages/reviews";
import Contact from "@/pages/contact";
import Book from "@/pages/book";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import MobileCTABar from "@/components/shared/MobileCTABar";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: -8,  transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] } },
};

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Switch key={location} location={location}>
        <Route path="/">
          <AnimatedPage><Home /></AnimatedPage>
        </Route>
        <Route path="/services">
          <AnimatedPage><Services /></AnimatedPage>
        </Route>
        <Route path="/about">
          <AnimatedPage><About /></AnimatedPage>
        </Route>
        <Route path="/reviews">
          <AnimatedPage><Reviews /></AnimatedPage>
        </Route>
        <Route path="/contact">
          <AnimatedPage><Contact /></AnimatedPage>
        </Route>
        <Route path="/book">
          <AnimatedPage><Book /></AnimatedPage>
        </Route>
        <Route>
          <AnimatedPage><NotFound /></AnimatedPage>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-[100dvh]">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <MobileCTABar />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
