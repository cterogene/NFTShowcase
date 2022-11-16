import {Download, Features, SectionWrapper} from './components';
import assets from './assets';
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
    </div>
  );
}


export default App;
