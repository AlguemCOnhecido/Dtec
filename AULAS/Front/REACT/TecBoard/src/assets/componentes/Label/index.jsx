import './Label.css'
export function Label({ children, htmlfor }) {
    return (
        <label htmlFor={htmlfor}>
            {children}
        </label>
    )
}