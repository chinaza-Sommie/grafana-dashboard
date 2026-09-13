
import { type Event } from '../api';

interface ViewEventProp {
    eventToView: Event | null;
    onPageToggle: (pageToggle: string) => void;
}

function ViewEvent({ eventToView, onPageToggle }: ViewEventProp) {

    if (eventToView === null) {
        return null;
    }

    // Convert ISO date/time into something easier to read
    const startDate = new Date(eventToView.startDateTime);
    const endDate = new Date(eventToView.endDateTime);
    const createdDate = new Date(eventToView.createdAt);

    const formatDateTime = (date: Date) => {
        return date.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="mx-[10%] lg:mx-[20%]">

            {/* Back button */}
            <p
                className="mb-4 px-5 text-[#29A699] font-bold hover:cursor-pointer hover:underline"
                onClick={() => onPageToggle('events')}
            >
                ← Back to Dashboard
            </p>

            {/* Event card */}
            <div className="bg-[#042642] text-white py-[40px] px-[30px] lg:px-[50px] rounded-lg shadow-xl">

                {/* Event title */}
                <h2 className="text-2xl font-bold mb-8 text-[#29A699]">
                    {eventToView.name}
                </h2>

                {/* Event details */}
                <div className="space-y-5">

                    <div>
                        <p className="font-bold">Event ID</p>
                        <p className="text-gray-300">
                            {eventToView.eventId}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Event Name</p>
                        <p className="text-gray-300">
                            {eventToView.name}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Event Type</p>
                        <p className="text-gray-300">
                            {eventToView.eventType}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Status</p>
                        <p className="text-gray-300 capitalize">
                            {eventToView.status}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Guest Count</p>
                        <p className="text-gray-300">
                            {eventToView.guestCount}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Start Date & Time</p>
                        <p className="text-gray-300">
                            {formatDateTime(startDate)}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">End Date & Time</p>
                        <p className="text-gray-300">
                            {formatDateTime(endDate)}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Total Amount</p>
                        <p className="text-gray-300">
                            {eventToView.totalAmount
                                ? eventToView.totalAmount
                                : 'Not available'}
                        </p>
                    </div>

                    <div>
                        <p className="font-bold">Created At</p>
                        <p className="text-gray-300">
                            {formatDateTime(createdDate)}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ViewEvent;

