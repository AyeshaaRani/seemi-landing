export const signupUser = async (userData) => {
    const response = await fetch(
      "https://seemii.mytutorpod.org/mtpsaas/public/api/v1/app/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: userData.firstName,
          last_name: userData.lastName,
          email: userData.email,
          password: userData.password,
          confirm_password: userData.confirmPassword,
          busines_name: userData.businessName,
          busines_size: userData.businessSize,
        }),
      }
    );
  
    const data = await response.json();
    return data;
  };