import React, { useState } from "react";
import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";

const FilterTasks = (props) => {
  const { filters, setFilters } = props;

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <Stack direction="row" flexWrap="wrap" gap={3} alignItems="center">
      <Typography variant="h6" gutterBottom>
        Filter by Source:
      </Typography>
      {Object.keys(filters)?.map((filter) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={filters[filter]}
              onChange={handleFilterChange}
              name={filter}
              color="secondary"
            />
          }
          label={filter.slice(0, 1).toUpperCase() + filter.slice(1)}
        />
      ))}
    </Stack>
  );
};

export default FilterTasks;
