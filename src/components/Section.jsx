// export default function Section({title, children, id, className}){
export default function Section({title, children, ...props}){
    return (
        // <section id={id} className={className}>
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}