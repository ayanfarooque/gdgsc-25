import React, { useState } from "react";
import AssignmentList from "./AssignmentList";
import AssignmentViewer from "./AssignmentViewer";
import AssignmentUploader from "./AssignmentUploader";

const AssignmentReview = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar for previous assignments */}
      <AssignmentList onSelect={setSelectedAssignment} />

      {/* Viewer to show selected assignment */}
      <AssignmentViewer assignmentId={selectedAssignment} />

      {/* Uploader to submit new assignments */}
      <AssignmentUploader onUpload={() => window.location.reload()} />
    </div>
  );
};

export default AssignmentReview;
