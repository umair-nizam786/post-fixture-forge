import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "@tanstack/react-router";

export function ComingSoonDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Coming soon</DialogTitle>
          <DialogDescription>
            We are launching soon!&nbsp;
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex justify-center">
          <Link
            to="/request-access"
            className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-cloud transition-colors hover:bg-slate"
          >
            REQUEST EARLY ACCESS
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
