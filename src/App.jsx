import React from 'react';
import Clicker from './components/Clicker'
import './App.css';


/*
  реализовать на контексте и хуках смену темы
*/

function App() {
 

  return (
    <>
    <Clicker />
    </>
    // <Router>
    //   <UserContext.Provider value={[user, setUser]}>
    //     <ThemeContext.Provider value={[theme, toggleTheme]}>
    //       <Switch>
    //         <Route exact path="/" component={MainPage} />
    //         <Route path="/login" component={LoginPage} />
    //         <Route path="/laptops" component={LaptopsPage} />
    //         <Route path="/users" component={UsersPage} />
    //       </Switch>
    //     </ThemeContext.Provider>
    //   </UserContext.Provider>
    // </Router>
  );
}

export default App;
