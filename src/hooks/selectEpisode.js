import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const EpisodeSelect = (title, episodes) => {
    const theme = createTheme({
        palette: {
            text: {
                secondary: '#fff'
            }
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Autocomplete
                id="select-episode"
                sx={{ width: 300 }}
                style={{ marginLeft: '42.5%', marginRight: '10%' }}
                options={episodes}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 }, borderColor: 'white' }} {...props}>

                        {option}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={title}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
        </ThemeProvider>
    );
};

export default EpisodeSelect;

