import Navbar from "../components/Navbar";
import Gov_Video from '../assets/gov_video.mp4'

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'linear-gradient(to right, #a8ff78, #78ffd6)', minHeight: '100vh', padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', color: '#2c3e50', marginBottom: '0.5rem' }}>Weed News</h1>
          <p style={{ fontSize: '1.2rem', color: '#34495e' }}>Your trusted source for cannabis federalization updates.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          
          <div style={{ flex: '1 1 500px', backgroundColor: 'white', padding: '1rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <video width="100%" controls style={{ borderRadius: '10px' }}>
              <source src={Gov_Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div style={{ flex: '1 1 500px', backgroundColor: 'white', padding: '1rem', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxHeight: '500px', overflowY: 'auto' }}>
            <h2 style={{ color: '#2c3e50' }}>Presidential Interview Transcript</h2>
            <p style={{ color: '#34495e' }}>
              [Insert your transcript here...]
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
