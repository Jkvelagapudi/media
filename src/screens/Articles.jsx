import Navbar from '../components/Navbar';

function Articles() {
  const articles = [
    { id: 1, title: "New York's 'Disaster'", website: "https://drive.google.com/file/d/1aNHOr0zcMtfkKLktbqwIXK56-RexdO1F/view?usp=sharing" },
    { id: 2, title: "SHIP ACT", website: "https://drive.google.com/file/d/1W5hfJzf6HAxmy116Px21a-aHVraI1jMh/view?usp=drive_link" },
    { id: 3, title: "T1 F1 A", website: "https://drive.google.com/file/d/1z1qqeNEvfccqAcJ8KquVUbThkIYuB5b4/view?usp=drive_link" },
    { id: 4, title: "T1 F1 B", website: "https://drive.google.com/file/d/1vCxsKsCFW9JRF4Zy7WUTJFpyOSzqu4Lx/view?usp=drive_link" },
    { id: 5, title: "T1 F2 A", website: "https://drive.google.com/file/d/1YkiVZAoeU2Mmyp4hgdotyckPHrTbk5pT/view?usp=drive_link" },
    { id: 6, title: "T1 F2 B", website: "https://drive.google.com/file/d/1dWwcMDUXJ7aNjKAyua4P0yJYJsOgoiFR/view?usp=drive_link" },
    { id: 7, title: "T1 F3", website: "https://drive.google.com/file/d/1OBP_9tSdZLFjt53P6Q4PIVtY82gUFlnY/view?usp=drive_link" },
    { id: 8, title: "T2 F1 A", website: "https://drive.google.com/file/d/1c7ygQLW-o9HeEVZz2sI2gfC9NUdgm4jF/view?usp=drive_link" },
    { id: 9, title: "T2 F1 B", website: "https://drive.google.com/file/d/14yBJwN_rfgyPTUEObOn3L2S2-9XlZ_5m/view?usp=drive_link" },
    { id: 10, title: "T2 F1 C", website: "https://drive.google.com/file/d/10yV-Rgf6IT2aOZHTVmZ2bb0afuy78BK_/view?usp=drive_link" },
    { id: 11, title: "T2 F2", website: "https://drive.google.com/file/d/1XKMrHE3loH7eEB2a8uExlvrk6y_XXO4x/view?usp=drive_link" },
    { id: 12, title: "T2 F3", website: "https://drive.google.com/file/d/1o3kcaCuXSlRgmXQYeKtshY1Ja-2KwFZp/view?usp=drive_link" },
    { id: 13, title: "T3 F1", website: "https://drive.google.com/file/d/1pSp556aaZUjq1ilyBDKUwq3jWCR6RR5a/view?usp=drive_link" },
    { id: 14, title: "T3 F2", website: "https://drive.google.com/file/d/1jL5SujCccJkh77l5Shr8Lf2W4RSAxotS/view?usp=drive_link" },
    { id: 15, title: "T3 F3", website: "https://drive.google.com/file/d/1tHOAUO7fXA3ZZtKfcss-jVqF-FiYRwT9/view?usp=drive_link" },
  ];

  const handleCardClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <>
      <Navbar />
      <div style={{ 
        minHeight: '100vh', // Full screen height
        background: 'linear-gradient(to right,rgb(88, 124, 69),rgb(42, 141, 111))', 
        padding: '2rem' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Articles Page</h1>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {articles.map((article) => (
              <div
                key={article.id}
                onClick={() => handleCardClick(article.website)}
                style={{
                  backgroundColor: '#ecf0f1',
                  padding: '1rem',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  color: '#2c3e50',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Articles;
