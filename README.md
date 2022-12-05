# Path of Programming

A web application to assist current and aspiring programmers in planning their paths to become better programmers.

Problem: There are so many available resources to learn/improve in programming that it can become overwhelming to not only decide what resources to use but also to keep up with your goals.

Solution: This app will allow users to organize available resources to help them accomplish their individual goals.

#### Features:
Base Features:
- A time-based to-do system that allows users to keep track of what resources they want to use on a daily basis
  - For example, a user can add "Complete two easy-level and one medium-level Leetcode problems" to their "Daily To Do" sheet
- A "Future Plans/Timeline" section that allows users to add resources they plan to use in the future in a particular order
  - For example, a user can add "The Odin Project" to their timeline after "Code Platoon" and before "Georgia Tech online masters in CS program"
  - this would also allow users to indicate when they've completed a Current Plan and then the next Future Plan would become the Current Plan
- A "Project Ideas" page that allows users to keep track of project ideas they've had so that even if they can't work on that project now they'll be able to rememeber it in the future

Additional/Stretch Features:
- Weekly/Monthly to-do lists
  - Potential additional feature: a stats tracker to analyze how often the user meets their daily/weekly/monthly goals
- A "Mentor/Partner" page that allows users to keep track of mentors and partners they have. By adding their mentors' and partners' specialties or areas of focus, it'll make it easier to find the right person to ask a question
  - For example, if you have one mentor who focuses on Front End and one who focuses on Back End, this page will help you remember who focuses on what so that if you have a specific question, you can ask the right person
- An "Available/Popular Resources" page that lists popular resources for people to browse if they want to add things to their To-Do lists or Future Plans section

#### Planned APIs to use:
- [Todoist](https://developer.todoist.com/)
- [Pixela](https://pixe.la/)
- [Abstract Screenshot](https://www.abstractapi.com/api/website-screenshot-api)

#### Planned CRUD use:
- create: add a new to-do entry (either long term "Future Plans" or "daily/weekly/monthly to-do"), add new mentor/partner information, add project ideas
- read: view existing entries
- update: change status of to-dos, edit mentor/partner information, re-order project ideas, et al
- delete: allow user to delete previous to-dos, project ideas, et al
