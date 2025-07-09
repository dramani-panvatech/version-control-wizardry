// src/lib/authService.ts

export async function adminLogin({ email, password, rememberMe }: { email: string; password: string; rememberMe: boolean }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  console.log(email, password, rememberMe);
  
  const response = await fetch(`${baseUrl}/api/Login/AdminLogin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, rememberMe }),
  });

  console.log(response);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Login failed. Please try again.');
  }
  return response.json();
} 