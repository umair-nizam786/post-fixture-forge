import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            This feature will be available soon.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
