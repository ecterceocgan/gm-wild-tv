To download as a zip, click the green Code dropdown button and select Download ZIP. To run the app open `index.html` in a browser. It shouldn't need any internet
access.

<img src="https://user-images.githubusercontent.com/3740993/112770432-b831dd80-8ff4-11eb-8a1d-3e9da1dadc69.png" alt="Download ZIP button" width="350">

# Code layout

* **index.html**: Entrypoint of the app. Open this in the browser. It loads
  everything else.
* **style.css**: Contains configuration for the look and feel. Colours, fonts etc. are
  all here.
* **script.js**: Contains the logic for time visibility, moving the time across
  the screen, and refreshing the time. Currently displays the time only between 6:00 - 18:00.
  * Change the [`startHour` ](https://github.com/ecterceocgan/gm-wild-tv/blob/main/script.js#L1) constant to adjust when the time begins showing in the morning.
  * Change the [`endHour`](https://github.com/ecterceocgan/gm-wild-tv/blob/main/script.js#L2) constant to adjust when the time stops showing in the evening.
