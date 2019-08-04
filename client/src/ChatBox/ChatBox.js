import React from "react";
import { Modal, Typography, Button, AppBar, Grid } from "@material-ui/core";
import moduleStyles from "./ChatBox.module.css";
import Chat from "../Chat/Chat";
import axios from "axios";

class ChatBox extends React.Component {
  state = {
    chat: ["Hey nerd!"],
    question: "",
    open: false
  };
  closeHandler = () => {
    this.setState({
      open: false
    });
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleChange = event => {
    this.setState({
      question: event.target.value
    });
  };

  askAQuestion = async q => {
    console.log("q", q);
    let res = await axios.post("/chat", { question: q });
    console.log("Res: ", res);
    let data = await res.data;
    console.log("Data: ", data);
    this.setState({
      chat: [...this.state.chat, data]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      chat: [...this.state.chat, this.state.question]
    });
    this.askAQuestion(this.state.question);
    this.setState({
      question: ""
    });
  };

  render() {
    //const classes = useStyles();
    let { open, chat } = this.state;
    return (
      <div>
        <AppBar
          style={{
            backgroundColor: "theme.pallete.primary.main",
            margin: "20px auto",
            padding: "10px 50px"
          }}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography style={{ color: "white" }} variant="h3">
              Scoops Ahoy
            </Typography>
            <Button onClick={this.handleOpen}>
              <Typography
                variant="h4"
                style={{
                  color: "white"
                }}
              >
                Chat with Steve
              </Typography>
            </Button>
          </Grid>
        </AppBar>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.closeHandler}
        >
          <div
            style={{
              top: "calc(50% - 20%)",
              left: "calc(50% - 15%)",
              position: "absolute",
              width: 400,
              height: 400,
              backgroundColor: "black",
              color: "white",
              border: "2px solid #000",
              boxShadow: "theme.shadows[5]",
              padding: "theme.spacing(2, 4, 4)",
              outline: "none"
            }}
          >
            <div id="simple-modal-description">
              <Chat chat={chat} />
            </div>
            <form>
              <input
                onChange={this.handleChange}
                className={moduleStyles.input}
                width="80%"
                type="text"
                id="chat"
                name="chat"
                value={this.state.question}
                placeholder="What's you're question?"
              />
              <button onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ChatBox;
