import "./MapSection.css";

function MapSection() {
  return (
    <section className="map-section">

      <div className="map-container">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Johar+Town,Lahore,Pakistan&output=embed"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}

export default MapSection;