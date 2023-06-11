import { SelectChangeEvent } from "@mui/material";

export interface SortProps {
  items: number;
  getSortOpt: (e: SelectChangeEvent) => void;
  currentOpt: string;
  clearCompleted: () => void;
}