export interface Address{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lang: string
    },
    phone: string,
    website: string
}