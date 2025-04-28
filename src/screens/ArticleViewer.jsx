import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ArticleViewer() {
  const { id } = useParams();

  const articles = {
    1: { title: "New York's 'Disaster'", pdfPath: "/media/articles/1.pdf" },
    2: { title: "SHIP ACT", pdfPath: "/media/articles/2.pdf" },
    3: { title: "T1 F1 A", pdfPath: "/media/articles/3.pdf" },
    4: { title: "T1 F1 B", pdfPath: "/media/articles/4.pdf" },
    5: { title: "T1 F2 A", pdfPath: "/media/articles/5.pdf" },
    6: { title: "T1 F2 B", pdfPath: "/media/articles/6.pdf" },
    7: { title: "T1 F3", pdfPath: "/media/articles/7.pdf" },
    8: { title: "T2 F1 A", pdfPath: "/media/articles/8.pdf" },
    9: { title: "T2 F1 B", pdfPath: "/media/articles/9.pdf" },
    10: { title: "T2 F1 C", pdfPath: "/media/articles/10.pdf" },
    11: { title: "T2 F2", pdfPath: "/media/articles/11.pdf" },
    12: { title: "T2 F3", pdfPath: "/media/articles/12.pdf" },
    13: { title: "T3 F1", pdfPath: "/media/articles/13.pdf" },
    14: { title: "T3 F2", pdfPath: "/media/articles/14.pdf" },
    15: { title: "T3 F3", pdfPath: "/media/articles/15.pdf" },
  };

  const article = articles[id];

  if (!article) {
    return (
      <>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>Article not found</h1>
          <Link to="/articles">← Back to Articles</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Link to="/articles" style={{ textDecoration: 'none', color: '#3498db' }}>← Back to Articles</Link>
        <h1 style={{ textAlign: 'center', margin: '1rem 0' }}>{article.title}</h1>
        <iframe 
          src={article.pdfPath} 
          width="100%" 
          height="800px" 
          style={{ border: 'none', borderRadius: '10px', marginTop: '1rem' }}
          title={article.title}
        ></iframe>
      </div>
    </>
  );
}

export default ArticleViewer;