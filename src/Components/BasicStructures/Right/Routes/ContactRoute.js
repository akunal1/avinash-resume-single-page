import React from "react";
import Grid from "@material-ui/core/Grid";
import { useOvermind } from "../../../../Others/OvermindHelper";
import { getTextAndListGrid } from "../../../../Others/GlobalMethods";
import { contactInfos } from "../../../../Others/GlobalVariables";

const ContactRoute = () => {
  const { state } = useOvermind();

  return (
    <Grid spacing={1} container xs item>
      {contactInfos.map((item) => {
        return getTextAndListGrid(item, state.belowSm ? 90 : 80);
      })}
    </Grid>
  );
};

export default ContactRoute;
