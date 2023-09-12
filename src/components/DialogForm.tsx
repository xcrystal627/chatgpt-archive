import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { SpinnerIcon } from "./Spinner";
import { useEffect, useState } from "react";
import { MESSAGE_ACTIONS } from "@src/constants";
import { useAtom } from "jotai";
import { bgResponseStatusAtom } from "@src/pages/content/context";

export function DialogForm<FormValues>({
  title,
  inputs,
  onSubmit,
  showLabel,
  setOpen,
}: {
  title: string;
  inputs: {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
  }[];
  onSubmit: (data: FormValues) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showLabel?: boolean;
}) {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useAtom(bgResponseStatusAtom);

  useEffect(() => {
    if (responseStatus.status) {
      console.log("Receive response", responseStatus);
      setLoading(false);
      setResponseStatus({});
    }
  }, [responseStatus]);

  console.log("render dialog form", { inputs });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="py-8 space-y-3">
          {inputs.map((input, i) => (
            <div className="space-y-2" key={i}>
              {showLabel && <Label>{input.label}</Label>}
              <Input
                placeholder={input.placeholder}
                {...register(input.name, { required: true })}
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <div className="flex items-center gap-4">
            {loading && <SpinnerIcon size={24} />}
            <Button variant="default" type="submit">
              Create
            </Button>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}