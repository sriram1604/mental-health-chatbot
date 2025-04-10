import React, { useState } from "react";

function App() {
  const [role, setRole] = useState(null);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex flex-col items-center justify-center font-sans p-4">
      

      {!role ? (
        
        <div className="space-x-4">
            <h1 className="text-3xl font-bold mb-6">Are you a Doctor or Patient?</h1>
          <button
            onClick={() => handleRoleSelect("Doctor")}
            className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Doctor
          </button>
          <button
            onClick={() => handleRoleSelect("Patient")}
            className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Patient
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
  <h2 className="text-2xl font-semibold">Welcome {role}! Choose your option:</h2>
  <div className="space-x-4">
    <button
      onClick={() => window.location.href = (role == 'Doctor' ? "http://localhost:8502/" : "http://localhost:8504/")}
      className="bg-yellow-400 text-black px-6 py-2 rounded-xl hover:bg-yellow-300 transition"
    >
      Chat Bot
    </button>
    <button
       onClick={() => window.location.href = (role == 'Doctor' ? "http://localhost:8501/" : "http://localhost:8503/")}
      className="bg-yellow-400 text-black px-6 py-2 rounded-xl hover:bg-yellow-300 transition"
    >
      Image Bot
    </button>
  </div>
</div>
      )}
    </div>
  );
}

export default App;
