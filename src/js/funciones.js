import { useEffect } from "react"

export const tituloDinamico = (titulo) => {

    let title = ''
    useEffect(() => {

        title = document.title = `DanDev | ${titulo}`

    }, []);

    return title;
}