import React from "react";

function Main() {

  return (
     (userID === "admin") ? {
        return ([
          <Logo user={userID} email={formData.email} />,
          <NavBar />,
          <Library user={userID} />,
        ])
      } : (userID === "bootcamper") ? {
        return ([
          <Logo user={userID} email={formData.email} />,
          <NavBar />,
          <Library user={userID} />,
        ])
      } : null
  );
}

export default Main;
