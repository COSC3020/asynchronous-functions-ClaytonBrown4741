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
The worstcase time complexity of this code would simply be $\Theta(log(n))$.  
There are two main pieces of code that have to be considered in this program:  
the map command and the fold command. Everything else is done in linear time,  
so these are the only two that could possibly change the overall runtime.  
First of all, the map command will be done in a constant time (assuming, of course,  
there are enough threads to take care of each individual entry in the given  
array). This is because each thread will go through at the same time and check  
if their respective element is or is not the one that we're looking for. Normally,  
such a process would take n amount of time, but thanks to parellelism there is a  
huge amount of speed up.  
Next up is the fold command. Much like map, such a command would *usually* take n  
amount of time if done in a non-parellel setting. However, thanks to our code using  
multiple threads, this command is executed in a fraction of the time. In this case,  
the fold command will take the threads and have each of them add together two entries  
in the array. After that, each thread will add two of the sums together and so forth  
until eventually the entire array is added up. Such a command will take log(n) amount  
of time.  
So as a result, the worst case runtime of this code would be $\Theta(log(n))$
