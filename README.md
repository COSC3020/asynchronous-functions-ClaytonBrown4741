[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12905372&assignment_repo_type=AssignmentRepo)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature. I have also not provided any test
code, but you can base yours on test code from other exercises.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.  


**QUESTION**:
I am very sorry to bother you, but I am at a genuine loss as to how I am supposed to  
return the value that was gotten from the asynchronous map-reduce approach. The function  
that it's in always returns too soon and gives me the wrong answer. As a result, I've been  
trying to use the callback function, but I've been unable to figure out how to make that  
actually return a value as opposed to just printing out a value (which is utterly useless  
when it comes to testing). I've been looking into ways to get the function to *wait* until  
the map-reduce line has finished, but none of them seem to be useful. I've looked into Promises  
but they don't seem to work either and are very confusing. If you could give me an explicit  
example of how I can return the proper value, or at least let me know the approach I should  
take, I'd be very grateful because after nearly 2 hours of working on this I am no closer to  
being finished with it. Thank you.
