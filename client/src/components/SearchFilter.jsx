import React from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const SearchFilterBar = () => {
  return (
    <div className="w-full bg-white p-3 md:p-6 rounded-md shadow-sm flex md:flex-row flex-col md:items-center justify-between gap-2 md:gap-3">
      <div className="flex items-center w-1/2 bg-gray-50 rounded-md px-3 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search events..."
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 md:text-sm text-[3dvw]"
        />
      </div>

      <Select className="">
        <SelectTrigger className="w-1/4  text-gray-700 text-sm  px-3 py-2 border border-gray-200 focus:ring-2 focus:ring-blue-500">
          <SelectValue placeholder="All Types" />
        </SelectTrigger>
        <SelectContent className={"bg-white"}>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="engineering">Workshop</SelectItem>
          <SelectItem value="design">Hackathon</SelectItem>
        </SelectContent>
      </Select>

      <Select className="">
        <SelectTrigger className="w-1/4  text-gray-700 text-sm  px-3 py-2 border border-gray-200 focus:ring-2 focus:ring-blue-500">
          <SelectValue placeholder="All Departments" />
        </SelectTrigger>
        <SelectContent className={"bg-white"}>
          <SelectItem value="all">All Departments</SelectItem>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="business">Business</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchFilterBar;
