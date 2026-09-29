import { useState } from "react"
import type { ReactNode } from "react"
import styles from "./Collapsible.module.css"

type CollapsibleProps = {
    title: string
    defaultOpen?: boolean
    children: ReactNode
}

const Collapsible = ({title, defaultOpen = true, children}: CollapsibleProps) => {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <section className={styles.panel}>
            <button
                type="button"
                className={styles.header}
                aria-expanded={open}
                onClick={() => setOpen((open) => !open)}
            >
                <span className={`${styles.chevron} ${open ? styles.open : ''}`}>▶</span>
                {title}
            </button>
            {open && <div className={styles.content}>{children}</div>}
        </section>
    )
}

export default Collapsible
