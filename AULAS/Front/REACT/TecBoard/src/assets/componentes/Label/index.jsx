import './Label.css'
export function label({ children, htmlfor }) {
    return (
        <label htmlFor={htmlfor}>
            {children}
        </label>
    )
}