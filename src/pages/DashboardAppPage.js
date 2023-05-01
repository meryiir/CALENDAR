import { Helmet } from 'react-helmet-async'
// @mui
import { useTheme } from '@mui/material/styles'
import { Grid, Container, Typography } from '@mui/material'


// components


// sections
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Calendrier </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Students"  total={2000} icon={'ant-design:computer-filled'} />
            
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Groups" total={4} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title=""
              subheader=""
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Passed Students',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Failed Students',
                  type: 'area',
                  fill: 'gradient',
                  color: 'red',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                
                
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Students Chart Flow"
              chartData={[
                { label: 'Passed Students', value: 4344 },
                { label: 'Failed Students', value: 5435 },

              ]}
              chartColors={[

                theme.palette.primary.main,
                theme.palette.error.main,
              ]}
              
            />
          </Grid>


        </Grid>
      </Container>
    </>
  );
}
