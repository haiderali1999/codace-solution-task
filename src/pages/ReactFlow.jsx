import { Stack, Typography } from "@mui/material";
import React from "react";

const ReactFlow = () => {
  return (
    <Stack>
      <Typography variant="h4">
        Question: Explain react flow and what is use of it
      </Typography>
      <Typography variant="p">
        Answer: React Flow is a powerful library used to create interactive
        node-based diagrams and workflows in React applications. It provides a
        way to visually represent and manage complex structures, such as
        flowcharts, graphs, and diagrams, that users can interact with (e.g.,
        drag and drop nodes, connect them, zoom in/out, etc.). React Flow is
        particularly useful when you need to build applications that require
        dynamic, visual workflows or relationships between various elements. You
        can think of it as a framework for building apps that need visual
        representations of processes, states, or tasks where elements (nodes)
        are connected by edges.
      </Typography>
    </Stack>
  );
};

export default ReactFlow;
