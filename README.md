# UFOs
Creating dynamic tables using JavaScript and HTML

## Purpose
The goal of this project was to take data compiled about UFO sightings and build a dynamic table on a webpage that will neatly display the information for the users. This table will also include a filtering function that will allow the user to further refine their search and see data pertinent to their interest.

## Results
### Using the webpage
When the user first comes to the webpage they will see the header, a brief introductory paragraph, and then the table displayed below. The table at this point displays all the data because no filters have been applied. On the left-hand side of the table are the filter categories. Each filter box shows an example for each filter criteria.
![](https://github.com/chichi-ugo/UFOs/blob/main/static/images/webpage.PNG?raw=true)

#### Using the search criteria
The table displays the data sorted by the following column headers: Date, State, Country, Shape, Duration, and Comments. These filters allow for the user to type in their search criteria under the appropriate section. Each entry box shows an example for each section. 
|          |           |
|----------|-----------|
|![](https://github.com/chichi-ugo/UFOs/blob/main/static/images/filters.PNG?raw=true)|![](https://github.com/chichi-ugo/UFOs/blob/main/static/images/placeholders.PNG?raw=true)|

When the user enters a valid option into any of the filters, the table repopulates with the desired criteria. 
![](https://github.com/chichi-ugo/UFOs/blob/main/static/images/example_search.PNG?raw=true) If an invalid input is typed in, the table will return as empty.
![](https://github.com/chichi-ugo/UFOs/blob/main/static/images/invalid_search.PNG?raw=true)

To return the table to the original, simply remove any inputs from the filters.

## Summary
In summation, this webpage accomplishes the goals that we set out to reach, in providing a way for users to interact with the data.

### Drawbacks and Possible Future Developments
- One drawback of the current design is that the user must enter the search criteria exactly as it would be found in the table. Many people may find this difficult when it comes to close misspellings or misunderstanding what to search. 
  - A possible remedy for this could be to incorporate a dropdown menu or offer suggestions for searches.

- Another drawback of the design is that the user must individually delete their inputs if they want to return the table to its original state. So, on instances where the user has applied multiple filters, they would have to go through each section and manually delete their search.
  - A possible remedy for this is to include a button to reset the table and filter search boxes back to their original state.

