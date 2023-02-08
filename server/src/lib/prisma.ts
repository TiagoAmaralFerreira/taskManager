import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
    // Consulta query no console
    //log: ['query']
})