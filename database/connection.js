import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg

const connectionString = process.env.POSTGRES_URL
export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true
})

try {
    console.log('database conectada')
} catch (error) {
    console.log(error)
}