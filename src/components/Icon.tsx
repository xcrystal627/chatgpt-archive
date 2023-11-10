import { Check, ChevronRight, Folder, MessageSquare } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export function SuccessIcon() {
  return (
    <div className="flex items-center justify-center bg-green-600 rounded-full select-none w-7 h-7">
      <Check size={20} />
    </div>
  );
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
};

export function MessageIcon({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <MessageSquare
      className="flex-none mr-2"
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
      }}
    />
  );
}

export function FolderIcon({ size }: { size: "sm" | "md" | "lg" }) {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };
  return (
    <Folder
      className="flex-none mr-2"
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
      }}
    />
  );
}

export function ToggleIcon({
  onClick,
  open,
}: {
  onClick: () => void;
  open: boolean;
}) {
  return (
    <div
      className="transition-transform icon-container icon-container-sm"
      onClick={onClick}
      style={{
        transform: open ? "rotate(90deg)" : "",
      }}
    >
      <ChevronRight
        style={{
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

export function MessageIconWithSelection({
  size = "md",
  selected,
  enabled,
  id,
  handleToggle,
}: {
  size?: "sm" | "md" | "lg";
  selected: boolean;
  enabled: boolean;
  id: string;
  handleToggle: React.MouseEventHandler<HTMLButtonElement>;
}) {
  if (enabled) {
    return (
      <Checkbox
        id={id}
        checked={selected}
        onClick={handleToggle}
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
        }}
      />
    );
  }
  return (
    <div className="relative group fcenter">
      <Checkbox
        id={id}
        checked={selected}
        className="relative z-10 opacity-0 group-hover:opacity-100"
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
        }}
        onClick={handleToggle}
      />
      <MessageSquare
        style={{
          width: sizeMap[size],
          height: sizeMap[size],
        }}
        className="absolute group-hover:opacity-0 trans"
      />
    </div>
  );
}
