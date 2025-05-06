import Navbar from "../components/Navbar";
import Gov_Video from '../assets/gov_video.mp4';

function Home() {

  return (
    <>
      <Navbar />
      <div style={{ background: 'linear-gradient(to right,rgb(88, 124, 69),rgb(42, 141, 111))', minHeight: '100vh', padding: '2rem' }}>
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
            <p style={{ color: '#34495e', whiteSpace: 'pre-line' }}>
              Media: I wanted to ask you about the federal legalization of Marijuana. So what prompted your administration to pursue the federal legalization of Marijuana at this time?
              {"\n\n"}President: I believe that it is better to have something that is regulated and legal than to have something illegal and not regulated. So for instance Marijuana, if you make it illegal, the legal age you can buy it, the amount you can buy, all of that goes out the window. So I just believe that if we make it legal, it will be easier to regulate.
              {"\n\n"}Media: Ok and how will this move impact states that have already legalized or decriminalized Marijuana? Will their policies need to change?
              {"\n\n"}President: No state will need to change their laws. Federalization will remove the risk of federal prosecution and states can continue to set their own rules just like they do for alcohol.
              {"\n\n"}Media: Ok so will the administration take steps to remove past federal convictions based on marijuana-related offenses?
              {"\n\n"}President: Yes and no, so we will address the injustices of the past by expunging nonviolent crimes, but violent crimes that also have to deal with marijuana, they'll be relooked over.
              {"\n\n"}Media: Ok so how do you plan to regulate marijuana at the federal level? Will the model mirror alcohol or tobacco, or will there be a new regulatory plan?
              {"\n\n"}President: It will be similar to how alcohol and tobacco are modeled, so for instance we're going to implement a minimum age to buy marijuana.
              {"\n\n"}Media: And what would that age be?
              {"\n\n"}President: It would be 21, same age as you could drink in most states.
              {"\n\n"}Media: What economic benefits do you anticipate from the federal legalization of marijuana?
              {"\n\n"}President: Well, legalization means new jobs and also billions in tax revenue, and this new economy can uplift local economies. Also, on the law enforcement side, instead of having to respond to all these calls about possible drug use from marijuana, it can save our law enforcement agencies resources and time.
              {"\n\n"}Media: I see you mentioned tax. Does your plan include a federal tax on marijuana sales, and if so, how will that revenue be used?
              {"\n\n"}President: Yes, federal tax will be implemented on marijuana and it will primarily go back to the community with public health programs, education, and addiction treatment services.
              {"\n\n"}Media: Ok and how will existing cannabis businesses in legal states be affected by federal legalization?
              {"\n\n"}President: They’ll get fair access to banking, tax deductions, and business expenditures just like any other business would.
              {"\n\n"}Media: Ok and I know you said the legal age should be 21. Once the policy goes into use, what measures will you put in place to protect minors and prevent underage use?
              {"\n\n"}President: It will be roughly the same as alcohol and tobacco. So like I mentioned the minimum age, but we will also be restricting adverts, and we will also be requiring clear labels just like the ones in tobacco where it says "smoking kills," we will provide warnings on all marijuana products.
              {"\n\n"}Media: Ok that sounds like a pretty good plan. How will the federal government ensure consistent quality and safety standards across states?
              {"\n\n"}President: We will primarily use the FDA, although businesses will be the primary judge of their own quality.
              {"\n\n"}Media: Ok and what specific roles will agencies like the FDA and CDC play in marijuana regulation and oversight?
              {"\n\n"}President: The FDA will handle product safety and they will basically undergo tests on acceptable levels of marijuana, and the CDC will monitor the health detriments or benefits, depends on what comes up.
              {"\n\n"}Media: Ok will the administration invest in communities disproportionately affected by marijuana-related policing during the War on Drugs?
              {"\n\n"}President: Yes, we will create grant programs and provide licenses for minority-owned businesses. We also want to ensure that legislation is a good tool for racial and economic justice.
              {"\n\n"}Media: Ok and I'm going to circle back to what you said in the beginning. I understand you want to support pardons for individuals serving sentences for nonviolent marijuana offenses. Will that be on the state level or also on the federal and state level?
              {"\n\n"}President: It will be in both federal and state level but either prison it will depend on the offense and how serious it is.
              {"\n\n"}Media: Alright and how will you respond to concerns that the legalization might lead to increased drug use, especially among youth?
              {"\n\n"}President: Well, that's what regulation is for. So like alcohol, you can't walk into a store if you're underage and buy it. There will always be a black market for this stuff, but I would rather have a black market with regulation than one without.
              {"\n\n"}Media: Alright and are you expecting pushback from Congress or federal agencies, and if so, how do you plan on overcoming that?
              {"\n\n"}President: Yeah, I mean reform is always met with resistance where some people don't want to change their mind, but we will try to work with both sides of Congress, with law enforcement, and the medical community to get the right opinion and do the right thing.
              {"\n\n"}Media: Thank you for meeting with me today. Do you have anything else to add?
              {"\n\n"}President: No sir, thank you for having this interview.
              {"\n\n"}Media: Alright, have a good day.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
