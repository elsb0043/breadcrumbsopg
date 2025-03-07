import PageHeader from "../components/pageHeader/PageHeader"
import useFetchById from "../hooks/useFetchById"
import Favorites from "../components/favorites/Favorites"
import SectionHeader from "../components/sectionHeader/SectionHeader"
import MyFavorites from "../components/myFavorites/MyFavorites"
import Newsletter from "../components/newsletter/Newsletter"
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs"



const Home = () => {
    const recipe = useFetchById(5)

    return (
      <section>
        <PageHeader
          title='Smagfulde Favoritter'
          subTitle='Her kan der stå en undertitel!'
          headerImg={recipe?.image}
        />

        <Breadcrumbs />

        <SectionHeader 
          title='Brugernes Favoritter'
        />
        <Favorites />


        <SectionHeader 
          title='Mine Favoritter'
        />
        <MyFavorites />
        

        <SectionHeader
          title='Nyhedsbrev'
        />
        <Newsletter />
      </section>
    )
}

export default Home