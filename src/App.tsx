import "./index.css";
import logoImage from "../src/assets/Logo_title.png"

function App() {
  return (
    <main className="app">
      <header className="navbar">
        <div className="logoContainer">
          <img className="logoImage" src={logoImage} alt="Footspeed Trainer Logo" />
        </div>

        <nav className="navButtons">
          <a className="navBtn" href="#demo">
            Try Demo
          </a>
          <a className="navBtn active" href="#pricing">
            Buy Full Access
          </a>
        </nav>
      </header>

      <section className="heroSection">
        <div className="heroCopy">
          <p className="eyebrow">REACTION TRAINING • FOOTWORK • AGILITY</p>

          <h2 className="heroTitle">
            Train your reaction speed with random voice calls.
          </h2>

          <p className="heroSubtitle">
            A simple footspeed trainer for solo cone drills, combat sports,
            taekwondo, football and agility training.
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href="#demo">
              Try Demo
            </a>
            <a className="secondaryBtn" href="#pricing">
              Unlock Full Version
            </a>
          </div>
        </div>

        <div className="trainerPreview">
          <p className="previewLabel">DEMO DRILL</p>
          <p className="timer">00:40</p>
          <p className="conesCalledCount">Cones called: 0</p>
          <button className="startBtn">Start</button>
        </div>
      </section>

      <section id="demo" className="content landingSection">
        <p className="eyebrow">TRY IT FIRST</p>
        <h2 className="sectionTitle">Test a short drill before unlocking the full trainer.</h2>

        <div className="twoColumn">
          <div className="infoCard">
            <h3>Demo version</h3>
            <p>
              Try a limited version of the trainer with a short timer and basic
              voice calls.
            </p>

            <ul>
              <li>Short reaction drill</li>
              <li>Limited cone colors</li>
              <li>Voice calls included</li>
            </ul>
          </div>

          <div className="settingsCard">
            <p className="settingsTitle">Demo settings</p>

            <div className="settingRow">
              <span>Duration</span>
              <strong>0:40</strong>
            </div>

            <div className="settingRow">
              <span>Interval between calls</span>
              <strong>3s</strong>
            </div>

            <div className="colorPreviewRow">
              <span className="colorSquare red"></span>
              <span className="colorSquare blue"></span>
            </div>

            <a className="primaryBtn fullWidth" href="#pricing">
              Get Full Access
            </a>
          </div>
        </div>
      </section>

      <section className="content landingSection">
        <p className="eyebrow">WHY IT WORKS</p>
        <h2 className="sectionTitle">Train solo like someone is calling the shots.</h2>

        <div className="benefitGrid">
          <div className="infoCard">
            <h3>Random calls</h3>
            <p>
              React to unpredictable voice commands instead of memorising a fixed
              pattern.
            </p>
          </div>

          <div className="infoCard">
            <h3>Footwork focus</h3>
            <p>
              Designed for cone drills, agility work and combat sports movement.
            </p>
          </div>

          <div className="infoCard">
            <h3>Simple setup</h3>
            <p>
              Choose your drill, place your cones and start training in seconds.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="content landingSection pricingSection">
        <div className="pricingCard">
          <p className="eyebrow">FULL VERSION</p>
          <h2 className="sectionTitle">Unlock the complete trainer.</h2>

          <ul className="pricingList">
            <li>All cone colors</li>
            <li>Custom duration</li>
            <li>Custom interval between calls</li>
            <li>Exercise history</li>
            <li>Voice calls included</li>
          </ul>

          <p className="price">€4.99</p>
          <p className="priceNote">One-time payment</p>

          <a className="primaryBtn" href="#">
            Buy Full Access
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;