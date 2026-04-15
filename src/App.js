import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import images
import logo from "./assets/logo.jpeg";
import safety from "./assets/safety.jpeg";
import coins from "./assets/coins.jpeg";
import antiqueglobe from "./assets/antiqueglobe.jpeg";
import collage from "./assets/collage.jpeg";

function Navbar() {
  return (
    <nav className="p-4 shadow-md flex justify-between items-center bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10" />
        <h1 className="text-xl font-bold">Arrow Well Antique</h1>
      </div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/business">Business</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div
      className="h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${antiqueglobe})` }}
    >
      <div className="bg-black/50 p-6 rounded-2xl">
        <img src={logo} alt="Logo" className="h-20 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-2">
          Welcome to Arrow Well Antique Corporation
        </h2>
        <p className="text-gray-300 text-lg">
          Expertise.Commitment.Value
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="p-6 bg-black text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div>
          <img src={coins} alt="Coins" className="rounded-2xl shadow-lg w-full" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="leading-relaxed text-gray-300 whitespace-pre-line">
{`Welcome to Arrow Well Antique Corporation,

Our journey began with a deep admiration for the past—the intricate designs, the unmatched craftsmanship, and the stories hidden within every antique piece.

What started as a passion soon turned into a carefully curated collection of rare and meaningful artifacts. Each item we offer has been handpicked, not just for its beauty, but for the story it carries—from old-world homes to timeless collections.

We take pride in connecting these treasures with people who appreciate history, art, and individuality. Because in a world of mass production, owning something truly unique is rare.

We are passionate about preserving history and bringing it into contemporary living spaces. Whether it’s a handcrafted vintage cabinet or a rare decorative artifact, every item is chosen for its authenticity, craftsmanship, and enduring charm.

Thank you for choosing Vintage Metal Treasures. We invite you to embark on a captivating voyage through time and discover the magic of Arrow well antique corporation that will adorn your life with elegance, beauty, and a touch of history.`}
          </p>
        </div>
        </div>
    </div>
  );
}

function Business() {
  return (
    <div className="p-6 bg-black text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Images */}
        <div className="flex flex-col gap-4">
          <img src={coins} alt="Coins" className="rounded-2xl shadow-lg w-full" />
          <img src={safety} alt="Safety" className="rounded-2xl shadow-lg w-full" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Business</h2>
          <p className="leading-relaxed text-gray-300 whitespace-pre-line">
{`Arrow Well Antique Corporation is a biggest and most surely understood affiliation concentrated on valuable metals on the planet. We have a worldwide relationship of makers, purifiers, fabricators, researchers, clients, money related establishments, dealers, private and open part gatherings, and the general valuable metals network framed to give a discussion to the trading of data and innovation.

Arrow well antique corporation looks for and advances the effective and earth sounds use, reuse, and reusing of valuable metals from both essential and optional sources.`}
          </p>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-4xl font-bold text-center mb-10">Meet Our Team</h2>

      {/* Team Members */}
      <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
        <div>
          <h3 className="text-xl font-semibold">Weshbush</h3>
          <p className="text-gray-400">CEO</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Krishna Phani</h3>
          <p className="text-gray-400">Financial Head</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Rajender Reddy Yellu</h3>
          <p className="text-gray-400">Indian Metallurgist</p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="flex justify-center">
        <img
          src={collage}
          alt="Team Collage"
          className="rounded-xl shadow-lg max-w-5xl w-full"
        />
      </div>
    </div>
  );
}

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    await fetch("https://arrow-well-server.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Details submitted successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input name="name" placeholder="Name" required className="border p-2" />
        <input name="email" type="email" placeholder="Email" required className="border p-2" />
        <input name="phone" placeholder="Phone" className="border p-2" />
        <textarea name="message" placeholder="Message" className="border p-2" />
        <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}