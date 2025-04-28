import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Articles from './screens/Articles';
import ArticleViewer from './screens/ArticleViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleViewer />} />
      </Routes>
    </Router>
  );
}

export default App;