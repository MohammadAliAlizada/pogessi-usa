
import { Paper, Box, Typography, Slider, Stack, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';

const LeftSidebar = ({numResults, setNumResults, confidence, setConfidence}: {numResults: number, setNumResults: (numResults: number) => void, confidence: number, setConfidence: (confidence: number) => void}) => {

  const handleNumResultsChange = (event: Event, newValue: number | number[]) => {
    setNumResults(newValue as number);
  };

  const handleConfidenceChange = (event: Event, newValue: number | number[]) => {
    setConfidence(newValue as number);
  };

  return (
    <Paper
      elevation={3}
      sx={{
         minHeight: '45vh',
        maxHeight: '65vh',
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
      }}
    >
      {/* Header */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={6}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <SettingsOutlinedIcon />
          <Typography variant="h6" fontWeight="medium">
            Configuration
          </Typography>
        </Stack>
        <IconButton sx={{ color: 'white' }}>
            <ViewSidebarOutlinedIcon />
        </IconButton>
      </Stack>

      {/* No. of Results Slider */}
      <Box mb={6}>
        <Typography variant="body2" gutterBottom sx={{ opacity: 0.9, mb: 2 }}>
          No. of Results
        </Typography>
        <Slider
          value={numResults}
          onChange={handleNumResultsChange}
          min={1}
          max={10}
          step={1}
          valueLabelDisplay="on"
          sx={{
            color: '#90caf9', // Light blue
            height: 8,
            '& .MuiSlider-track': {
              border: 'none',
            },
            '& .MuiSlider-thumb': {
              height: 24,
              width: 24,
              backgroundColor: '#fff',
              border: '2px solid currentColor',
              '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
              },
              '&:before': {
                display: 'none',
              },
            },
            '& .MuiSlider-valueLabel': {
              lineHeight: 1.2,
              fontSize: 12,
              background: 'unset',
              padding: 0,
              width: 32,
              height: 32,
              borderRadius: '50% 50% 50% 0',
              backgroundColor: '#fff',
              color: '#000',
              transformOrigin: 'bottom left',
              transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
              '&:before': { display: 'none' },
              '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
              },
              '& > *': {
                transform: 'rotate(45deg)',
              },
            },
          }}
        />
      </Box>

      {/* Confidence Threshold Slider */}
      <Box>
        <Typography variant="body2" gutterBottom sx={{ opacity: 0.9, mb: 2 }}>
          Confidence Threshold
        </Typography>
        <Slider
          value={confidence}
          onChange={handleConfidenceChange}
          min={0}
          max={1}
          step={0.1}
          valueLabelDisplay="on"
           sx={{
            color: '#90caf9',
            height: 8,
            '& .MuiSlider-track': {
              border: 'none',
            },
            '& .MuiSlider-thumb': {
              height: 24,
              width: 24,
              backgroundColor: '#fff',
              border: '2px solid currentColor',
              '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
              },
              '&:before': {
                display: 'none',
              },
            },
             '& .MuiSlider-valueLabel': {
              lineHeight: 1.2,
              fontSize: 12,
              background: 'unset',
              padding: 0,
              width: 32,
              height: 32,
              borderRadius: '50% 50% 50% 0',
              backgroundColor: '#fff',
              color: '#000',
              transformOrigin: 'bottom left',
              transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
              '&:before': { display: 'none' },
              '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
              },
              '& > *': {
                transform: 'rotate(45deg)',
              },
            },
          }}
        />
      </Box>
    </Paper>
  );
};

export default LeftSidebar;