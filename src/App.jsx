import { HashRouter } from "react-router-dom";

import {Navbar} from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
       </div>
    </HashRouter>
  );
}

export default App;
