import { Request, Response } from 'express'
import { prisma } from '../prisma.js'
import bcrypt from 'bcrypt'
import { error } from 'console'


/**
 * Method Get Records
 * @param req 
 * @param res 
 * @returns Array
 */

export const getRecords = async (req: Request, res: Response) => {
    try {
        const data = await prisma.users.findMany()
        return res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' })
    }
}

/**
 * Method Get Record
 * @param req
 * @param res
 * @returns Object
 */

export const getRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    if (!id) {
        return res.status(400).json({ error: 'Id is missing' })
    }

    try {
        const data = await prisma.users.findUnique({
            where: { id },
        })
        return res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' })

    }
}

/**
 * Method Create Record
 * @param req
 * @param res
 * @returns Array
 */

export const createRecord = async (req: Request, res: Response) => {
    const { firstname, lastname, email, password, role, isActive } = req.body

    if (!firstname || !lastname || !email || !password || !role || !isActive) {
        return res.status(400).json({ error: 'All data is required' })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const data = await prisma.users.create({
            data: {
                firstname,
                lastname,
                email,
                password: hashedPassword,
                role,
                isActive: Boolean(isActive),
            }
        })
        return res.status(201).json(data)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

/**
 * Method Update Resord
 * @param req
 * @param res
 * @returns Object
 */

export const updateRecord = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    if (!id) {
        return res.status(400).json({ error: 'Id is missing' })
    }

    const { firstname, lastname, email, role, isActive } = req.body

    if (!firstname || !lastname || !email || !role || !isActive) {
        return res.status(400).json({ error: 'All data is required' })
    }

    try {
        const data = await prisma.users.update({
            where: { id },
            data: {
                firstname,
                lastname,
                email,
                role,
                isActive: Boolean(isActive)
            }
        })
        return res.status(201).json(data)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something whent wrong' })
    }
}