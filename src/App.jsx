import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen">
      <Navbar />
      <main className="pt-200">
        <section id="home" className="min-h-[80vh] flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to ChaiCode Landing Page</h1>
        </section>
      </main>
    </div>
  );
}


export default App;
