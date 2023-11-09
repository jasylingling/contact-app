import React from 'react';
import Header from './components/Header';
import ContactContainer from './compositions/ContactContainer';
import Footer from './components/Footer';

function App() {
  const [filterString, setFilterString] = React.useState('');
  return (
    <>
      <Header
        title="Meowsies 🐱"
        setFilterString={setFilterString}
      ></Header>

      <ContactContainer
        filterString={filterString}
      ></ContactContainer>

      <Footer />
    </>
  );
}

export default App;
