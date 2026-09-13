

import { type Event, } from '../api';
import EventInputUI from './EventInputUI';

// Define a TypeScript interface for our API response
interface AddEventServicesProp {
    onCreatEvent: (e: React.SubmitEvent<HTMLFormElement>) => void;
    eventToEdit: Event | null;
    onHandleUpdateEvent: (e: React.SubmitEvent<HTMLFormElement>) => void;
    name: string;
    onSetname: (name: string) => void;
    eventType: string;
    onSeteventType: (eventType: string)=> void;
    city: string;
    onSetCity: (eventType: string) => void;
    guestCount: number;
    onSetGuestCount: (guestCount: number) => void;
    startDateTime: string;
    endDateTime: string;
    onSetStartDateTime: (startDateTime: string) => void;
    onSetEndDateTime: (endDateTime: string) => void;
}

function EventDetailsForm({onCreatEvent, eventToEdit, onHandleUpdateEvent, name, onSetname, eventType, onSeteventType,
    city, onSetCity, guestCount, onSetGuestCount, startDateTime, onSetStartDateTime, endDateTime, onSetEndDateTime
 }: AddEventServicesProp) {

    return (
        <form className='' onSubmit={eventToEdit === null ? onCreatEvent : onHandleUpdateEvent}>

            <EventInputUI type="text" placeholder="Enter Event Name" value={name} onChange={(e) => onSetname(e.target.value)}/>
            <EventInputUI type="text" placeholder="Enter eventType" value={eventType} onChange={(e) => onSeteventType(e.target.value)} />

            <div className="grid grid-cols-2 gap-3">                    
                <EventInputUI type={'text'} value={city} onChange={(e) => onSetCity(e.target.value)}/>
                <EventInputUI type="number" placeholder="Enter Guest Count" value={guestCount} onChange={(e) => onSetGuestCount(Number(e.target.value))}/>
            </div>
            <div className="grid grid-cols-2 gap-3 my-5">
                <div>
                    <label className="block mb-2">Start Date & Time</label>                           
                    <EventInputUI type="datetime-local" name="startDateTime" value={startDateTime} onChange={(e) => onSetStartDateTime(e.target.value)}/>
                                    
                </div>

                <div>
                    <label className="block mb-2">End Date & Time</label>

                    <EventInputUI type="datetime-local" name="endDateTime" value={endDateTime} onChange={(e) => onSetEndDateTime(e.target.value)} />
                </div>
            </div>
                           
            <button type='submit' value={'Create Event'}  name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                        transition delay-150 duration-300 ease-in-out' > 
                    Create Event 
            </button>
        </form>
    );
}

export default EventDetailsForm;