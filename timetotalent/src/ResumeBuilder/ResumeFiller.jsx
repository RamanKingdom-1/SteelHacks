import { useState } from "react";

import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Alert,
  CircularProgress,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Fade,
} from "@mui/material";
import { GoogleGenerativeAI } from "@google/generative-ai";

const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    degree: "",
    graduationDate: "",
    institution: "",
    fieldOfStudy: "",
    skills: "",
    experience: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resumeText, setResumeText] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResumeText("");

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);

      const prompt = `
        Create a professional resume from the following details:

        Name: ${formData.name}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Degree: ${formData.degree}
        Institution: ${formData.institution}
        Field of Study: ${formData.fieldOfStudy}
        Graduation Date: ${formData.graduationDate}
        Skills: ${formData.skills}
        Experience: ${formData.experience}

        Please format it professionally with clear sections. Emphasize strengths and make it appealing to employers.
        If it is pretty good add no notes as this will be converted straight to a pdf. If there are anything that would require the person
        filling in the blank DO NOT INCLUDE IT. IF IT NEEDS TO BE REPLACED BY THE USER DONT INCLUDE IT. Anything positive that you can assume assume it and add it. 
        I want you to hear about the experience and be able to tell me about what was positive that companies would like and add it to my resume
      `;

      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;

      setResumeText(response.text());
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to generate resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatResumeText = (text) => {
    if (!text) return null;

    const lines = text.split("\n");

    return lines.map((line, index) => {
      const parts = line.split(/(\*\*.*?\*\*)/);
      return (
        <Typography
          key={index}
          variant={
            line.match(/^[A-Z][A-Z\s]+:$/) ||
            line.match(/^[A-Z][A-Za-z\s]+:$/) ||
            (line.toUpperCase() === line && line.length > 3)
              ? "h6"
              : "body1"
          }
          paragraph={index < lines.length - 1}
          sx={{
            mt: index > 0 ? 1 : 0,
            mb: 0.5,
            fontWeight:
              line.match(/^[A-Z][A-Z\s]+:$/) ||
              line.match(/^[A-Z][A-Za-z\s]+:$/) ||
              (line.toUpperCase() === line && line.length > 3)
                ? "bold"
                : "normal",
            color: "#2c3e50",
            borderBottom:
              line.match(/^[A-Z][A-Z\s]+:$/) ||
              line.match(/^[A-Z][A-Za-z\s]+:$/) ||
              (line.toUpperCase() === line && line.length > 3)
                ? "1px solid #e0e0e0"
                : "none",
            pb:
              line.match(/^[A-Z][A-Z\s]+:$/) ||
              line.match(/^[A-Z][A-Za-z\s]+:$/) ||
              (line.toUpperCase() === line && line.length > 3)
                ? 0.5
                : 0,
          }}
        >
          {parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <Typography
                  component="span"
                  key={i}
                  sx={{ fontWeight: "bold" }}
                >
                  {part.slice(2, -2)}
                </Typography>
              );
            }
            return part;
          })}
        </Typography>
      );
    });
  };

  const isPostHighSchool = [
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate",
    "Professional Certification",
  ].includes(formData.degree);

  return (
    <Box
      sx={{
        minWidth: 1050,
        mx: "auto",
        mt: .5,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 5,
        boxShadow: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ color: "#2c3e50", fontWeight: "bold" }}
      >
        AI Resume Generator
      </Typography>

      <Typography
        variant="body1"
        paragraph
        align="center"
        sx={{ color: "#7f8c8d", mb: 3 }}
      >
        Fill in your details below to generate a professional resume powered by
        Gemini AI
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ minWidth: 300, flexGrow: 1 }}
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            sx={{ minWidth: 300, flexGrow: 1 }}
          />
        </Box>

        {/* Dropdown menu depending on degree*/}
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="degree-label">Degree/Certification</InputLabel>
          <Select
            labelId="degree-label"
            name="degree"
            value={formData.degree}
            label="Degree/Certification"
            onChange={handleChange}
            sx={{
              textAlign: "left",
              "& .MuiSelect-select": { textAlign: "left" },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="High School Diploma">High School Diploma</MenuItem>
            <MenuItem value="Associate's Degree">Associate's Degree</MenuItem>
            <MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
            <MenuItem value="Master's Degree">Master's Degree</MenuItem>
            <MenuItem value="Doctorate">Doctorate</MenuItem>
            <MenuItem value="Professional Certification">
              Professional Certification
            </MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        
        {formData.degree && (
          <Fade in={!!formData.degree}>
            <Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
                <TextField
                  fullWidth
                  label="Institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  sx={{ minWidth: 300, flexGrow: 1 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Graduation Date"
                  name="graduationDate"
                  value={formData.graduationDate}
                  onChange={handleChange}
                  placeholder="MM/YYYY"
                  sx={{ minWidth: 300, flexGrow: 1 }}
                  required
                />
              </Box>

              
              {isPostHighSchool && (
                <Fade in={isPostHighSchool}>
                  <TextField
                    fullWidth
                    label="Field of Study"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    margin="normal"
                    required
                    placeholder="e.g., Computer Science, Business Administration"
                  />
                </Fade>
              )}
            </Box>
          </Fade>
        )}

        <TextField
          fullWidth
          label="Skills (comma separated)"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          margin="normal"
          required
          placeholder="e.g., JavaScript, React, Project Management"
        />

        <TextField
          fullWidth
          label="Work Experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          required
          placeholder="Include company names, positions, key roles, and duration"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{
            mt: 2,
            mb: 2,
            py: 1.5,
            fontSize: "1.1rem",
            backgroundColor: "#4c5041",
            "&:hover": {
              backgroundColor: "#3a3d32",
            },
          }}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : "Generate Resume"}
        </Button>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </form>

      {resumeText && (
        <Card sx={{ mt: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#2c3e50", fontWeight: "bold", mb: 3 }}
            >
              Your Generated Resume
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 3,
                backgroundColor: "#fff",
                maxHeight: "500px",
                overflow: "auto",
              }}
            >
              {formatResumeText(resumeText)}
            </Paper>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default UserInfoForm;
