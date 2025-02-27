import useFetchById from "../hooks/useFetchById"
import PageHeader from "../components/pageHeader/PageHeader"
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs"

const Contact = () => {
    const recipe = useFetchById(3)

    return (
      <section>
        <PageHeader
          title='Kontakt'
          headerImg={recipe?.image}
        />

        <Breadcrumbs />
      </section>
    )
}

export default Contact