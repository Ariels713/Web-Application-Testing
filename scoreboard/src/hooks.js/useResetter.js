import { useState } from 'react'

export const useResetter = ()  => {
    const [value, setValue] = useState()

    const eventHandler = () => {
        setValue(value + 1)
    }

    return [eventHandler]

}