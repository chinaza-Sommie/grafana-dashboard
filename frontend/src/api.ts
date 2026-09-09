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
export interface Api {
    addUser(data: Omit<User, 'userId'>): Promise<User>;
    loginUser(data: LoginUser): Promise<User>;
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
    }
}

export const api: Api = httpApi;
