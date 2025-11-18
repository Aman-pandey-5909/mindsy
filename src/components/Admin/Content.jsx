import React from "react";

import { useMentalHandlers } from "../../handlers/useMentalHandlers";
import { useDepressionHandlers } from "../../handlers/useDepressionHandlers";
import { useMoodHandlers } from "../../handlers/useMoodHandlers";

import MentalAssessmentEditor from "./components/MentalAssessmentEditor";
import DepressionAssessmentEditor from "./components/DepressionAssessmentEditor";
import MoodEditor from "./components/MoodEditor";

const AdminContent = () => {
  const mental = useMentalHandlers();
  const depression = useDepressionHandlers();
  const mood = useMoodHandlers();

  return (
    <div className="w-[850px] mx-auto my-12 pb-20 text-text-black">
      <h1 className="text-3xl font-semibold mb-8">Content Management (Admin)</h1>

      <MentalAssessmentEditor {...mental} />
      <DepressionAssessmentEditor {...depression} />
      <MoodEditor {...mood} />
    </div>
  );
};

export default AdminContent;
