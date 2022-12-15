import "../../chats.css";
const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i>
          <span className="position-absolute top-0 start-10 translate-middle  border border-light rounded-circle bg-danger p-2">
            {/* <span class="visually-hidden">unread messages</span> */}
          </span>
        </i>
        <i className="  bi bi-chat-right-text comment"></i>

        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6 bg="warning">Let' s Chat - Online</h6>
        </div>

        <div className="chat-form">
          <div className="cht-msg">
            {Array.from({ length: 2 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b>You wrote:</b> Hello, world!! this is a toast message
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote</b> Hello, world!! this is a toast message
                </p>
              </div>
            ))}
          </div>
          <textarea
            className="form-control"
            id="clientChatMsg"
            placeholder="Your Text Message"
          ></textarea>
          <button className="btn - btn-success btn-block">Submit</button>
        </div>
      </div>
    </>
  );
};
export default UserChatComponent;
