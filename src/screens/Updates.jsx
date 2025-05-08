import Navbar from '../components/Navbar';

function Updates() {
  const update = {
    title: "Execuetive Order",
    website: "https://docs.google.com/document/d/1OrwQNxgXPV8191pAfhYdAMOdUPErdCmYkaXEpqg6sxg/edit?usp=sharing"
  };

  const update1 = {
    title: "Survey",
    website: "https://docs.google.com/forms/d/e/1FAIpQLSfN6uk8U87lSMNz1EHhM90i8I4qZkWJSFXVcmRBKTsm00VAWQ/viewform?usp=header"
  };

  const update2 = {
    title: "Rumors of Rider",
    website: "https://docs.google.com/document/d/1JUJeuFhn737eixNcc5ik9IXOODm4Fe7t0ceoMnXPkBA/edit?usp=sharing"
  };

  const handleCardClick = (website) => {
    window.open(website, '_blank');
  };

  return (
    <>
      <Navbar />
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(to right, rgb(88, 124, 69), rgb(42, 141, 111))',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Updates Page</h1>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div
              onClick={() => handleCardClick(update2.website)}
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
              <h2>{update2.title}</h2>
            </div>

            <div
              onClick={() => handleCardClick(update.website)}
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
              <h2>{update.title}</h2>
            </div>

            <div
              onClick={() => handleCardClick(update1.website)}
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
              <h2>{update1.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Updates;
