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


**Answer**:  
The worstcase time complexity of this code would be $\Theta(log(n))$ for the span,  
and would be $\Theta(n)$ for the work.  
There are two main pieces of code that have to be considered in this program:  
the map command and the fold command. Everything else is done in linear time,  
so these are the only two that could possibly change the overall runtime.  
I will analyze both of these in terms of their span and work.  
First of all, the map command will be done in a constant time for the span because the  
infinite number of threads would be enough to handle every element at once.  
Each thread will go through at the same time and check if their respective element  
is or is not the one that we're looking for. Alternatively, the *work* for such a  
task would be n, as the single processor would have to go through every element on  
its own and see if they are equal to the key or not.  
Next up is the fold command. Thanks to span and its theoretical infinite number of   
threads, this command is executed fairly quickly. In this case, the fold command will  
take the threads and have each of them add together two entries  
in the array. After that, each thread will add two more of the sums together and so forth  
until eventually the entire array is added up. Such a command will take log(n) amount  
of time. The work for this command, however, would once again take an n amount of time.  
This is because the processor will have to iterate through every entry in the array  
on its own while adding the values together.  
So as a result, the worst case runtime for the span would be $\Theta(log(n))$, while the  
worst case runtime for the work would be $\Theta(n)$
