import React from "react";
import Grid from "@material-ui/core/Grid";
import { useOvermind } from "../../../../Others/OvermindHelper";
import Avatar from "@material-ui/core/Avatar";
import avatarImage from "../../../../Images/avatar2.png";
import TypographyMultilinedWithIcon from "../../../Helpers/TypographyMultilinedWithIcon";
import { myDetails } from "../../../../Others/MainItems";

const AboutRoute = () => {
  const { state } = useOvermind();

  return (
    <Grid
      container
      xs
      item
      direction="column"
      alignItems="center"
      justify={state.belowSm ? "center" : "flex-end"}
      alignContent="center"
    >
      <Grid item>
        <Avatar
          variant="square"
          style={{
            height: state.bigDevice ? 440 : 160,
            width: state.bigDevice ? 400 : 136,
            margin: 16,
          }}
          src={avatarImage}
        ></Avatar>
      </Grid>

      <Grid item style={{ marginBottom: 8, overflow: "auto" }}>
        <TypographyMultilinedWithIcon desc={myDetails}>
          About me <br />
        </TypographyMultilinedWithIcon>
      </Grid>
    </Grid>
  );
};

export default AboutRoute;
