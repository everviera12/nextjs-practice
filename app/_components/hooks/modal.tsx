"use client";

import { CheckCircleOutline } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";
import { useState } from "react";

export default function Modal() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleModal = () => {
    setIsActive((prev) => !prev);
    console.log(isActive);
  };

  return (
    <div>
      <Button
        size="small"
        onClick={handleModal}
        style={{ backgroundColor: isActive ? "#C1121F" : "#003049", color: "white", }}
      >
        {isActive ? "Less details" : "More details"}
      </Button>

      {isActive && (
        <Alert icon={<CheckCircleOutline fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
      )}
    </div>
  );
}
