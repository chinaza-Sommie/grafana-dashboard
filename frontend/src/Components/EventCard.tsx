import type { Event } from "../api";

interface EachEvent {
  eventData: Event;
  onHandleUpdate: (event: Event)=> void;
  onDelete: (eventId: number) => void;
}

function EventCard({eventData, onDelete, onHandleUpdate}: EachEvent) {


    return (
        <div className='border border-[#042642] bg-[#042642] p-5 rounded-lg flex flex-col h-full shadow-xl/30'>
            <div>
                <h5 className="text-white "> {eventData.name}</h5>
                <p className="text-[#29A699]"> {eventData.eventType}</p>
            </div>

            <div className="text-white mt-4 text-[14px]">
                <p><b>venue:</b></p>
                <p><b>Date:</b> {eventData.createdAt}</p>
                <p><b>Time:</b></p>
            </div>

            <div className='mt-auto pt-5 flex justify-end gap-3'>
                <button onClick={()=> onHandleUpdate(eventData)} className="bg-[#29A699] text-white hover:cursor-pointer hover:bg-[#198c80] rounded-md"> Edit </button>
                <button onClick={() => { onDelete(eventData.eventId)}} className="bg-[#f84242] text-white hover:cursor-pointer hover:bg-[#d42626] rounded-md"> Delete </button>
            </div>
        </div>
    );
}

export default EventCard;