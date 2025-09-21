import React, { useState } from "react";
import { Box } from "@mui/material";

export default function CommunityEvents() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <Box
      sx={{
        pt: "20px",
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% -10%, #3b3128 0%, #575c4bff 50%)",
        color: "#f4f1ea",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
        lineHeight: 1.5,
        borderRadius: 5,
        pb: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 1040,
          mx: "auto",
          py: 3,
          px: 2,
          borderRadius: 5,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3, borderRadius: 5 }}>
          <Box
            component="h1"
            sx={{
              margin: "0 0 6px",
              fontSize: "clamp(32px, 4vw, 44px)",
              letterSpacing: ".2px",
              fontWeight: 600,
            }}
          >
            Community Events
          </Box>
          <Box
            component="p"
            sx={{
              margin: "0 0 18px",
              color: "#d8d1c7",
              fontSize: "15.5px",
            }}
          >
            Connect with your Pittsburgh community through support groups,
            workshops, and social events
          </Box>
        </Box>

        {}
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
            mb: 2,
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
            💬
          </Box>
          <Box>
            <Box
              component="h3"
              sx={{
                margin: "2px 0 6px",
                color: "#f4f1ea",
                fontSize: "16px",
              }}
            >
              Building Community Connections
            </Box>
            <Box component="p" sx={{ margin: 0 }}>
              These events are designed to help you find your community, develop
              new skills, and access resources in the Pittsburgh community. All
              events are free and welcoming to everyone.
            </Box>
          </Box>
        </Box>

        {}
        <EventCard
          badge={{ text: "Support", kind: "support" }}
          recurring
          title="Digital Skills: Getting Started with Computers"
          org="Free To The People"
          date="Monday, September 22, 2025"
          time="11:00 AM – 12:00 PM"
          place="Carnegie Library Of Pittsburgh, Downtown & Business"
          desc="Learn the basics of using a computer, as well as resources to practice and continue your digital skills journey. We will review the CIPA and NCIPA legislation and how the library uses filtering to keep minors safe online."
          price="Free"
          email="events@freetothepeople.org"
        />

        <EventCard
          badge={{ text: "Support", kind: "support" }}
          recurring
          title="WORKshop: Career"
          org="Free To The People"
          date="Monday, September 22, 2025"
          time="4:30 PM – 5:30 PM"
          place="Carnegie Library Of Pittsburgh, Downtown & Business"
          desc="Help you with getting a resume started, placing the finishing touches on a cover letter, or providing tips on interviewing."
          price="Free"
          email="events@freetothepeople.org"
        />

        <EventCard
          badge={{ text: "Support", kind: "support" }}
          recurring
          title="Job and Career: College Scholarships and FAFSA"
          org="Free To The People"
          date="Monday, September 22, 2025"
          time="6:00 PM – 7:30 PM"
          place="Carnegie Library Of Pittsburgh, Lawrenceville"
          desc="This class can help you understand early decision applications, write an impactful personal statement, or best leverage your test scores and extracurriculars for your application. Also, we will discuss how to apply for financial aid and search for scholarships that are tailored towards you!"
          price="Free"
          email="events@freetothepeople.org"
        />

        <EventCard
          badge={{ text: "Support", kind: "support" }}
          recurring
          title="Digital Skills: Android Device Basics"
          org="Free To The People"
          date="Tuesday, September 23, 2025"
          time="12:00 PM – 1:00 PM"
          place="Carnegie Library Of Pittsburgh, East Liberty"
          desc="Learn how to get the most out of your smartphone or tablet using Android, Google's popular operating system used by most device manufacturers besides Apple. We will review the CIPA and NCIPA legislation and how the library uses filtering to keep minors safe online."
          price="Free"
          email="events@freetothepeople.org"
        />

        <EventCard
          badge={{ text: "Support", kind: "support" }}
          recurring
          title="Tactile Tuesday"
          org="Free To The People"
          date="Tuesday, September 23, 2025"
          time="2:00 PM – 3:30 PM"
          place="Carnegie Library Of Pittsburgh, East Liberty"
          desc="Experience embossed, Swell Form, and 3-D printed items, and explore ideas and interests on the topic of tactile accessibility in an open discussion. We will also learn about the tools and software used to produce tactile objects."
          price="Free"
          email="events@freetothepeople.org"
        />

        <EventCard
          badge={{ text: "Support", kind: "support" }}
          recurring
          title="Book Club"
          org="Free To The People"
          date="Tuesday, September 23, 2025"
          time="6:00 PM – 7:00 PM"
          place="Carnegie Library of Pittsburgh, Main Library"
          desc="A lively discussion on The Great Divide: A Novel by Cristina Henríquez. This title is available for checkout in our Catalog and also as an eBook and eAudio on Libby and as an eBook and eAudio on Hoopla."
          price="Free"
          email="events@freetothepeople.org"
        />

        <EventCard
          badge={{ text: "Support", kind: "support" }}
          recurring
          title="Book Club"
          org="Free To The People"
          date="Tuesday, September 23, 2025"
          time="5:00 PM – 6:00 PM"
          place="Carnegie Library of Pittsburgh, Main Library"
          desc="A lively discussion on The Great Divide: A Novel by Cristina Henríquez. This title is available for checkout in our Catalog and also as an eBook and eAudio on Libby and as an eBook and eAudio on Hoopla."
          price="Free"
          email="events@freetothepeople.org"
        />

        <EventCard
          badge={{ text: "Career", kind: "career" }}
          title="Business Plan Essentials – Market Analysis"
          org="Carnegie Library of Pittsburgh"
          date="Wednesday, September 24, 2025"
          time="3:00 PM – 4:30 PM"
          place="Carnegie Library Of Pittsburgh, Main Library (Job & Career Education Center)"
          desc="Creating a business plan is essential for any entrepreneur or business owner. In this class, you will learn how to locate market data and compare it with industry data in a business plan."
          price="Free"
          email="career@carnegielibrary.org"
        />

        <EventCard
          badge={{ text: "Support", kind: "support" }}
          title="Community Scan Day"
          org="Carnegie Library of Pittsburgh"
          date="Wednesday, September 24, 2025"
          time="4:00 PM – 7:00 PM"
          place="Carnegie Library Of Pittsburgh, East Liberty"
          desc="Scan your old photographs, documents, slides, and more for free at Community Scan Day! Staff will teach you how to digitize your items and, if you'd like, help you donate them to the CLP Digital Community Collection."
          price="Free"
          email="events@carnegielibrary.org"
        />
      </Box>
    </Box>
  );
}

function EventCard({
  badge,
  recurring = false,
  title,
  org,
  date,
  time,
  place,
  desc,
  email,
  price,
  attending,
}) {
  const getPillStyle = (kind) => {
    switch (kind) {
      case "support":
        return { background: "#6b8a7a", color: "#eef6ef" };
      case "job":
        return { background: "#6c986f", color: "#eef6ef" };
      case "social":
        return { background: "#7c6f66", color: "#fff2ea" };
      default:
        return { background: "#6f7768", color: "#eef3ea" };
    }
  };


  const downloadICS = () => {

    const dateObj = new Date(date);
    const [startTime, endTime] = time.split(" – ");


    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

 
    const parseTime = (timeStr) => {
      const [timePart, modifier] = timeStr.split(" ");
      let [hours, minutes] = timePart.split(":");

      if (modifier === "PM" && hours !== "12") {
        hours = String(parseInt(hours, 10) + 12);
      } else if (modifier === "AM" && hours === "12") {
        hours = "00";
      }

      return `${hours.padStart(2, "0")}${minutes.padStart(2, "0")}`;
    };

    const startDateTime = `${year}${month}${day}T${parseTime(startTime)}00`;
    const endDateTime = `${year}${month}${day}T${parseTime(endTime)}00`;


    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Community Events//EN
BEGIN:VEVENT
UID:${Date.now()}@communityevents.org
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:${startDateTime}
DTEND:${endDateTime}
SUMMARY:${title}
DESCRIPTION:${desc.replace(/\n/g, "\\n")}\\n\\nOrganization: ${org}\\nLocation: ${place}
LOCATION:${place}
ORGANIZER;CN=${org}:MAILTO:${email}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #5b4a3f 0%, #55463b 100%)",
        border: "1px solid #725f52",
        borderRadius: "18px",
        p: 2,
        boxShadow: "0 10px 28px rgba(0,0,0,.28), 0 2px 6px rgba(0,0,0,.18)",
        mb: 2,
      }}
    >
      {}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr auto" },
          gap: "16px",
          alignItems: "start",
          mb: 1.5,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "0 0 8px",
              fontSize: "21px",
              letterSpacing: ".2px",
              flexWrap: "wrap",
            }}
          >
            {title}
            {recurring && (
              <Box
                sx={{
                  borderRadius: "999px",
                  padding: "4px 10px",
                  fontSize: "12px",
                  border: "1px solid rgba(255,255,255,.08)",
                  boxShadow: "0 1px 0 rgba(0,0,0,.2) inset",
                  whiteSpace: "nowrap",
                  background: "#6f7768",
                  color: "#eef3ea",
                }}
              >
                Recurring
              </Box>
            )}
          </Box>

          {}
          <Box
            component="ul"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "6px",
              margin: 0,
              padding: 0,
              listStyle: "none",
              color: "#d8d1c7",
              fontSize: "14px",
            }}
          >
            <Box
              component="li"
              sx={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <span>🏢</span> {org}
            </Box>
            <Box
              component="li"
              sx={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <span>📅</span> {date}
            </Box>
            <Box
              component="li"
              sx={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <span>⏰</span> {time}
            </Box>
            <Box
              component="li"
              sx={{ display: "flex", gap: "8px", alignItems: "center" }}
            >
              <span>📍</span> {place}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: "8px",
            justifyItems: { xs: "start", sm: "end" },
            textAlign: { xs: "left", sm: "right" },
          }}
        >
          <Box
            sx={{
              borderRadius: "999px",
              padding: "4px 10px",
              fontSize: "12px",
              border: "1px solid rgba(255,255,255,.08)",
              boxShadow: "0 1px 0 rgba(0,0,0,.2) inset",
              whiteSpace: "nowrap",
              ...getPillStyle(badge.kind),
            }}
          >
            {badge.text}
          </Box>
          <Box
            sx={{
              background: "rgba(0,0,0,.18)",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "12px",
              color: "#f4f1ea",
              border: "1px solid rgba(255,255,255,.06)",
            }}
          >
            {price}
          </Box>
          <Box
            sx={{
              color: "#d8d1c7",
              fontSize: "12px",
            }}
          >
            {attending}
          </Box>
        </Box>
      </Box>

      {}
      <Box
        sx={{
          height: "1px",
          my: 1.5,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent)",
          borderRadius: "1px",
        }}
      />

      {}
      <Box
        component="p"
        sx={{
          margin: "0 0 12px",
          color: "#f2ece5",
          fontSize: "15.5px",
        }}
      >
        {desc}
      </Box>

      {}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr auto" },
          gap: "12px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "#c9c0b5",
            fontSize: "14px",
          }}
        >
          Contact:{" "}
          <Box
            component="a"
            href={`mailto:${email}`}
            sx={{ color: "#f4f1ea", textUnderlineOffset: "3px" }}
          >
            {email}
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "10px" }}></Box>
        <Box
          component="button"
          onClick={downloadICS}
          sx={{
            padding: "10px 14px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,.08)",
            fontWeight: 600,
            cursor: "pointer",
            transition:
              "transform .06s ease, filter .12s ease, box-shadow .12s ease",
            background: "#3b3129",
            color: "#f4f1ea",
            boxShadow: "0 2px 10px rgba(0,0,0,.25)",
            "&:hover": {
              filter: "brightness(1.02)",
              transform: "translateY(-1px)",
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
        >
          Save Event
        </Box>
      </Box>
    </Box>
  );
}
