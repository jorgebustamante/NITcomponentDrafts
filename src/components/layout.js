import Header from './header';

function Layout(props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-col w-full bg-white'>
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
