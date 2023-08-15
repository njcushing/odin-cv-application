-- THE ODIN PROJECT: CV APPLICATION --

This project was the first using the React library as part of The Odin Project's 'React' course; therefore
it makes heavy use of JSX and components.

The application itself is a mock CV application, where each section (Personal Information,
Previous Education, Previous Employment, Hobbies & Interests and Personal References) is
split up into its own page, surrounded by a 'Welcome' page and a 'Review' page.

The different sections contain various form fields, some of which are required. The Previous
Education, Previous Employment and References fields can have multiple entries, and these can
be created by clicking the 'Create New' button in each section, which will display a new, blank
form for that particular section.

The Review page allows the user to edit the fields of their CV before submission. The 'Submit' button
will be DISABLED until all necessary fields contain the required information (some of which must match
the provided regex pattern, for example the email address and valid UK phone number fields). To edit a
section, the user must click the 'Edit' button present for each section, where the section will then
mimic how it was on its own page. When done editing, the user can then click the same button again to
prevent further editing.

Upon submission, the user can go back to the Review page to re-submit their application if necessary.