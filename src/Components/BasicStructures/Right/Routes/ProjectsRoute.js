import React from "react";
import Grid from "@material-ui/core/Grid";
import { getTextAndListGrid } from "../../../../Others/GlobalMethods";
import { projects } from "../../../../Others/GlobalVariables";

const ProjectsRoute = () => {
  return (
    <Grid spacing={1} container xs item direction="row">
      {projects.map((item) => {
        return getTextAndListGrid(item, 96);
      })}
    </Grid>
  );
};

export default ProjectsRoute;
