import React from "react";
import "./style.css";

export default function PropertyDetails() {
  return (
    <div className="details-card">
      <div className="details-section">
        <div>
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700"
          alt="image detail"
        />
        </div>
        <div className="sub-details-div">
          {/* <div className="details-left">
            <img
              src="https://imgs.search.brave.com/42cmoMdc2_AgyUh9ptATpat91VCWuHdnaKCJJJMRdFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/Mjc0NzU0OC9waG90/by9tb2Rlcm4taG91/c2UtaW50ZXJpb3It/ZGVzaWduLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz12cWg1/Q3gweE1wOW1aZk1Q/T1ViaXZPUTl2MldM/TjA3Zy1ndVZTNk1z/amFZPQ"
              alt="details image"
            />

            <div className="details-description">
              <h2>$1,200,000</h2>
              <p>14 Kilimani, Nairobi</p>
            </div>
          </div> */}
          {/* <div className="details-right">
            <div>
              <h1>Heart icon</h1>
              <h1>share icon</h1>
            </div>
          </div> */}
        </div>
      </div>
      <div className="map-section">
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031"
          alt="map image"
        />
      </div>
    </div>
  );
}
