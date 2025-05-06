import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Articles from './screens/Articles';
// import ArticleViewer from './screens/ArticleViewer';
import Updates from './screens/Updates';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/updates" element={<Updates />} > </Route>
      </Routes>
    </Router>
  );
}

export default App;