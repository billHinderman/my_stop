Sprout Social Tweets Inbox
=============
###### Timeframe: Dec 2 - Dec 5


1. Deviations from wireframe
---

### Responsive

#### Card layout 768px breakpoint
In order to fit comfortably on mobile screens, the column layout of the cards gets applied at 768px breakpoint.  Below this, tweet cards are treated as solitary entities with their own visual hierarchy.

#### Column labels show at 768px
To keep with responsive styles of tweets, column labels are only relevant at the 768px breakpoint.  Below this, they are hidden.

#### Summary section 960px breakpoint
Summary section, rather than sitting next to the tweets list (as per wireframe), takes up the full page width under a 960px breakpoint.  This is to allow for the tweets to retain their grid layout down to 768px without sacrificing screen space for the summary.

### Display

#### 1/3 height page header
Page header added to increase likelihood that user won't begin to scroll past important content before it finishes loading.

#### Default profile icon
Some icons were not coming back.  Set fallback background image as Sprout logo, rather than whitespace on card.

#### Date changed to human-readable
Date element in tweet has been replaced with a human-readable version within a <time> tag.  Machine-readable datetime attribute and hoverable title attribute hold the full datetime given by the JSON.

### Interaction

#### Hierarchy of remove/complete
As discussed at the office, there isn't a clear hierarchy of removal/completion within the tweets.  As 'complete' is the primary action, 'complete' has been changed to a primary toggle treatment, and 'remove' has been changed to a more subtle 'x' which appends a confirm treatment.

#### Twitter profile image link
Image has been turned into a link that reaches user's profile.  Follows standard twitter behavior that both username and profile image direct to user's profile.

#### Show/hide completed toggle
Show/hide completed tweet toggle defaults to 'on' so that completed tweets can more quickly be moved back to an incomplete state.


2. Technologies used
---

#### BackboneJS
#### jQuery
#### RequireJS
#### UnderscoreJS
#### SASS
#### Typekit


3. Next steps
---

#### Deliver the following enhancements (in priority order):
* Sort list by name/date by toggling list labels.
* Persist changes to backing data on page reoad.

4. Directory structure
---

### Assets
#### Images


#### Script
##### Collections
##### Lib
##### Models
##### Rebar
##### Views
##### Component
##### Tweet


#### Style
##### Component
##### Module
##### Rebar


### Templates

#### Component
#### Page    
