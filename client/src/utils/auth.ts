import { JwtPayload, jwtDecode } from "jwt-decode";
import type { UserData } from "../interfaces/UserData";

class AuthService {
  /**
   * ✅ Retrieves user profile by decoding JWT.
   * @returns {UserData | null} The decoded user data, or null if no valid token exists.
   */
  getProfile(): UserData | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<UserData>(token);
    } catch (err) {
      console.warn("⚠️ Invalid or corrupted token:", err);
      return null;
    }
  }

  /**
   * ✅ Checks if a user is logged in.
   * @returns {boolean} True if a valid token exists, otherwise false.
   */
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  /**
   * ✅ Checks if a token is expired.
   * @param {string} token - JWT token.
   * @returns {boolean} True if expired, otherwise false.
   */
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true; // If `exp` is missing, treat as expired

      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      console.warn("⚠️ Failed to decode token:", err);
      return true; // Treat any decoding failure as an expired token
    }
  }

  /**
   * ✅ Retrieves JWT token from localStorage.
   * @returns {string | null} The token, or null if not found.
   */
  getToken(): string | null {
    try {
      return localStorage.getItem("id_token") ?? null;
    } catch (err) {
      console.error("❌ Failed to access localStorage:", err);
      return null;
    }
  }

  /**
   * ✅ Stores JWT token and redirects to home.
   * @param {string} idToken - The JWT token to store.
   */
  login(idToken: string): void {
    try {
      localStorage.setItem("id_token", idToken);
      console.log("✅ User logged in successfully!");
      window.location.replace("/"); // Prevents user from pressing "Back" to go to login
    } catch (err) {
      console.error("❌ Failed to store token in localStorage:", err);
    }
  }

  /**
   * ✅ Clears JWT token and redirects to home.
   */
  logout(): void {
    try {
      localStorage.removeItem("id_token");
      console.log("✅ User logged out.");
      window.location.replace("/");
    } catch (err) {
      console.error("❌ Failed to remove token from localStorage:", err);
    }
  }
}

export default new AuthService();