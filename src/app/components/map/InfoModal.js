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
            <p>Altitude: {log.location.altitude}</p>
          </div>

          <div>
            <h3 className="font-semibold">Drone Status:</h3>
            <p>{log.status}</p>
          </div>

          {log.image && (
            <>
              <div>
                <img
                  src={`data:image/jpeg;base64,${log.image}`}
                  alt="Drone View"
                />
              </div>
              <div>
                <h3 className="font-semibold">Human Detected:</h3>
                <p>{log.score}</p>
              </div>
              <div>
                <h3 className="font-semibold">Bounding boxes</h3>
                <p>{log.bounding_boxes}</p>
              </div>
              <div>
                <h3 className="font-semibold">Description:</h3>
                <p>{log.text}</p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
