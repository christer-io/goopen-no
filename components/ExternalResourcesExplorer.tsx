"use client";

import { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ExternalLink } from "@/components/ExternalLink";
import type { ContentPost } from "@/lib/content";

type Props = {
  externalLinks: ContentPost[];
};

const allCategoriesValue = "alle";

function normalize(value: string) {
  return value.toLocaleLowerCase("nb").trim();
}

export function ExternalResourcesExplorer({ externalLinks }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allCategoriesValue);

  const categories = useMemo(() => {
    return Array.from(
      new Set(externalLinks.map((link) => link.category).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b, "nb"));
  }, [externalLinks]);

  const filteredLinks = useMemo(() => {
    const normalizedQuery = normalize(query);

    return externalLinks.filter((link) => {
      const matchesCategory =
        category === allCategoriesValue || link.category === category;

      const searchableText = normalize(
        [link.title, link.organization, link.description, link.category].join(" ")
      );
      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, externalLinks, query]);

  return (
    <div className="px-2">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1.5}
        sx={{
          alignItems: { xs: "stretch", md: "center" },
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          label="Søk i ressurser"
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
            maxWidth: { md: 420 },
            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
              borderColor: "#047857",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#047857",
            },
          }}
        />

        <Box sx={{ overflowX: "auto", pb: 0.25 }}>
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

      {filteredLinks.length > 0 ? (
        <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 md:gap-3 md:pb-3 lg:grid-cols-3">
          {filteredLinks.map((externalLink) => (
            <ExternalLink
              key={externalLink._id}
              title={externalLink.title}
              url={externalLink.url}
              description={externalLink.description}
              organization={externalLink.organization}
              category={externalLink.category}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-emerald-700/20 bg-emerald-50 px-4 py-5 text-sm text-emerald-950">
          Ingen ressurser matcher søket eller filteret.
        </p>
      )}
    </div>
  );
}
