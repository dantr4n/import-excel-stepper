import React from "react";
import Typography from "@mui/material/Typography";
import NonLinearStepper from "../components/Stepper/NonLinearStepper";

function ImportPage() {
  return (
    <div className="import-page">
      <Typography variant="h4" gutterBottom sx={{ mt: 2, mb: 3 }}>
        Import File
      </Typography>
      <NonLinearStepper></NonLinearStepper>
    </div>
  );
}
export default ImportPage;
