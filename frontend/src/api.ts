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
    name: string,
    eventType: string,
    city: string,
    guestCount: number,
    startDateTime: string,
    endDateTime: string,
    // status: "prepping" | "inprogress" | "completed",
    userId: User;
    totalAmount: number;
    status: string,
    createdAt: Date;
}

export interface VendorBooking{
    agreedPrice: string,
    bookingstatus: string,
    serviceId: VendorServices,
    bookingId: 1,
}

export interface Categories{
    categoryName: string,
    description: string,

}

export interface VendorServices{
    name: string,
    description: string,
    basePrice: number,
    // vendorsId: Vendor,
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
    addUser(data: Omit<User, 'userId'>): Promise<User>;
    loginUser(data: LoginUser): Promise<User>;
    addEvent(data: Omit<Event, 'status' | 'createdAt'>): Promise<Event>;
    getAllCategories(): Promise<Categories[]>;
    getVendorServiceById(id: number): Promise<VendorServices | undefined>;
    getVendorsById(id: number): Promise<Vendors | undefined>;
    addVendorBooking(data: Omit<VendorBooking, 'bookingId' | 'serviceId'>): Promise<VendorBooking>;
    getEventsByUsersId(id: number): Promise<Event[]>;
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
        const result = await fetch(`${BASE_URL}/api/events/user/${id}`);
        ensureOk(result, `get events for user id ${id} `);
        return (await result.json()) as Event[];
    },
    
}

export const api: Api = httpApi;
