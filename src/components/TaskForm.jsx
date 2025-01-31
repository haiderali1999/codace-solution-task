import React, { useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
  Grid2,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import useInput from "../hooks/useInput";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { push, update } from "../redux/slices/task";
import { useLocation, useNavigate } from "react-router-dom";

const defaultvalues = {
  gender: "",
  dob: "",
  taskCategory: "",
  contactTime: "",
  physician: "",
  procedureType: "",
  procedureDate: "",
  acuity: "",
  clinicalRisk: "",
  queueSource: "",
  socialNeeds: "",
  taskAssigned: "",
};

const validateFn = (name, value) => {
  return value?.length < 3 ? "Please enter atleast 3 characters" : "";
};

const TaskForm = () => {
  const { values, setValues, handleChange, errors, reset, validateAll } =
    useInput(defaultvalues, validateFn);
  const location = useLocation();
  const { pathname } = location;
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = pathname?.split("/edit-task/")?.[1];
    const task = tasks.find((task) => task.id === id);
    if (id && !task) {
      navigate("/task management");
    } else if (task) {
      setValues(task);
    }
  }, [pathname]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateAll()) {
      const formData = { ...values };
      if (values?.id) {
        dispatch(update(formData));
      } else {
        formData.id = shortid.generate();
        dispatch(push(formData));
      }
      navigate("/task management");
    }
    // Add logic to submit data to the table or backend
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexWrap="wrap"
      gap={2}
      sx={{ mt: 3 }}
    >
      <Typography variant="h6" gutterBottom>
        Add New Entry
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Gender</Typography>
          <TextField
            label=""
            name="gender"
            value={values.gender}
            onChange={handleChange}
            error={Boolean(errors.gender)}
            helperText={errors.gender}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Date of Birth</Typography>
          <TextField
            type="date"
            label=""
            name="dob"
            value={values.dob}
            onChange={handleChange}
            error={Boolean(errors.dob)}
            helperText={errors.dob}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Task Category</Typography>

          <TextField
            label=""
            name="taskCategory"
            value={values.taskCategory}
            onChange={handleChange}
            error={Boolean(errors.taskCategory)}
            helperText={errors.taskCategory}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Contact Time</Typography>

          <TextField
            type="datetime-local"
            label=""
            name="contactTime"
            value={values.contactTime}
            onChange={handleChange}
            error={Boolean(errors.contactTime)}
            helperText={errors.contactTime}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Physician</Typography>

          <TextField
            label=""
            name="physician"
            value={values.physician}
            onChange={handleChange}
            error={Boolean(errors.physician)}
            helperText={errors.physician}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Procedure Type</Typography>

          <TextField
            label=""
            name="procedureType"
            value={values.procedureType}
            onChange={handleChange}
            error={Boolean(errors.procedureType)}
            helperText={errors.procedureType}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Procedure Date</Typography>

          <TextField
            type="date"
            label=""
            name="procedureDate"
            value={values.procedureDate}
            onChange={handleChange}
            error={Boolean(errors.procedureDate)}
            helperText={errors.procedureDate}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Acuity</Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel
              color={errors.acuity ? "error" : "primary"}
            ></InputLabel>
            <Select
              name="acuity"
              value={values.acuity}
              onChange={handleChange}
              error={Boolean(errors.acuity)}
              helperText={errors.acuity}
              label="Acuity"
            >
              <MenuItem value="VERY HIGH">Very High</MenuItem>
              <MenuItem value="HIGH">High</MenuItem>
              <MenuItem value="MEDIUM">Medium</MenuItem>
              <MenuItem value="LOW">Low</MenuItem>
            </Select>
            {errors.acuity && (
              <FormHelperText sx={{ color: "red" }}>
                Option is required
              </FormHelperText>
            )}
          </FormControl>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Clinical Risk</Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel color={errors.clinicalRisk ? "error" : "primary"}>
              Clinical Risk
            </InputLabel>
            <Select
              name="clinicalRisk"
              value={values.clinicalRisk}
              onChange={handleChange}
              error={Boolean(errors.clinicalRisk)}
              helperText={errors.clinicalRisk}
              label="Clinical Risk"
            >
              <MenuItem value="VERY HIGH">Very High</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
            {errors.clinicalRisk && (
              <FormHelperText sx={{ color: "red" }}>
                Option is required
              </FormHelperText>
            )}
          </FormControl>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Queue Source</Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel color={errors.queueSource ? "error" : "primary"}>
              Queue Source
            </InputLabel>
            <Select
              name="queueSource"
              value={values.queueSource}
              error={Boolean(errors.queueSource)}
              onChange={handleChange}
              label="Queue Source"
            >
              <MenuItem value="MESSAGES">Messages</MenuItem>
              <MenuItem value="CALLS">Calls</MenuItem>
              <MenuItem value="IMAGES">Images</MenuItem>
              <MenuItem value="FORMS">forms</MenuItem>
              <MenuItem value="TASKS">tasks</MenuItem>
            </Select>
            {errors.queueSource && (
              <FormHelperText sx={{ color: "red" }}>
                Option is required
              </FormHelperText>
            )}
          </FormControl>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Social Needs</Typography>
          <TextField
            label=""
            name="socialNeeds"
            value={values.socialNeeds}
            onChange={handleChange}
            error={Boolean(errors.socialNeeds)}
            helperText={errors.socialNeeds}
            fullWidth
            margin="normal"
          />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 4 }}>
          <Typography>Task Assigned</Typography>
          <TextField
            label=""
            name="taskAssigned"
            value={values.taskAssigned}
            onChange={handleChange}
            error={Boolean(errors.taskAssigned)}
            helperText={errors.taskAssigned}
            fullWidth
            margin="normal"
          />
        </Grid2>
      </Grid2>
      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        {values?.id ? "Update" : "Save"}
      </Button>
    </Box>
  );
};

export default TaskForm;
