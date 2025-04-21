import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function logDetailsModal({ open, onOpenChange, log }) {
  if (!log) return null;

  const date = new Date(log.timestamp);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>log Details</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4 text-sm text-gray-900">
          <div>
            <h3 className="font-semibold">Date:</h3>
            <p>{date.toString()}</p>
          </div>

          <div>
            <h3 className="font-semibold">Coordinates:</h3>
            <p>Longitude: {log.location.longitude}</p>
            <p>Latitude: {log.location.latitude}</p>
          </div>

          <div>
            <h3 className="font-semibold">Detected:</h3>
            <p>{log.status ? "Yes" : "No"}</p>
          </div>

          <div>
            <h3 className="font-semibold">Description:</h3>
            <p>{log.text}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
