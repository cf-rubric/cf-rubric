# Vision

### What is the vision of this product?

Full-stack Django Application with React front-end; Designed for Code Fellows to allow staff to easily track, grade and schedule final whiteboard exams. Uses API calls to canvas to populate student lists and OAUTH with slack to allow staff log-ins. Automates the grading process.

### What pain point does this project solve?

Expedites the scoring process of final whiteboard interviews for instructors.

### Why should we care about your product?

This project will save instructors time grading final whiteboards.

## Scope (In/Out)

### IN - What will your product do

- Staff log-in to work, log-in form submission wired up.

- Populate student list.

- Define and connect models to the database.

- Staff can see list of students that are scheduled with them.

- Display student details page.

### OUT - What will your product not do.

- This project will not automatically grade student whiteboards for instructors.

## Minimum Viable Product

- Staff log-in to work, log-in form submission wired up.

- Populating student list.

- Models defined and connected to the database.

- Wire up temporary manual interfaces that will be automated in the future.

- Scheduling students manually.

- Staff can see list of students that are scheduled with them.

- Have the components ready to be wired up.

- Student details page.

## What are your stretch goals?

- Properly wire up canvas gradebook and student scheduling.

- Personal google calendar displayed on "My Schedule" page with the student appointment details.

- "My class" page.

## Functional Requirements

- Log-in by using Slack credentials.

- Show the list of students on the dashboard using a database.

- Show all the students scheduled for the instructor in the order of when they’re scheduled.

- Populate the student’s details page using a database.

- Input the student’s score in a rubric form.

##  Data flow

- Login with Slack.

- View list of students.

- Schedule student whiteboard.

- Check list of scheduled whiteboards.

- Check student details.

- Input and submit grading data in rubric form.

- Logout.

## Non-Functional Requirements (301 & 401 only)

- App will be secured with Slack OAUTH to prevent unauthorized access.

- Usability - This is important because grading and scheduling with this app should be easier than with google sheets. It will consolidate all tasks needed in one application.

- Reliability - This is important to ensure accurate and secure grading of student whitebaord finals. It will accurately transfer grading results to AWS database over secure network protocols.