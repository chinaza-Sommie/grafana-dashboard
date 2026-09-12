export interface User{
    firstName: string,
    lastName: string,
    email: string,
    userId: number,
}

export interface LoginUser{
    email: string,
    password: string,
}
// const eventData = { eventName, description, city, guestCount, startDateTime, endDateTime, userId};
export interface Event{
    eventId: number,
    name: string,
    eventType: string,
    city: string,
    guestCount: number,
    startDateTime: string,
    endDateTime: string,
    // status: "prepping" | "inprogress" | "completed",
    user: User,
    totalAmount: string,
    status: string,
    createdAt: string;
}
// {
//         "agreedPrice": "",
//         "startDateTime": "2026-09-06T23:30:38.216646Z",
//         "bookingstatus": "",
//         "eventId": null,
//         "serviceId": null,
//         "bookingId": 1,
//         "createdAt": "2026-09-06T23:30:38.228803Z",
//         "updatedAt": "2026-09-06T23:30:38.228808Z"
//     },
export interface VendorBooking{
    bookingId: number,
    agreedPrice: string,
    bookingstatus: string,
    serviceId: VendorServices,
    eventId: Event,
}

export interface Categories{
    categoryName: string,
    description: string,

}

export interface VendorServices{
    serviceId: number;
    name: string,
    description: string,
    // agreedAmount: string;
    basePrice: number,
    serviceCategoryId: Categories;
    vendorsId: Vendors,
}

export interface Vendors{
    name: string,
    description: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    status: string,
}

export interface Api {
    // user service api
    addUser(data: Omit<User, 'userId'>): Promise<User>;
    loginUser(data: LoginUser): Promise<User>;

    // event service api
    addEvent(data: Omit<Event, 'eventId' | 'status' | 'createdAt'>): Promise<Event>; 
    getEventsByUsersId(id: number): Promise<Event[]>;
    removeEventById(id: number): Promise<void>;

    // categories service api
    getAllCategories(): Promise<Categories[]>;

    // venderService service api 
    getAllVendorServices(): Promise<VendorServices[]>;
    getVendorServiceById(id: number): Promise<VendorServices | undefined>;

    // vendors api
    getVendorsById(id: number): Promise<Vendors | undefined>;

    // vvendorBooking api
    addVendorBooking(data: Omit<VendorBooking, 'bookingId' | 'serviceId'>): Promise<VendorBooking>;
}

const BASE_URL = "http://localhost:8080/api";

// my endpoints
function ensureOk(response: Response, doing: string): void {
    if (!response.ok) {
        throw new Error(
            `Failed to ${doing}: the server responded with ` +
                `${response.status} ${response.statusText}. ` +
                `Is the API server running? Start it with: npm run api`,
        );
    }
}

const httpApi: Api = {

    async addUser(data) {
        const res = await fetch( `${BASE_URL}/users`, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })

        ensureOk(res, `add user with ${data.email}`);
        return (await res.json()) as User;
    },

    async loginUser(data){
        const res = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })

        ensureOk(res, `login user ${data.email}`);
        return (await res.json()) as User;
    },

    async addEvent(data){
        const res = await fetch(`${BASE_URL}/events` , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })

        ensureOk(res, `add event named ${data.name}`);
        return (await res.json()) as Event;
    },

    async getAllCategories(){
        const res = await fetch(`${BASE_URL}/service_categories`);
        ensureOk(res, `get all categories`);
        return (await res.json()) as Categories[];
    },

    // vendor services api 

    async getAllVendorServices() {
        const result = await fetch(`${BASE_URL}/vendor_services`);
        ensureOk(result, `get All Services offered`);
        return (await result.json()) as VendorServices[];
    },
    async getVendorServiceById(id) {
        const result = await fetch(`${BASE_URL}/vendor_services/${id}`);
        if(result.status === 404){
            return undefined;
        }
        ensureOk(result, `get Vendor services with id ${id}`);
        return (await result.json()) as VendorServices;
    },

    // get vendors by id
    async getVendorsById(id) {
        const result = await fetch(`${BASE_URL}/vendor/${id}`);
        if(result.status === 404){
            return undefined;
        }

        ensureOk(result, `get vendor by by id ${id}`);
        return (await result.json()) as Vendors;
    },

    async addVendorBooking(data) {
        const result = await fetch(``, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        ensureOk(result, `add vendor booking`);
        return (await result.json()) as VendorBooking;
    },

    async getEventsByUsersId(id){
        const result = await fetch(`${BASE_URL}/events/user/${id}`);
        ensureOk(result, `get events for user id ${id} `);
        return (await result.json()) as Event[];
    },

    async removeEventById(id) {
        const response = await fetch(`${BASE_URL}/events/${id}`, {
            method: 'DELETE',

        });
        ensureOk(response, `remove event with id ${id}`);

    },

}

export const api: Api = httpApi;
