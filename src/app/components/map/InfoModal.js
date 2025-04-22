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
      <DialogContent className="max-w-[95vw] !items-start !block">
        <DialogHeader className="pb-2">
          <DialogTitle>Log Details</DialogTitle>
        </DialogHeader>

        <div className="grid gap-2 py-2 text-sm text-gray-900">
          {log.image ? (
            <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
              <div className="space-y-2 order-2 md:order-1 overflow-y-auto max-h-[70vh]">
                <div>
                  <h3 className="font-semibold">Date:</h3>
                  <p>{date.toString()}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Drone Status:</h3>
                  <p>{log.status}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Coordinates:</h3>
                  <p>Longitude: {log.location.longitude}</p>
                  <p>Latitude: {log.location.latitude}</p>
                  <p>Altitude: {log.location.altitude}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Human Detected:</h3>
                  <p>{log.score > 85 ? "Yes" : "No"} ({Math.round(log.score)}% confidence)</p>
                </div>

                <div>
                  <h3 className="font-semibold">Bounding boxes:</h3>
                  <p>{log.bounding_boxes}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Description:</h3>
                  <p>{log.text}</p>
                </div>
              </div>

              {/* Right side image */}
              <div className="order-1 md:order-2 max-h-[70vh]">
                <img
                  src={`data:image/jpeg;base64,${log.image}`}
                  alt="Drone View"
                  className="max-h-[70vh] w-auto object-contain object-left"
                />
              </div>
            </div>
          ) : (
            // No image layout
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold">Date:</h3>
                <p>{date.toString()}</p>
              </div>

              <div>
                <h3 className="font-semibold">Drone Status:</h3>
                <p>{log.status}</p>
              </div>

              <div>
                <h3 className="font-semibold">Coordinates:</h3>
                <p>Longitude: {log.location.longitude}</p>
                <p>Latitude: {log.location.latitude}</p>
                <p>Altitude: {log.location.altitude}</p>
              </div>

              {log.text && (
                <div>
                  <h3 className="font-semibold">Description:</h3>
                  <p>{log.text}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
