import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="surface-hero max-w-xl rounded-[2rem] p-10 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          The route you tried to open does not exist. Use the main portfolio page to get back to the current build.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full border border-primary/40 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-colors hover:bg-primary/90"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
