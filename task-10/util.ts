
export type ItemType = {
    id: number
    image: string,
    price: number,
    title: string,
    description: string,
}

export const items: ItemType[] = [
    {
        id: 1,
        image: "https://readymadeui.com/images/product9.webp",
        price: 10,
        title: "Sole Elegance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        image: "https://readymadeui.com/images/product10.webp",
        price: 12,
        title: "Sneeker-2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        image: "https://readymadeui.com/images/product11.webp",
        price: 15,
        title: "Sneeker-3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        image: "https://readymadeui.com/images/product12.webp",
        price: 18,
        title: "sneeker-4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 5,
        image: "https://readymadeui.com/images/product13.webp",
        price: 25,
        title: "sneeker-5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
]

export const setLocalStorageValue = (key: string, value: any) => {
    try {
        let _value = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, _value)
    } catch (error) {
        console.error("Error setting value in localStorage. ", error)
    }
}


export const getLocalStorageValue = (key: string) => {
    try {
        let value = localStorage.getItem(key);
        if(value) return JSON.parse(value);
        return null;
    } catch (error) {
        console.error("Error getting value in localStorage. ", error)
        return null;
    }
}