# Frontend React Code Test

Welcome to the Frontend code test.
- Assigned time is four hours.
- Work will be evauled on both **code quality** and **visual adherance** to the UI/UX design.


## Task description
> A client has asked us to build them an admin portal where their members are displayed.\
> The Home route has already been made.\
> It is now your job to implement the member's page.

The user needs to be able to do the following on the member page:

1. Navigate to the component at '/members'.
   - The page must be accessible at localhost:3000/members.

2. See all members in the system.
   - The member list should be fetched from the backend by HTTP request.
   - The list should be updated on any changes to the backend.

3. Add a new member
   - With the fields: 'name', 'category', 'email', and 'supervisor'.
   - Fields cannot be empty & must match the format received from backend.
   - Member `id` must be **unique** and be generated by us.

4. Remove a member
   - By sending DELETE request to the backend.

5. Filter the member list
   - Filter is applied by clicking the filter icon and selecting a category.
     - Available filters must be based on categories.

6. Show only members that are supervisors.
   - By clicking the "Supervisor only" toggle button.


## Assets ##

Link to interactive UI.
https://xd.adobe.com/view/9c53d716-327e-4679-bf1e-1d80e35738d4-c900/?fullscreen

Icons are placed under `src/assets/icons`



## Backend endpoints ##

* `BASE_URL = http://localhost:8000`

* `GET - /users` Returns all users in the database.

* `DELETE - /users/:userId` Removes a user with given id

* `POST - /users` Adds a new user in the database.
**REQUIRES HEADER: "Content-type: application/json"**

## Technical requirements: ##
- git
- VSCode (or other code editor)
- node & npm

## Clone the repository ##
In your VSCode terminal, run: `git clone https://github.com/joakimsq/code_test_react.git`

### 1: Install the application ###

In the project directory - run:

`npm install`

### 2: Install JSON-Server ###

`npm install json-server --global`

### 3: Start Frontend ###

`yarn start`

### 4: Start Backend ### 

`json-server --watch db.json --port 8000`
