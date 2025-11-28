// // src/page/ResetPassword.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const navigate = useNavigate();

//   const handleReset = (e) => {
//     e.preventDefault();
//     // Add your reset password logic here
//     alert("Password reset link sent!");
//     navigate("/"); // Redirect back to login after reset
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
//         <form onSubmit={handleReset} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Send Reset Link
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm">
//           Remembered your password?{" "}
//           <button
//             onClick={() => navigate("/")}
//             className="text-blue-500 hover:underline"
//           >
//             Sign In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


// src/page/ResetPassword.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset link sent!");
    navigate("/"); // Redirect back to login after reset
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4B2E2E]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        {/* Logo */}
        <img
          src="/logo.png" // replace with your logo path
          alt="Logo"
          className="mx-auto mb-4 h-16 w-16 object-contain"
        />

        <h2 className="text-2xl font-bold mb-6 text-gray-900">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4 text-left">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-700">
          Remembered your password?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-yellow-500 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
