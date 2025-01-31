import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, Chip, Grid2, Stack, Typography } from "@mui/material";
import palette from "../theme";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/slices/task";
import { useNavigate } from "react-router-dom";

const Task = (props) => {
  const {
    taskAssigned = "",
    gender = "",
    dob = "",
    acuity = "",
    taskCategory = "",
    contactTime = "",
    physician = "",
    procedureType = "",
    procedureDate = "",
    clinicalRisk = "",
    queueSource = "",
    socialNeeds = "",
  } = props;

  const color = (level) => {
    switch (level) {
      case "VERY HIGH":
        return palette.error.dark; // Red color for high acuity (error color)
      case "HIGH":
        return palette.error.dark; // Red color for high acuity (error color)
      case "MEDIUM":
        return palette.warning.dark; // Orange for medium acuity (warning color)
      case "LOW":
        return palette.success.dark; // Green for low acuity (success color)
      default:
        return palette.success.dark; // Default color (neutral)
    }
  };
  const bgColor = (level) => {
    switch (level) {
      case "VERY HIGH":
        return palette.error.light; // Red color for high acuity (error color)
      case "HIGH":
        return palette.error.light; // Red color for high acuity (error color)
      case "MEDIUM":
        return palette.warning.light; // Orange for medium acuity (warning color)
      case "LOW":
        return palette.success.light; // Green for low acuity (success color)
      default:
        return palette.success.light; // Default color (neutral)
    }
  };
  const queueSourceIcon = {
    messages: <Icon icon="icon-park-outline:message" width="24" height="24" />,
    calls: <Icon icon="material-symbols:call" width="24" height="24" />,
    images: <Icon icon="heroicons:camera" width="24" height="24" />,
    forms: <Icon icon="la:wpforms" width="24" height="24" />,
    tasks: <Icon icon="fa-solid:tasks" width="24" height="24" />,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
      {/* Header */}

      {/* Patient Information */}
      <Grid2 container spacing={5}>
        {/* Left Column */}
        <Grid2 size={{ sm: 12, md: 2.5 }}>
          <Typography variant="body1" fontWeight="bold">
            {taskAssigned}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1">{gender}</Typography> |{" "}
            <Typography variant="body1">
              DOB: {dayjs(dob).format("MM/DD/YYYY")}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Stack>
              <Typography variant="body1">Acuity</Typography>
              <Chip
                label={acuity}
                sx={{
                  width: "fit-content",
                  fontWeight: "700",
                  color: (theme) => color(acuity, theme),
                  backgroundColor: (theme) => bgColor(acuity, theme),
                }}
              />
            </Stack>
            <Stack>
              <Typography variant="body1">Clinical Risk</Typography>
              <Chip
                label={clinicalRisk}
                sx={{
                  width: "fit-content",
                  fontWeight: "700",
                  color: (theme) => color(clinicalRisk, theme),
                  backgroundColor: (theme) => bgColor(clinicalRisk, theme),
                }}
              />
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 2 }}>
          <Stack>
            <Typography variant="body1">Task Category</Typography>
            <Typography fontWeight="bold" variant="body1">
              {taskCategory}
            </Typography>
          </Stack>
          <Stack sx={{ mt: 2 }}>
            {/* <i></i> */}
            <Typography variant="body1">Queue Source</Typography>
            <Stack direction="row" gap={1} alignItems="center">
              {queueSourceIcon[queueSource.toLowerCase()]}
              <Typography variant="body1">{queueSource}</Typography>
            </Stack>
            {/* <i></i> */}
          </Stack>
        </Grid2>

        <Grid2 size={{ sm: 12, md: 2 }}>
          <Stack>
            <Typography variant="body1">Contact Time</Typography>
            <Typography variant="body1" fontWeight="bold">
              {" "}
              {dayjs(contactTime).format("MMMM DD, YYYY hh:mm A")}
            </Typography>
          </Stack>
          <Stack sx={{ mt: 2 }}>
            <Typography variant="body1">Social Needs</Typography>
            <Typography variant="body1">{socialNeeds}</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <Chip label="⏰" />
              <Chip label="⏱" />
              <Chip label="⏲" />
              <Chip label="⏳" />
            </Box>
          </Stack>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 2 }}>
          <Stack>
            <Stack>
              <Typography variant="body1">Physician</Typography>
              <Typography fontWeight="bold" variant="body1">
                {physician}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="body1">Task Assignee</Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                <Chip label={`⏰ ${taskAssigned}`} color="secondary" />
              </Box>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 2.5 }}>
          <Stack>
            <Typography variant="body1">Procedure Type / Date</Typography>
            <Stack direction="row" gap={2}>
              <Typography fontWeight="bold" variant="body1">
                {procedureType}
              </Typography>
              <Typography fontWeight="bold" variant="body1">
                {dayjs(procedureDate).format("MM-DD-YY")}
              </Typography>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 1 }}>
          <Stack height="100%" justifyContent="space-between">
            <Stack gap={2}>
              <Stack>
                <Button
                  color="info"
                  variant="contained"
                  onClick={() => {
                    navigate(`/edit-task/${props?.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(deleteTask(props))}
                >
                  Delete
                </Button>
              </Stack>
            </Stack>
            <Stack direction="row" gap={2} alignItems="flex-end">
              <Icon icon="ic:baseline-message" width="24" height="24" />
              <Icon icon="material-symbols:call" width="24" height="24" />
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Task;
