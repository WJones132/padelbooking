import type player = require("./player")

export const enum status {
    'AVAILABLE',
    'PENDING',
    'CONFIRMED',
    'CANCELLED'
}

export interface Booking {
    id: string
    courtId: number
    startTime: Date
    players: player.Player[]
    status: status
}