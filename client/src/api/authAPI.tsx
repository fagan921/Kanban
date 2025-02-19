import { UserLogin } from "../interfaces/UserLogin";

const API_BASE_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

const login = async (userInfo: UserLogin) => {
  try {
    console.log("🟡 Sending login request to:", `${API_BASE_URL}/auth/login`);
    
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      console.error(`❌ Login failed! Status: ${response.status} - ${response.statusText}`);
      throw new Error("Invalid credentials or server error.");
    }

    const data = await response.json();
    console.log("✅ Login successful. Received token:", data.token);

    return data; // Should return { token: "JWT-TOKEN-HERE" }
  } catch (error) {
    console.error("❌ Login request failed:", error);
    throw error;
  }
};

export { login };