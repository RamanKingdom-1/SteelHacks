import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Container,
  Fade,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const colors = {
  terracotta: "#CB997E",
  sand: "#DDBEA9",
  cream: "#FFE8D6",
  sageLight: "#B7B7A4",
  sage: "#A5A58D",
  olive: "#6B705C", 
};

const Page = styled(Box)(() => ({
  minHeight: "100vh",
  background: `radial-gradient(1200px 600px at 20% -10%, ${colors.sand} 0%, ${colors.cream} 50%)`,
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
  lineHeight: 1.6,
  borderRadius: 5,
}));

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(3),
  padding: theme.spacing(3),
  background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.sand} 100%)`,
  borderRadius: 5,
  boxShadow: "0 12px 28px rgba(0,0,0,.08)",
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    padding: theme.spacing(2.5),
    borderRadius: 22,
    margin: theme.spacing(2),
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const StatisticsSection = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  paddingBlock: theme.spacing(6),
  background: `linear-gradient(180deg, ${colors.sand} 0%, ${colors.cream} 100%)`,
  borderRadius: 28,
  margin: theme.spacing(3),
  boxShadow: "0 12px 28px rgba(0,0,0,.12)",
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    paddingBlock: theme.spacing(5),
    borderRadius: 22,
    margin: theme.spacing(2),
  },
}));

// Stats
const StatCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3),
  backgroundColor: colors.olive,
  color: colors.cream,
  borderRadius: 24,
  border: `1px solid ${colors.sage}`,
  boxShadow: "0 10px 24px rgba(0,0,0,.08)",
  transition: "transform 120ms ease, box-shadow 120ms ease",
  height: "100%",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 28px rgba(0,0,0,.12)",
  },
}));

const AboutPage = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("statistics");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        setStatsVisible(rect.top < window.innerHeight - 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Page>
      {/* ---------- About ---------- */}
      <HeroSection>
        <Container maxWidth="lg" disableGutters>
          <Grid
            container
            alignItems="center"
            columnSpacing={{ xs: 2, md: 3 }}
            rowSpacing={2}
            sx={{ borderRadius: 5 }}
          >
            {/* Logo */}
            <Grid item md={6} xs={12}>
              <LogoBox>
                <Box
                  component="img"
                  src="Untitled_Artwork.png"
                  alt="TimeToTalent Logo"
                  sx={{
                    width: { xs: "100%", md: 520 },
                    height: "auto",
                    borderRadius: 5,
                    boxShadow: "0 12px 28px rgba(0,0,0,.08)",
                    border: `1px solid ${colors.sand}`,
                  }}
                />
              </LogoBox>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  maxWidth: 520,
                  mx: { xs: 0, md: "auto" },
                  borderRadius: 5,
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    color: colors.olive,
                    letterSpacing: ".2px",
                    fontSize: { xs: "1.8rem", md: "2.3rem" },
                    mb: 1.5,
                  }}
                >
                  Our Inspiration
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: colors.olive,
                    mb: 1.25,
                    fontSize: "1.5rem",
                    fontWeight: "Bold",
                  }}
                >
                  Looking into many overlooked populations, one that stood out
                  to us was the formerly incarcerated. They are people who after
                  getting out of jail, want to better themselves but are held
                  back by the stigma of their past. We want to help them get
                  back on their feet and give them the tools they need to
                  succeed.
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: colors.olive,
                    mb: 1.25,
                    fontSize: "1.5rem",
                    fontWeight: "Bold",
                  }}
                >
                  Our goal at TimeToTalent is to provide formerly incarcerated
                  individuals with opportunities for self-improvement by opening
                  channels that help reintegrate them into society.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: colors.olive,
                    fontSize: "1.5rem",
                    fontWeight: "Bold",
                  }}
                >
                  We aim to support growth across career and social paths so
                  they can reach their goals without feeling limited by
                  circumstances.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* ---------- Statistics  ---------- */}
      <StatisticsSection id="statistics">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 4,
              color: colors.olive,
              fontSize: { xs: "2.1rem", md: "2.5rem", fontWeight: "Bold" },
              letterSpacing: ".2px",
            }}
          >
            Our Impact
          </Typography>

          <Fade in={statsVisible} timeout={700}>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                gap: 2,
                pb: 1,
                scrollSnapType: "x mandatory",
                "&::-webkit-scrollbar": {
                  height: 8,
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: colors.olive,
                  borderRadius: 4,
                },
              }}
            >
{[
  {
    value: "82%",
    title: (
      <>
        of <strong>formerly incarcerated people</strong> are re-arrested
      </>
    ),
    desc: "within ten years of release",
  },
  {
    value: "",
    title: (
      <>
        <strong>FIPs</strong> face huge obstacles to find <strong>stable employment</strong>
      </>
    ),
    desc: "limited opportunities increase recidivism risk",
  },
  {
    value: "89%",
    title: (
      <>
        of <strong>FIPs</strong> who are re-arrested are <strong>unemployed</strong>
      </>
    ),
    desc: "",
  },
  {
    value: "2×",
    title: (
      <>
        Those who are <strong>unemployed</strong> are more likely
      </>
    ),
    desc: "to be re-arrested than employed peers",
  },
  {
    value: "8/10",
    title: (
      <>
        <strong>Youth offenders</strong> are arrested again
      </>
    ),
    desc: "within five years of release",
  },
  {
    value: "55%",
    title: (
      <>
        of <strong>employed FIPs</strong> avoid re-arrest
      </>
    ),
    desc: "compared to only 30% unemployed",
  },,
                {
                  value: "8/10",
                  title: (
                    <>
                      <strong>youth</strong> offenders are arrested again
                    </>
                  ),
                  desc: "within five years of release",
                },
              ].map((stat, idx) => (
                <Box
                  key={idx}
                  sx={{
                    flex: "0 0 280px", 
                    scrollSnapAlign: "start",
                  }}
                >
                  <StatCard>
                    <CardContent sx={{ width: "100%" }}>
                      <Typography
                        variant="h2"
                        component="div"
                        sx={{
                          fontWeight: 900,
                          color: colors.cream,
                          fontSize: { xs: "2.4rem", md: "3rem" },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ mt: 1.25, color: colors.cream }}
                      >
                        {stat.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mt: 0.5, color: colors.cream }}
                      >
                        {stat.desc}
                      </Typography>
                    </CardContent>
                  </StatCard>
                </Box>
              ))}
            </Box>
          </Fade>
        </Container>
      </StatisticsSection>
    </Page>
  );
};

export default AboutPage;
