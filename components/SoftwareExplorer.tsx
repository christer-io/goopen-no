"use client";

import { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SoftwareCard } from "@/components/SoftwareCard";
import type { SoftwareItem } from "@/data/software";

type Props = {
  software: SoftwareItem[];
};

const allCategoriesValue = "alle";

function normalize(value: string) {
  return value.toLocaleLowerCase("nb").trim();
}

export function SoftwareExplorer({ software }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allCategoriesValue);

  const categories = useMemo(() => {
    return Array.from(
      new Set(software.map((item) => item.category).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b, "nb"));
  }, [software]);

  const filteredSoftware = useMemo(() => {
    const normalizedQuery = normalize(query);

    return software.filter((item) => {
      const matchesCategory =
        category === allCategoriesValue || item.category === category;
      const searchableText = normalize(
        [item.title, item.description, item.category].join(" ")
      );
      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query, software]);

  return (
    <div className="px-2">
      <Stack
        direction="column"
        spacing={1.5}
        sx={{
          alignItems: "stretch",
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          label="Søk i programvare"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#047857",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#047857",
            },
          }}
        />

        <Box sx={{ overflowX: "auto", pb: 0.25, width: "100%" }}>
          <ToggleButtonGroup
            exclusive
            value={category}
            onChange={(_, value: string | null) => {
              if (value) setCategory(value);
            }}
            size="small"
            aria-label="Filtrer på type"
            sx={{
              whiteSpace: "nowrap",
              "& .MuiToggleButton-root": {
                borderColor: "rgba(4, 120, 87, 0.22)",
                color: "#065f46",
                px: 1.5,
                textTransform: "none",
              },
              "& .MuiToggleButton-root.Mui-selected": {
                bgcolor: "#ecfdf5",
                color: "#064e3b",
              },
              "& .MuiToggleButton-root.Mui-selected:hover": {
                bgcolor: "#d1fae5",
              },
            }}
          >
            <ToggleButton value={allCategoriesValue}>Alle</ToggleButton>
            {categories.map((item) => (
              <ToggleButton key={item} value={item}>
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Stack>

      {filteredSoftware.length > 0 ? (
        <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 md:gap-3 md:pb-3 lg:grid-cols-3">
          {filteredSoftware.map((item) => (
            <SoftwareCard key={item.id} software={item} variant="simple" />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-emerald-700/20 bg-emerald-50 px-4 py-5 text-sm text-emerald-950">
          Ingen programvarer matcher søket eller filteret.
        </p>
      )}
    </div>
  );
}
