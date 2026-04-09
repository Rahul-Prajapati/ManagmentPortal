# Management Dashboard

## Getting Started

The project is initialised and has below folder structure-
1. Dashboard
    a- admin.
    b- parent.
    c- student.
    d- techer.

2. Login

Components-
1. Menu.tsx
2. Navbar.tsx
3. UserCard.tsx.

Menu.tsx is a sidebar.
Navbar.tsx has Navbar.
UserCard has Cards which hold the information of the user details on the admin page.

Install Charts library to create graphs to visualize data.
install react-calendar library to show and use calendar features.
created components of Events calendar and Announcement to display the Events and announcement to the respective users and admin.

created pages for student, parent and teacher and their respective components to render data as per the role of the user.

Created pagination demo compoents and calendar to show the data based on the dates and time.

Added modal/Portal component.

Added list pages as per the features of the applications and their respective form to add, delete and edit the form data of the components as well as for the student, teacher and parent

Created the schema for the DB.

Migrated the DB on cloud and added prisma.

Created backend to connect with the DB and implemented dynamic pagination to get the subset of data based on user activity.

Added Search logic to the Search Bar to search items on all the /list route components to search items based on their name which support insensitive search.

Added QueryParams logic to customise search support and create shortcut to search items for better userfriendly support.

Install Clerk and use it for authentication and authorization of the application.

Created custom Login page for the Application.

Added Fetching of data in dynamic search and fetch real time data on the dashboard and list components.

Created container components to seprate fetch calls from the Client Server Components and boost the application page load.

Fetch Student, teacher, Subjects, Parents, Exams etc all the menu/list items to the FE.

Added roles to the Clerk Dashboard, fetch data and implemented the Authentication and authorization.

Protected Routes with as per user role.



