import React from 'react';
import './App.css';
import HTHeader from './HTHeader/HTHeader';
import HTMain from './HTMain/HTMain';
import HTCompany from './HTCompany/HTCompany';
import HTHoneyStory from './HTHoneyStory/HTHoneyStory';
import HTSweetNews from './HTSweetNews/HTSweetNews';
import HTProduct from './HTProduct/HTProduct';
import HTLINK from './HTLINK/HTLINK';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HTHeader/>
      </header>
      <nav></nav>
      <section>
        <HTMain/>
        </section><section>
        <HTCompany/>
        </section><section>
        <HTProduct/>
        </section><section>
        <HTHoneyStory/>
        </section><section>
        <HTSweetNews/>
        </section><section>
        <HTLINK/>
      </section>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
