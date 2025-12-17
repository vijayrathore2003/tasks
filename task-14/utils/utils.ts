import type { User } from "../api";


export function localStoreMap(myMap: Map<string, User>, key: string) {
    const mapAsString = JSON.stringify(Array.from(myMap));
    localStorage.setItem(key, mapAsString);
}

export function getLocalStoreMap(key: string): Map<string, User> {
    const mapAsString = localStorage.getItem(key);
    if (mapAsString) {
        const mapAsArray = JSON.parse(mapAsString);
        return new Map<string, User>(mapAsArray);
    }
    return new Map<string, User>();
}