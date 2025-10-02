 
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import CategoryPosts from './Pages/CategoryPosts';
import PostDetail from './Pages/PostDetail';
import PostList from './Pages/PostList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Router>
            <Header/>
              <Routes>
                  <Route path='/' element={<PostList/>} />
                  <Route path='/posts/:id' element={<PostDetail/>} />
                  <Route path='/posts/category/:id' element={<CategoryPosts/>} />
              </Routes>
            <Footer/>
          </Router>
    </div>
  );
}

export default App;