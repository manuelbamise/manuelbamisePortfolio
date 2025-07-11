import { createFileRoute } from '@tanstack/react-router'
import Footer from '../components/sections/FooterSection'
// import ComingSoonComponent from '../components/AdditionalComponents/ComingSoon'


export const Route = createFileRoute('/blog')({
  component: RouteComponent,
})


function RouteComponent() {

  const scriptLink = "https://js.supascribe.com/v1/loader/zvIyWyAxE5Yq6S2qjKR7gMN0TG52.js"


  return (

    <>

      <div className='mx-20 flex-col '>

        <div>
          {/* <!-- Feed embed code --> */}
          <div data-supascribe-embed-id="396016599949" data-supascribe-feed></div>

        </div>

        <div className='text-center'>
          <Footer />
        </div>
      </div>

      {/* <!-- Supascribe Script (Only add this to your site once) --> */}
      <script src={scriptLink} async></script>

    </>

  )
}
