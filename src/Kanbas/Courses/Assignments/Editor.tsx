export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />

      {/* Assignment Description */}
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories. The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />

      {/* Points, Assignment Group, Display Grade, Submission Type */}
      <table>
        {/* Points */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Complete/Incomplete">Complete/Incomplete</option>
            </select>
          </td>
        </tr>
        {/* Submission Type with Online Entry Options */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
            <div id="wd-online-entry-options">
              <label>Online Entry Options</label>
              <br />
              <input type="checkbox" id="wd-text-entry" /> Text Entry <br />
              <input type="checkbox" id="wd-website-url" /> Website URL <br />
              <input type="checkbox" id="wd-media-recordings" /> Media
              Recordings <br />
              <input type="checkbox" id="wd-student-annotation" /> Student
              Annotation <br />
              <input type="checkbox" id="wd-file-upload" /> File Uploads
            </div>
          </td>
        </tr>
        {/* Assign Section */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign">Assign</label>
          </td>
          <td>
            <div id="wd-assign-section">
              {/* Assign To */}
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" type="text" value="Everyone" />
              <br />
              <br />

              {/* Due Date */}
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" value="2024-05-13" />
              <br />
              <br />

              {/* Available From and Until */}
              <table>
                <tr>
                  <td>
                    <label htmlFor="wd-available-from">Available from</label>
                    <br />
                    <input
                      type="date"
                      id="wd-available-from"
                      value="2024-05-06"
                    />
                  </td>
                  <label htmlFor="wd-available-until">Until</label>
                  <br />
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-05-20"
                  />
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>

      {/* Separator line */}
      <hr />

      <table width="100%">
        <tr>
          <td align="right" valign="top" width="100%">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
