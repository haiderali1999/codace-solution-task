import { Box, Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import React from "react";
import FilterTasks from "../components/filters";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Task from "../components/Task";
import useInput from "../hooks/useInput";

const TaskManagment = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const { values: filters, setValues: setFilters } = useInput({
    all: true,
    messages: false,
    calls: false,
    forms: false,
    images: false,
    tasks: false,
  });
  return (
    <Box>
      <FilterTasks filters={filters} setFilters={setFilters} />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" component="h1">
          Tasks
        </Typography>
        <MuiLink component={Link} to="/create-task">
          <Button variant="contained">Add Task</Button>
        </MuiLink>
      </Stack>
      {Array.isArray(tasks) && tasks.length ? (
        tasks.map((task) => {
          if (filters.all || filters[task.queueSource.toLowerCase()])
            return <Task {...task} />;
        })
      ) : (
        <Typography variant="h3">No Task Found</Typography>
      )}
    </Box>
  );
};

export default TaskManagment;
