import React from 'react';
import { MdFlightTakeoff } from "react-icons/md";

export default function PageHeader({ title = "Flight Overview" }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-5">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-4xl font-bold text-[#063970] flex items-center">
                    <MdFlightTakeoff className="mr-3" />
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-[#4a90e2]">Flight Dashboard</span>
                    <span id="breadcrumb-separator" className="text-gray-500">/</span>
                    <span id="breadcrumb-current" className="text-gray-500">Flight Status</span>
                </div>
            </div>
            <div id="action-button">
                <button id="add-button" className="bg-[#063970] hover:bg-[#4a90e2] text-white px-6 py-2 rounded-lg transition-colors duration-300">
                    Add Flight
                </button>
            </div>
        </div>
    );
}
