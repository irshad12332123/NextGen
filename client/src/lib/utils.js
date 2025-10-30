import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function cleanText(str) {
  return str
    .replace(/[^\w\s]/g, "")  
    .replace(/\s+/g, " ")   
    .trim();           
}
