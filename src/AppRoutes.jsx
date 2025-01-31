import { useRoutes } from "react-router-dom";
import Chat from "./pages/Chat";
import ReactFlow from "./pages/ReactFlow";
import TaskManagment from "./pages/TaskManagment";
import TaskForm from "./components/TaskForm";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/task management",
      element: <TaskManagment />,
    },
    {
      path: "/create-task",
      element: <TaskForm />,
    },
    {
      path: "/edit-task/:id",
      element: <TaskForm />,
    },
    {
      path: "/react flow",
      element: <ReactFlow />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
  ]);

  return routes;
};

export default AppRoutes;
