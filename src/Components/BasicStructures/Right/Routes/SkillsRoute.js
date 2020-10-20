import React from "react";
import Grid from "@material-ui/core/Grid";
import { getTextAndListGrid } from "../../../../Others/GlobalMethods";
import { skills } from "../../../../Others/GlobalVariables";

const SkillsRoute = () => {
  return (
    <Grid spacing={1} container xs item direction="row">
      {skills.map((item) => {
        return getTextAndListGrid(item);
      })}
    </Grid>
  );
};

export default SkillsRoute;
