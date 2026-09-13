import { useState } from "react";
import type { Event } from "../api";

interface EachEvent {
  eventData: Event;
  onHandleUpdate: (event: Event)=> void;
  onDelete: (eventId: number) => void;
  onPageToggle: (pageToggle: string) => void;
  onhandleViewEvent: (eventToView: Event) => void;
}

function EventCard({eventData, onDelete, onHandleUpdate, onPageToggle, onhandleViewEvent}: EachEvent) {
    
    const convertDate = (dateSet: string) => {
    return new Date(dateSet).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    console.log
};
    return (
        <div className='border border-[#042642] bg-[#042642] p-5 rounded-lg flex flex-col h-full shadow-xl/30'>
            <div>
                <h5 className="text-white "> {eventData.name}</h5>
                <p className="text-[#29A699]"> {eventData.eventType}</p>
            </div>

            <div className="text-white mt-4 text-[14px]">
                <p><b>Set Date:</b> {convertDate(eventData.startDateTime)}</p>
                <p><b>Status:</b> {eventData.status}</p>
            </div>

            <div className='mt-auto pt-5 flex justify-end gap-3'>
                <button onClick={()=> {onhandleViewEvent(eventData)}} className="bg-[#29A699] text-white hover:cursor-pointer hover:bg-[#198c80] rounded-md"> View </button>
                <button onClick={()=> {onHandleUpdate(eventData); onPageToggle('addEvent');}} className="bg-[#29A699] text-white hover:cursor-pointer hover:bg-[#198c80] rounded-md"> Edit </button>
                <button onClick={() => { onDelete(eventData.eventId)}} className="bg-[#f84242] text-white hover:cursor-pointer hover:bg-[#d42626] rounded-md"> Delete </button>
            </div>
        </div>
    );
}

export default EventCard;