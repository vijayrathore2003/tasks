import React from "react";

type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl border font-medium shadow-sm transition
        ${active ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"}`}
    >
      {label}
    </button>
  );
}

export default React.memo(FilterButton);
