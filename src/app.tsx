import React, { useState } from 'react';
import Introduction from './components/Introduction';
import Posts from './components/Posts';
import IntroductionEdit from './components/IntroductionEdit';
import './app.css';

function App() {
  const [isEditingIntro, setIsEditingIntro] = useState(false);

  const handleEditIntroClick = () => setIsEditingIntro(true);
  const closeEditIntro = () => setIsEditingIntro(false);


  return (
    <div className="App">
      <header className="App-header">
        <div className="intro-section">
          {isEditingIntro ? (
            <IntroductionEdit onClose={closeEditIntro} />
          ) : (
            <Introduction />
          )}
        </div>
      </header>
      <main>
        <section className="posts-section">
          <Posts />
        </section>
      </main>
    </div>
  );
}

export default App;
