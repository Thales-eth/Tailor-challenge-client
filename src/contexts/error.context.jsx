import { createContext, useState } from "react"

const ErrorContext = createContext()

const ErrorWrapper = (props) => {
    const [errors, setErrors] = useState([])

    return (
        <ErrorContext.Provider value={{ errors, setErrors }}>{props.children}</ErrorContext.Provider>
    )
}

export { ErrorContext, ErrorWrapper }   