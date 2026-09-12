import type { Event } from "../api";


// Define a TypeScript interface for our API response
interface EachEvent {
  eventData: Event;
  onHandleUpdate: (event: Event)=> void;
  onDelete: (eventId: number) => void;
}

function EventCard({eventData, onDelete, onHandleUpdate}: EachEvent) {


    return (
        <div className='border p-5 rounded-lg'>
            <h5> {eventData.name}</h5>
                <p> {eventData.eventType}</p>

                <div>
                    <p>venue:</p>
                    <p>Date: {eventData.createdAt}</p>
                    <p>Time:</p>
                </div>

                <div className='mt-5 flex justify-end gap-3'>
                    <button onClick={()=> onHandleUpdate(eventData)}> Edit </button>
                    <button onClick={() => { onDelete(eventData.eventId)}}> Delete </button>
                </div>
        </div>
    );
}

export default EventCard;