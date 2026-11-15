import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ComeBackProps {
  to?: string;
  label?: string;
}

export const ComeBack = ({ to = "/", label = "Come back" }: ComeBackProps) => (
  <div className="relative z-10 flex justify-center px-4 py-12 sm:py-16">
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-6 py-3 font-dev text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <ArrowLeft
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
        aria-hidden="true"
      />
      {label}
    </Link>
  </div>
);
