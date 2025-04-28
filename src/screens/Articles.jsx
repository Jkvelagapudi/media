import Navbar from '../components/Navbar';


function Articles() {
  const articles = [
    { id: 1, title: "New York's 'Disaster'", pdfPath: "../assets/articles/1.pdf" },
    { id: 2, title: "SHIP ACT", pdfPath: "../assets/articles/2.pdf" },
    { id: 3, title: "T1 F1 A", pdfPath: "../assets/articles/3.pdf" },
    { id: 4, title: "T1 F1 B", pdfPath: "../assets/articles/4.pdf" },
    { id: 5, title: "T1 F2 A", pdfPath: "../assets/articles/5.pdf" },
    { id: 6, title: "T1 F2 B", pdfPath: "../assets/articles/6.pdf" },
    { id: 7, title: "T1 F3", pdfPath: "../assets/articles/7.pdf" },
    { id: 8, title: "T2 F1 A", pdfPath: "../assets/articles/8.pdf" },
    { id: 9, title: "T2 F1 B", pdfPath: "../assets/articles/9.pdf" },
    { id: 10, title: "T2 F1 C", pdfPath: "../assets/articles/10.pdf" },
    { id: 11, title: "T2 F2", pdfPath: "../assets/articles/11.pdf" },
    { id: 12, title: "T2 F3", pdfPath: "../assets/articles/12.pdf" },
    { id: 13, title: "T3 F1", pdfPath: "../assets/articles/13.pdf" },
    { id: 14, title: "T3 F2", pdfPath: "../assets/articles/14.pdf" },
    { id: 15, title: "T3 F3", pdfPath: "../assets/articles/15.pdf" },
  ];

  // Function to handle download
  const handleDownload = (pdfPath, title) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.setAttribute('download', `${title}.pdf`);
    
    // This is needed for Firefox
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Articles Page</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleDownload(article.pdfPath, article.title)}
              style={{
                backgroundColor: '#ecf0f1',
                padding: '1rem',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                color: '#2c3e50',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
            >
              <h2>{article.title}</h2>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-end', 
                marginTop: '10px' 
              }}>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span style={{ marginLeft: '5px' }}>Download</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Articles;