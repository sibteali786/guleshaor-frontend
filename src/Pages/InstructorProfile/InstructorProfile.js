import {
  ButtonBase,
  Container,
  Button,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import "./InstructorProfile.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import profileImage from "../../Assets/Profiles/Profile Pic.png";
import instructorImages from "../../Assets/Profiles/instructorImages";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const InstructorProfile = () => {
  const [inputFields, setInputFields] = useState([
    {
      inputValue: "#photography",
    },
  ]);
  const [inputValue, setinputValue] = useState("");
  const handleAddFields = () => {
    if (inputValue === "") {
      console.log("Not Allowed");
    } else {
      setInputFields([...inputFields, { inputValue }]);
    }
  };
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <div className="Instrcutor-container">
      <div className="backgroundPicture"></div>
      <Container maxWidth="lg">
        <ButtonBase
          sx={{
            width: 150,
            height: 150,
            position: "relative",
            top: "-10vh",
            left: "-2vw",
          }}
        >
          <img alt="complex" src={profileImage} style={{ width: "100%" }} />
        </ButtonBase>
        <h3>John Doe</h3>
        <a href="email:johnDoe">@johndoe</a>
        <p>Astrophotographer 🌌</p>
        <p>Gamer 👾</p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#196AA0", borderRadius: "1.3rem" }}
        >
          Follow
        </Button>
        <Container maxWidth="sm">
          <h4>Photos</h4>
          <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
            {instructorImages.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Button
            variant="text"
            style={{ fontWeight: "bold", color: "#196AA0" }}
          >
            More +
          </Button>
        </Container>
      </Container>
      <Container
        maxWidth="md"
        style={{ backgroundColor: "#F1F1F1", borderRadius: "1rem" }}
      >
        <h2>How Astrophotography changed my life</h2>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam
          bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer
          in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
          Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.
          Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris
          sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat
          turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec
          ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin
          vitae facilisis nisi, ac posuere leo.
        </Typography>
        
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap:"wrap"
          }}
        >
          {inputFields.map((inputField, index) => (
            <Button
              key={index}
              variant="contained"
              size="small"
              style={{
                color: "#76A4CE",
                backgroundColor: "#FFF",
                borderRadius: "1rem",
                margin:"0.2rem"
              }}
            >
              {inputField.inputValue}
            </Button>
          ))}
          <TextField
          label="Skill"
          onChange={(e) => {
            setinputValue(e.target.value);
          }}
          size="small"
        />
        <IconButton
          onClick={() => handleAddFields()}
          style={{
            color: "#76A4CE",
            backgroundColor: "#FFF",
            borderRadius: "2rem",
            margin: "0.5rem",
          }}
        >
          <AddIcon />
        </IconButton>
        <Button variant="text" style={{ fontWeight: "bold", color: "#196AA0" }}>
          Read More
        </Button>
        </div>
      </Container>
        <Link to="/profile" style={{textDecoration:"none"}}>
        <Button variant="text" style={{ fontWeight: "bold", color: "#196AA0" }}>
          More Posts by John Doe
        </Button>
        </Link>
    </div>
  );
};

export default InstructorProfile;
