import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs"
import PageHeader from "../components/pageHeader/PageHeader"
import useFetchById from "../hooks/useFetchById"

const About = () => {
    const recipe = useFetchById(7)

    return (
      <section>
        <PageHeader
          title='Om'
          headerImg={recipe?.image}
        />
        
        <Breadcrumbs />
      </section>
    )
}

export default About