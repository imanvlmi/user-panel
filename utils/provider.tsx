"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FF9E3E",
      },
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "white",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              border: "1px solid #949494",
            },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: "1px solid orange",
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid orange",
              },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: "#161B25",
            color: "#d9d9d9",
          },
        },
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default Providers;
