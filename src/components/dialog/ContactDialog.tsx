"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactDialogProps {
  email: string;
  phoneNumber: string;
}
const ContactDialog = ({ email, phoneNumber }: ContactDialogProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Dialog>
      <DialogTrigger>Contact Details</DialogTrigger>
      <DialogContent>
        <DialogHeader className="">
          <DialogTitle className="mb-4">Contact Detail</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg text-black font-medium mb-1">
                    Phone Number
                  </p>
                  <p className="text-base">1234567890</p>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => copyToClipboard(email)}
                >
                  Copy
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg text-black font-medium mb-1">
                    Email Address
                  </p>
                  <p className="text-base">partharora2233@gmail.com</p>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => copyToClipboard(phoneNumber)}
                >
                  Copy
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
