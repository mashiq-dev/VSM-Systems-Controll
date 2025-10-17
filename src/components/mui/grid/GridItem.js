import { Grid } from '@mui/material';

const GridItem = ({ children, xs, sm, md, lg, xl }) => {
  return (
    <Grid item xs={xs} md={md} sm={sm} lg={lg} xl={xl}>
      {children}
    </Grid>
  );
};

export default GridItem;
