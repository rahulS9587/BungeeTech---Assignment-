
# movies-app
 I have created a simple React app that fetches movie data from the OMDb API. Users can search for movies, view details like ratings, release year, and box office collections, and save favorites. Built with Tailwind CSS for styling, it offers basic sorting and responsive design.
 
--Here in this  project i am using the OMDB API for fetching movie data. http://www.omdbapi.com/?i=tt3896198&apikey=6ea1ea55 in the code with my own API key.

 
## Components
1. Movies: Displays a list of movies with pagination and sorting features.
2. Watchlist: Shows the user's favorite movies.
3. Banner: Displays a banner at the top of the page.
4. Home: Landing page component.
5. Navbar: Includes IMDb-style branding and links to other pages.
6. MovieCard: Displays movie information in a card format.

## Features
1. Search for Movies: Users can search movies by title and view basic information.
2. View Movie Details: Displays details like ratings, release year, and box office collections in MovieCard.
3. Pagination: Navigate through movies using "Next" and "Previous" buttons.
4. Favorites: Add/remove movies to/from your favorites, stored in localStorage.
5. Sorting: Sort movies by year or other criteria.
6. Tailwind CSS: Modern, responsive design using Tailwind CSS.


## Setup and Run Instructions ( Modify this as necessary )
1. **Clone the repository:**
  git clone https://github.com/rahulS9587/BungeeTech-Assignment.git
  

2. **Navigate to the project directory:**
cd movies-app
Run the app: Start the development server and open the app in your browser.



## Usage
Search: Enter a movie title to search.
Sort: Sort movies by release year.
Favorites Management: Add/remove movies from the favorites list.



## Assumptions and Decisions
Assumption 1: API returns all necessary movie details.
Assumption 2: App will display movies with available posters and data.
Design Decisions: Choose React for component-based architecture, Tailwind CSS for styling.

 ## API Reference
OMDb API: The app fetches movie data (title, poster, rating, box office) using OMDb API endpoints.

 ## API Key
   - Obtain an API key from OMDB API.
   
     const API_KEY = "6ea1ea55";
     API KEY -- https://www.omdbapi.com/?i=tt3896198&apikey=6ea1ea55


4. **Run the application:**
   - Open the `index.html` file in a browser to view the application.


### Interaction
Search Bar: Users can interact with the search bar to input a movie title. Upon submitting the search, the app fetches and displays a list of relevant movies.

Movie Cards: Each movie is displayed as a card, showing details like title, poster, year, rating, and box office. Clicking on a movie card reveals further information.

Favorites: Users can add a movie to their favorites by clicking the "Add to Favorites" button on each card. If a movie is already in favorites, they can remove it by clicking "Remove from Favorites."

Pagination Controls: Users can navigate between pages of search results using "Next" and "Previous" buttons.

Sort Option: Users can sort the movie results by year, helping them organize movies by release date.

 ## Screenshots!
 -- home page screenshot..
[Screenshot 2024-10-04 at 4 00 39 PM](https://github.com/user-attachments/assets/ee50cec3-2b1d-44ca-8bcf-1158d0380300)

-- add to watchlist screeshot...
[Screenshot 2024-10-04 at 4 00 58 PM](https://github.com/user-attachments/assets/d1bf9c8b-1aa7-4f31-81c1-cbe4882de38e)

-- watlist page screenshot
[Screenshot 2024-10-04 at 4 01 09 PM](https://github.com/user-attachments/assets/c3577f0a-9293-4cd3-ab0d-5f8bccd144ef)



## API Reference 
- **API Provider Name**: -- OMDB API 
  - **Endpoint 1**: 
    ```
    http://localhost:3000/ -- for home page
    ```
  - **Endpoint 2**:  http://localhost:3000/watchlist -- for watchlist page
 
 ## Technologies Used
Frontend: React, Tailwind CSS.
APIs: OMDb API for movie data.
Other Tools: Axios for API requests, localStorage for managing favorites.


