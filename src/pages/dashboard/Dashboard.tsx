import { Typography, Paper, Card, CardContent, CardActions, Button } from '@mui/material';
import { TrendingUp, People, ShoppingCart, AttachMoney } from '@mui/icons-material';
import { DashboardWrapper, StatsContainer, StatCardWrapper, SectionWrapper } from './styles';

export const Dashboard = () => {
  const stats = [
    { title: 'Total Sales', value: '$12,345', icon: <AttachMoney />, color: '#4caf50' },
    { title: 'Total Orders', value: '156', icon: <ShoppingCart />, color: '#2196f3' },
    { title: 'Total Users', value: '2,345', icon: <People />, color: '#ff9800' },
    { title: 'Growth', value: '+12%', icon: <TrendingUp />, color: '#f44336' },
  ];

  return (
    <DashboardWrapper>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <StatsContainer>
        {stats.map((stat, index) => (
          <StatCardWrapper key={index}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <div style={{ color: stat.color, marginBottom: '8px' }}>{stat.icon}</div>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.title}
              </Typography>
            </Paper>
          </StatCardWrapper>
        ))}
      </StatsContainer>

      <SectionWrapper>
        {/* Recent Activity */}
        <StatCardWrapper>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No recent activity to display.
            </Typography>
          </Paper>
        </StatCardWrapper>

        {/* Quick Actions */}
        <StatCardWrapper>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="body2">
                  Manage your profile settings and preferences.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/dashboard/profile">
                  Go to Profile
                </Button>
              </CardActions>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="body2">
                  Configure application settings and notifications.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </StatCardWrapper>
      </SectionWrapper>
    </DashboardWrapper>
  );
};
