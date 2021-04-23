
import './App.css';
import Userform from './maicomponent/userform';
import MapContainer from './maicomponent/googleMap';
import TheamContextProvider from './maicomponent/theamContext';
import Content1 from './contextContent/context1';
import ThemeButton from './contextContent/themeButton';
import BookContextProvider from './contextContent/bookComponent';
import BookList from './contextContent/bookList';
import BookForm from './contextContent/bookMainComponent';
import TestComponent from './test/component/testComponent';
function App() {
  return (
    <div className="App">
      {/* <Userform /> */}
      {/* <MapContainer /> */}
      {/* <TheamContextProvider>
        <Content1 />
        <ThemeButton />
      </TheamContextProvider> */}

      <BookContextProvider>
          <BookList />
          <BookForm />
          <TestComponent />
      </BookContextProvider>

    </div>
  );
}

export default App;
