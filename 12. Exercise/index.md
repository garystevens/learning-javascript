# Technical Test

Please complete one of the following tests:

## Option One

Given a book in [a text file](http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt for example), write an application that outputs:
- The individual words that appear in the book
- How many times that word appears in the text
- Output whether the number of times each word appears is a prime number.

It would be beneficial to:
- Complete this test using JavaScript and/or Node.js
- Come up with more than one solution and be able to talk about the pro’s and con’s to each
- Ensure the application scales and performs optimally
- Demonstrate thoughts to performance, TDD and OO would be of benefit

#### Assumptions
- Ignore punctuation and capitalisation

## Option Two

Write an application to score a game of Ten-Pin Bowling that takes an input string (examples below), representing a bowling score, and outputs an integer of the score. The application must conform to [the rules of bowling](bowling-rules.md).

#### Scores key:

| Score symbol      | Score                                     |
| -------------     |-------------                              |
| X                 | Strike                                    |
| /                 | Spare                                     |
| \-                | Miss                                      |
| &#124;            | Frame boundary                            |
| &#124;&#124;      | Numbers after represent a bonus ball      |


#### Scoring Examples

X|X|X|X|X|X|X|X|X|X||XX

Ten strikes on the first ball of all ten frames.
Two bonus balls, both strikes.
Score for each frame == 10 + score for next two
balls == 10 + 10 + 10 == 30

Total score == 10 frames x 30 == 300


9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||

Nine pins hit on the first ball of all ten frames.
Second ball of each frame misses last remaining pin.
No bonus balls.
Score for each frame == 9

Total score == 10 frames x 9 == 90

5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5

Five pins on the first ball of all ten frames.
Second ball of each frame hits all five remaining
pins, a spare.
One bonus ball, hits five pins.
Score for each frame == 10 + score for next one
ball == 10 + 5 == 15
Total score == 10 frames x 15 == 150


X|7/|9-|X|-8|8/|-6|X|X|X||81

Total score == 167


#### It would be beneficial to
- Complete this test using JavaScript and/or Node.js
- Come up with more than one solution and be able to talk about the pro’s and con’s to each
- Ensure the application scales and performs optimally
- Demonstrate thoughts to performance, TDD and OO would be of benefit

### Submitting your test
Create a fork of this repository and create your chosen exercise within this folder, including all tests and build files. Send the URL of the repository of the repo to the nominated reviewer/owner of the repo origin.
