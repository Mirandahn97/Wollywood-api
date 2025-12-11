import { Role } from "@prisma/client";
import { title } from "process";

export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
    user: {
        id: 'number',
        firstname: 'string',
        lastname: 'string',
        email: 'string',
        password: 'string',
        role: 'string',
        isActive: 'boolean'
    },
    poster: {
        id: 'number',
        name: 'string',
        slug: 'string',
        description: 'string',
        image: 'string',
        width: 'number',
        height: 'number',
        pirce: 'number',
        stock: 'number',
        createdAt: 'date',
        updatedAt: 'date'
    },
    genre: {
        id: 'number',
        title: 'string',
        slug: 'string',
        createdAt: 'date',
        updatedAt: 'date'
    },
    cartline: {
        id: 'number',
        userId: 'number',
        posterId: 'number',
        quantity: 'number',
        createdAt: 'date'
    },
    userRating: {
        id: 'number',
        userId: 'number',
        posterId: 'number',
        numStars: 'number',
        createdAt: 'date'
    },
    genrePosterRel: {
        id: 'number',
        genreId: 'number',
        posterId: 'number'
    }

}