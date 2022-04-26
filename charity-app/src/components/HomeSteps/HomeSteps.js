import React from "react";
import HomeStepsButton from "./HomeStepsButton";
import HomeStepsContent from "./HomeStepsContent";
import HomeStepsHeader from "./HomeStepsHeader";

export default function HomeSteps() {
  return (
    <section className="steps" name="steps">
      <HomeStepsHeader />
      <HomeStepsContent />
      <HomeStepsButton />
    </section>
  );
}
