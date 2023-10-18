import { useState } from "react";
import { db } from "../../Firebase";
import { doc, updateDoc } from "firebase/firestore";

const QueryPopup = (props) => {
  const [queryMessage, setQueryMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const AddressVerificationStatus = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const washingtonRef = doc(db, "RAVS", `${props.itemId}`);
    await updateDoc(washingtonRef, {
      verified: false,
      queried: true,
      approvedBy: "",
      queriedBy: JSON.parse(localStorage.getItem("RavsAuthUser"))["fullname"],
      queryMessage: queryMessage,
    });
    window.location.reload();
  };
  return props.trigger ? (
    <div className="querypopup">
      <div className="querypopup-inner">
        <button
          type="button"
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        <div className="queryBox">
          <h2>Query message</h2>
          <form
            action=""
            onSubmit={AddressVerificationStatus}
            className="queryform"
          >
            <input
              type="text"
              placeholder="Query Message"
              onChange={(e) => setQueryMessage(e.target.value)}
              value={queryMessage}
            />

            {isLoading ? (
              <div className="queryaction">
                <span class="queryloader"></span>
              </div>
            ) : (
              <button type="submit">Submit</button>
            )}
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default QueryPopup;
