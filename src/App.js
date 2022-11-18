import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/global';
const App = () => {
  return (
    <div>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto.
    Join 25 + million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
        
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace.
    Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is build using Expo which runs natively al users' devices. 
        You can easily get your app into people's hands"
        mockupImg={assets.feature}
      reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen list all NFTs
         while the second one shows the details of a specific NFT. "
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-4 justify-center items-center 
      bg-primary flex-col text-center banner04">
        <a href='https://claudio-terogene.netlify.app' target="_blank">
        <p className={`${styles.pText} ${styles.whiteText}`}> 
        Made with love by {""} <span className='bold'>Claudio TEROGENE</span></p>
        </a>
      </div>

    </div>
  );
}


export default App;
