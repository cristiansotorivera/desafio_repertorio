import { Repertorio } from "../models/repertorio.model.js"
import { handleError } from "../database/errors.js"

export const getAllRepertorio = async (req, res) => {
    try {
        const canciones = await Repertorio.findAll()
        return res.json(canciones)
    } catch (error) {
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
export const getOneRepertorio = async (req, res) => {
    console.log(req.params)

    try {
        const { id } = req.params
        const canciones = await Repertorio.findOneById(id)
        return res.json(canciones)
    } catch (error) {
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
export const createRepertorio = async (req, res) => {


    try {
        const { titulo, artista, tono } = req.body
        if (!titulo || !artista || !tono) {
            return res.status(400).json({ ok: false, msg: 'todos los campos son obligatorios' })
        }
        const newRepertorio = {
            titulo,
            artista,
            tono
        }
        const canciones = await Repertorio.create(newRepertorio)
        console.log(canciones)
        return res.json(canciones)

    } catch (error) {
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
export const updateRepertorio = async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    try {
        const { id } = req.params
        const { titulo, artista, tono } = req.body
        const canciones = await Repertorio.update({
            id,
            titulo,
            artista,
            tono
        })
        return res.json(canciones)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
export const removeRepertorio = async (req, res) => {
    console.log(req.params)
    try {
        const { id } = req.params
        const canciones = await Repertorio.remove(id)
        return res.json(canciones)

    } catch (error) {
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}