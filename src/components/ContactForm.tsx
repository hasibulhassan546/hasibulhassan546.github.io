import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const recipient = "hasibulgreen@gmail.com";

export default function ContactForm() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(`Message from Portfolio - ${name || "Anonymous"}`);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
    const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.open(mailto, "_self");
    setOpen(false);
  }

  function openGmail() {
    const subject = encodeURIComponent(`Message from Portfolio - ${name || "Anonymous"}`);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(url, "_blank");
    setOpen(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Contact Me</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>Send me a message — this opens your email client (or use Gmail).</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-2">Your name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-2">Your email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-2">Message</label>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message" />
          </div>

          <DialogFooter>
            <div className="flex gap-2">
              <Button type="submit">Send (App)</Button>
              <Button type="button" variant="ghost" onClick={openGmail}>
                Open in Gmail
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
