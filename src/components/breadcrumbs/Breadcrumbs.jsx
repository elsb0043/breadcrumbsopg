import useBreadcrumbs from "use-react-router-breadcrumbs"
import styles from "./breadcrumbs.module.css"

function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs()

    return (
        <>
            <h1 className={styles.breadcrumbsH1}>Breadcrumbs</h1>
            <div className={styles.crumbs}>
                {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
            </div>
        </>
    )
}

export default Breadcrumbs