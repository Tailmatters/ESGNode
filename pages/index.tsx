import Head from "next/head"
import { Button } from "components/Button/Button"
import SideNavigation from "components/Navigation/SideNavigation" 
import TopNavigation from "components/Navigation/TopNavigation"
import { LP_GRID_ITEMS } from "lp-items"
import { useUser } from "@auth0/nextjs-auth0/client"

export default function Web() {
  const {user, error, isLoading} = useUser();
  if(user) {

    return(
      <>
      <h1>Welcome {user.name}!</h1>
      <a href="/api/auth/logout">Logout</a>
      <Head>

        <meta property="og:url" content="https://ctrlspend.com" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>ESG Node - Your Partner For Driving Triple Bottomline</title>
      </Head>
      <div className="flex flex-col border-2 border-green-500 h-screen w-screen">
      <TopNavigation /> 
      <div className="flex border-2 border-blue-500 flex-auto">
      <SideNavigation />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            ESG Node - Your Partner For Driving Triple Bottomline
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Trying to build a world class ESG software for the benefit of Indian listed companies. Contact vithal@ctrlspend.com for more details.
            </p>
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Learn More
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Try Now
            </Button>
          </div>
        </div>
      </section>
      </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    )
  }
  
  return (
    <>
    <a href="/api/auth/login">Login</a>
      <Head>

<meta property="og:url" content="https://ctrlspend.com" />
<meta
  property="og:image"
  content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<title>ESG Node - Your Partner For Driving Triple Bottomline</title>
</Head>
<div className="flex flex-col border-2 border-green-500 h-screen w-screen">
<TopNavigation /> 
<div className="flex border-2 border-blue-500 flex-auto">
<SideNavigation />
<section className="bg-white dark:bg-gray-900">
<div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
  <div className="mx-auto place-self-center">
    <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
    ESG Node - Your Partner For Driving Triple Bottomline
    </h1>
    <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
      Trying to build a world class ESG Product for the benefit of Indian listed companies. Contact vithal@ctrlspend.com for more details.
    </p>
    <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
      Learn More
    </Button>
    <Button
      href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
      intent="secondary"
    >
      Try Now
    </Button>
  </div>
</div>
</section>
</div>
</div>
<section className="bg-white dark:bg-gray-900">
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
  <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
    {LP_GRID_ITEMS.map((singleItem) => (
      <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
          {singleItem.icon}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
      </div>
    ))}
  </div>
</div>
</section>
    </>
  )
}
