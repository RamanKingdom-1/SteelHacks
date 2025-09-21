import { Box } from "@mui/material";

export default function JobOpportunities() {
  return (
    <Box
      sx={{
        pt: "20px",
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% -10%, #3b3128 0%, #322920 50%)",
        color: "#f4f1ea",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
        lineHeight: 1.5,
        pb: 4,
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          maxWidth: 1040,
          mx: "auto",
          py: 3,
          px: 2,
          display: "grid",
          borderRadius: 5,
          gap: 2,
        }}
      >
       
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Box
            component="h1"
            sx={{
              margin: "0 0 6px",
              fontSize: "clamp(32px, 4vw, 44px)",
              letterSpacing: ".2px",
              fontWeight: 600,
            }}
          >
            Job Opportunities
          </Box>
          <Box
            component="p"
            sx={{ margin: "0 0 18px", color: "#d8d1c7", fontSize: "15.5px" }}
          >
            Find employment opportunities with Pittsburgh area employers who
            actively hire individuals with criminal backgrounds
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "44px 1fr",
            gap: "12px",
            p: 2,
            background: "#4a4036",
            border: "1px solid #6c5d50",
            borderRadius: "14px",
            boxShadow: "0 10px 28px rgba(0,0,0,.28), 0 2px 6px rgba(0,0,0,.18)",
            color: "#d8d1c7",
          }}
        >
          <Box
            sx={{
              width: "44px",
              height: "44px",
              display: "grid",
              placeItems: "center",
              background: "#5d6b54",
              borderRadius: "10px",
            }}
          >
            🔒
          </Box>
          <Box>
            <Box
              component="h3"
              sx={{ margin: "2px 0 6px", color: "#f4f1ea", fontSize: "16px" }}
            >
              Reentry-Friendly Employers
            </Box>
            <Box component="p" sx={{ margin: 0 }}>
              All jobs listed below are from employers in the Pittsburgh area
              who have demonstrated a commitment to hiring individuals with
              criminal backgrounds. These companies focus on skills, potential,
              and character rather than past mistakes.
            </Box>
          </Box>
        </Box>

        {/* Job list*/}
        <Box
          sx={{
            display: "grid",
            gap: 2,
            maxHeight: "calc(100vh - 300px)", 
            overflowY: "auto",
            pr: "6px",
          }}
        >
          <JobCard
            title="Production Associate"
            company="McConway & Torley LLC"
            location="Pittsburgh, PA"
            wage="$21-25/hour"
            summary="We are looking for individuals on the assembly line and using hand tools, while ensuring safety standards."
            tags={[
              { text: "Reentry Friendly", kind: "reentry" },
              { text: "Full-time", kind: "time" },
            ]}
            requirements={[
              "Ability to lift 50 lbs",
              "Reliable transportation",
              "Positive attitude",
            ]}
            applyLink="https://www.indeed.com/viewjob?cmp=MCCONWAY-%2526-TORLEY-LLC&t=Production&jk=2208d39803346eb9&xpse=SoAx67I3t1Azl0yDtR0LbzkdCdPP&xfps=78f1fc2e-7100-436d-a3c8-1cb14f3c7c98&xkcb=SoDW67M3t1A0DAwB1J0LbzkdCdPP&vjs=3"
          />

          <JobCard
            title="Warehouse Worker"
            company="Box Flipz LLC"
            location="Coraopolis, PA"
            wage="$17–19/hour"
            summary="We are committed to providing opportunities for individuals from all backgrounds. Join our team in sorting, packing, shipping and receiving inventory."
            tags={[
              { text: "Reentry Friendly", kind: "reentry" },
              { text: "Part-time", kind: "time" },
            ]}
            requirements={[
              "Lift heavy items",
              "Team player",
              "Fast-paced environment",
            ]}
            applyLink="https://www.indeed.com/cmp/Box-Flipz-LLC"
          />

          <JobCard
            title="Custodial Services"
            company="Confiable Home Healthcare"
            location="Pittsburgh, PA"
            wage="$14–16/hour"
            summary="Provide medical and non-medical care in clients' homes."
            tags={[
              { text: "Reentry Friendly", kind: "reentry" },
              { text: "Full-time", kind: "time" },
            ]}
            requirements={[
              "Night & weekend availability",
              "Light housekeeping",
              "Help with daily living",
            ]}
            applyLink="https://confiablehealth.com/"
          />

          <JobCard
            title="Records Specialist"
            company="Epiq Systems, Inc."
            location="Pittsburgh, PA"
            wage="$15-17/hour"
            summary="You would need to register new files and track their circulation to/from the client"
            tags={[
              { text: "Reentry Friendly", kind: "reentry" },
              { text: "Full-time", kind: "time" },
            ]}
            requirements={[
              "Strong attention to detail",
              "Good organizational skills",
              "Strong communication",
            ]}
            applyLink="https://www.glassdoor.com/job-listing/records-specialist-law-firm-epiq-systems-inc-JV_IC1152990_KO0%2C27_KE28%2C44.htm?jl=1009859097994"
          />
        </Box>
      </Box>
    </Box>
  );
}


const btnBase = {
  padding: "10px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,.08)",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform .06s ease, filter .12s ease, box-shadow .12s ease",
  "&:hover": { filter: "brightness(1.02)", transform: "translateY(-1px)" },
  "&:active": { transform: "translateY(0)" },
  "&:focusVisible": { outline: "2px solid #ffe0d3", outlineOffset: 2 },
};
const btnGhostSx = {
  ...btnBase,
  background: "#eab29b",
  color: "#2f241e",
  boxShadow: "0 2px 10px rgba(0,0,0,.2)",
};


function JobCard({
  title,
  company,
  location,
  posted,
  wage,
  summary,
  tags = [],
  requirements = [],
  applyLink = "#", 
}) {
  const handleApplyClick = () => {
    window.open(applyLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        background: "#5c6353ff", 
        border: "1px solid #7e826f",
        borderRadius: "18px",
        p: { xs: 1.75, sm: 2 },
        boxShadow: "0 10px 28px rgba(0,0,0,.18)",
      }}
    >
     
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto", 
          gap: 2,
          alignItems: "start",
          mb: 1,
        }}
      >
        {/* Left Aligned Titles */}
        <Box>
          <Box
            component="h4"
            sx={{
              m: 0, 
              fontSize: { xs: "18px", sm: "19px" },
              fontWeight: 600,
              letterSpacing: ".2px",
              lineHeight: 1.25,
              textAlign: "left",
            }}
          >
            {title}
          </Box>

         
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2.5,
              alignItems: "center",
              color: "#f0e6dc",
              opacity: 0.95,
              fontSize: "14px",
              mt: 2.3, 
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>🏢</span> {company}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>📍</span> {location}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>🕒</span> {posted}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "flex-end",
            minWidth: "120px",
          }}
        >
          {tags.map((t, i) => (
            <Box
              key={i}
              sx={{
                borderRadius: "999px",
                px: 2,
                py: 0.75,
                fontSize: "14px",
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,.35)",
                textAlign: "center",
                ...(t.kind === "reentry"
                  ? { background: "#e4b69f", color: "#2f241e" }
                  : { background: "transparent", color: "#f4f1ea" }),
              }}
            >
              {t.text}
            </Box>
          ))}
        </Box>
      </Box>

      {/* wage */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          mb: 1.25,
          color: "#f4e9de",
          fontWeight: 700,
          mt: -1,
        }}
      >
        <Box component="span" sx={{ fontSize: "18px" }}></Box>
        <Box component="span">{wage}</Box>
      </Box>

      {/* description */}
      <Box
        component="p"
        sx={{
          m: 0,
          mb: 2,
          color: "#f7efe6",
          maxWidth: "70%", 
          whiteSpace: "normal", 
          wordBreak: "break-word",
          textAlign: "left", 
        }}
      >
        {summary}
      </Box>

      {/* requirements */}
      {requirements.length > 0 && (
        <Box sx={{ mb: 2.25, textAlign: "left" }}>
          <Box
            sx={{
              fontWeight: 700,
              mb: 0.5,
              color: "#f5e7da",
              pl: 1.75, 
            }}
          >
            Requirements:
          </Box>
          <Box
            component="ul"
            sx={{
              m: 0,
              pl: 2, 
              listStylePosition: "inside",
              color: "#f0e6dc",
            }}
          >
            {requirements.map((r, idx) => (
              <li key={idx} style={{ margin: "4px 0" }}>
                {r}
              </li>
            ))}
          </Box>
        </Box>
      )}

      {/* Apply Now*/}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <Box
          component="button"
          onClick={handleApplyClick}
          sx={{ ...btnGhostSx, borderRadius: "999px", py: "8px", px: "12px" }}
        >
          Apply Now
        </Box>
      </Box>
    </Box>
  );
}
