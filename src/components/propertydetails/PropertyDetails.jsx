import React from "react";
import "./style.css";
import { Heart, Share2, BedDouble, Bath, Car, Ruler } from "lucide-react";

export default function PropertyDetails() {
  return (
    <div className="details-card">
      {/* LEFT SIDE */}
      <div className="details-section">
        {/* Main image */}
        <div className="main-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=900"
            alt="Property"
          />
          <span className="status-badge">Under Contract</span>
          <button className="view-photos">View all 12 Photos</button>
        </div>

        {/* Property info section */}
        <div className="sub-details-div">
          <div className="details-left">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=200&q=80"
              alt="details thumbnail"
            />

            <div className="details-description">
              <h2>$1,200,000</h2>
              <p>14 Kilimani, Nairobi</p>

              <div className="details-icons">
                <div><BedDouble size={18}/> 4</div>
                <div><Bath size={18}/> 2</div>
                <div><Car size={18}/> 3</div>
                <div><Ruler size={18}/> 101 m²</div>
              </div>
            </div>
          </div>

          <div className="details-right">
            <Heart className="icon" />
            <Share2 className="icon" />
          </div>
        </div>

        {/* Extra info buttons */}
        <div className="info-buttons">
          <button>Statement of Info</button>
          <button>Floor Plan</button>
          <button>Video</button>
          <button>3D Tour</button>
          <button>External Link</button>
        </div>
      </div>

      {/* RIGHT SIDE - MAP */}
      <div className="map-section">
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
          alt="map"
        />
      </div>
    </div>
  );
}
