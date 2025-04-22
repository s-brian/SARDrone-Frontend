import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function InstanceDetailsModal({ open, onOpenChange, instance }) {
  if (!instance) return null;

  const date = new Date(instance.timestamp);
  const imagesrc = `data:image/jpeg;base64,${instance.image}`
  console.log(instance.image)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Instance Details</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4 text-sm text-gray-900">
          <div>
            <img src={imagesrc} alt="Drone Capture" />
          </div>

          <div>
            <h3 className="font-semibold">Date:</h3>
            <p>{date.toString()}</p>
            <p>{instance.timestamp}</p>
          </div>

          <div>
            <h3 className="font-semibold">Coordinates:</h3>
            <p>Longitude: {instance.location.longitude}</p>
            <p>Latitude: {instance.location.latitude}</p>
          </div>

          <div>
            <h3 className="font-semibold">Detected:</h3>
            <p>{instance.status ? "Yes" : "No"}</p>
          </div>

          <div>
            <h3 className="font-semibold">Description:</h3>
            <p>{instance.text}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}