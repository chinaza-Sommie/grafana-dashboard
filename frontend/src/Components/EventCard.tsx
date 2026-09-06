

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function EventCard() {

    return (
        <div className='border p-5 rounded-lg'>
            <h5> Birthday Party</h5>
                <p> 25th birthday party!!!</p>

                <div>
                    <p>venue:</p>
                    <p>Date:</p>
                    <p>Time:</p>
                </div>

                <div className='mt-5 flex justify-end gap-3'>
                    <button > Edit </button>
                    <button> Delete </button>
                </div>
        </div>
    );
}

export default EventCard;