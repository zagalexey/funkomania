export interface Product {
    name: string
    category: Tag[]
    price: number
    image: string
    background: string
}

export interface Tag {
    name: string,
    color: string
}