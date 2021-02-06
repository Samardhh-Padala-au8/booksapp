import React, { useState } from "react";
import "../styles/Postbox.css";
import Modal from "./Modal";
import { connect } from "react-redux";
import { toggleModalstate, createPost } from "../redux/actions/Postactions";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const Postbox = ({ toggleModalstate, bookInfo, createPost }) => {
  const [postInput, setPostinput] = useState("");
  const handleclickChoosebook = () => {
    toggleModalstate();
  };
  const handlechangepost = (e) => {
    setPostinput(e.target.value);
  };
  const handleclickPost = () => {
    if (!bookInfo) {
      alert("Please choose book first!");
      return;
    }
    if (postInput.length <= 3) {
      alert("Post must contaiin more than 3 letters!");
      return;
    }
    const bookObj = {
      postText: postInput,
      bookId: bookInfo._id,
      bookTitle: bookInfo.title,
    };
    createPost(bookObj);
  };
  return (
    <div class="contentContainer">
      <Modal />
      <div class="boxContainer">
        <textarea
          value={postInput}
          onChange={handlechangepost}
          class="messageBox"
          id="postMessage"
          placeholder="What are you reading today?"
          style={{ color: "black" }}
        />
        <div className="button-both">
          <Tooltip
            title="Please add the book to which this post is inspired!"
            position="top"
          >
            <button
              onClick={handleclickChoosebook}
              type="button"
              class="bookButton"
              id="submitPost"
            >
              Choose Book
            </button>
          </Tooltip>

          <button
            onClick={handleclickPost}
            type="button"
            class="postButton"
            id="submitPost"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStatetoprops = (storeData) => {
  return {
    bookInfo: storeData.postState.bookInfo,
  };
};

export default connect(mapStatetoprops, { toggleModalstate, createPost })(
  Postbox
);
