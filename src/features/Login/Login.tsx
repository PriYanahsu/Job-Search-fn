"use client";

import { useLogin } from "./hooks/useLogin";

const Login = () => {

  const {
    loginForm,
    loginData,
    handleChange,
    loading
  } = useLogin();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to JobSearch
        </h2>

        <form onSubmit={loginForm} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Signup */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/registration" className="text-blue-600 font-medium hover:underline">
            Create Account
          </a>
        </p>

      </div>

    </div>
  );
};

export default Login;