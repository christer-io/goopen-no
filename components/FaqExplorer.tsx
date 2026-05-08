"use client";

import { useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";
import { SimpleCard } from "@/components/SimpleCard";
import type { ContentPost } from "@/lib/content";

type Props = {
  faq: ContentPost[];
};

const allTagsValue = "alle";

function normalize(value: string) {
  return value.toLocaleLowerCase("nb").trim();
}

export function FaqExplorer({ faq }: Props) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState(allTagsValue);

  const tags = useMemo(() => {
    return Array.from(new Set(faq.map((item) => item.tag).filter(Boolean))).sort(
      (a, b) => a.localeCompare(b, "nb")
    );
  }, [faq]);

  const filteredFaq = useMemo(() => {
    const normalizedQuery = normalize(query);

    return faq.filter((item) => {
      const matchesTag = tag === allTagsValue || item.tag === tag;
      const searchableText = normalize(
        [item.title, item.description, item.tag, item.body].join(" ")
      );
      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesTag && matchesQuery;
    });
  }, [faq, query, tag]);

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
          label="Søk i FAQ"
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
            value={tag}
            onChange={(_, value: string | null) => {
              if (value) setTag(value);
            }}
            size="small"
            aria-label="Filtrer på tag"
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
            <ToggleButton value={allTagsValue}>Alle</ToggleButton>
            {tags.map((item) => (
              <ToggleButton key={item} value={item}>
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Stack>

      {filteredFaq.length > 0 ? (
        <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 md:gap-3 md:pb-3 lg:grid-cols-3">
          {filteredFaq.map((item) => (
            <Link
              key={item._id}
              href={`/post/${item.slug.current}`}
              className="block h-full"
            >
              <SimpleCard
                title={item.title}
                url=""
                description=""
                tag={item.tag || "FAQ"}
                bg="bg-white"
                text="text-emerald-950"
              />
            </Link>
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-emerald-700/20 bg-emerald-50 px-4 py-5 text-sm text-emerald-950">
          Ingen FAQ-er matcher søket eller filteret.
        </p>
      )}
    </div>
  );
}
