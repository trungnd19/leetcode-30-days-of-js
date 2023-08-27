function cancellable(fn: Function, args: any[], t: number): Function {
  fn(...args)

  const intervalId = setInterval(function () {
    fn(...args);
  }, t)

  const cancelFn = function () {
    clearInterval(intervalId)
  }

  return cancelFn
};


// Interval use case
// Auto-Saving in Editing Applications: When working with text editors, document processors, or other content creation tools, it's common to have an auto-save feature that periodically saves changes. You can use interval cancellation to schedule auto-saving at regular intervals. If the user explicitly saves the document or exits the application, you can cancel the interval to prevent unnecessary saving operations.
// Animation and Slideshow Timings: While doing development, you may want to create animations or slideshows that automatically transition between different states or images. You can use interval cancellation to control the timing of these transitions. If the user interacts with the animation or slideshow, you can cancel the interval to pause or stop the automatic progression.
// Time-based Reminders: Consider a task management application where users can set reminders for specific tasks. You can use interval cancellation to trigger reminders at specified intervals. Once the user acknowledges the reminder or the task is completed, you can cancel the interval to stop further reminders.

// Read more
// https://leetcode.com/problems/interval-cancellation/editorial/?envType=study-plan-v2&envId=30-days-of-javascript

// Complexity
// Time complexity: O(1)
// Space complexity: O(1)

// Analysis
// To set an interval timer, we use the setInterval function. In the code snippet below, setInterval will repeatedly call () => fn(...args) every t milliseconds. It's important to note that setInterval does not immediately call the function before t milliseconds, which is why we manually call fn(...args) once before setting the interval.
// Next, we define a function called cancelFn that clears the interval when it's called. We return cancelFn from the main function. It's worth mentioning that cancelFn is not called when our cancellable function is initially defined. However, whenever the cancellable function is called, it returns cancelFn. The cancelFn can then be called at a later time to clear the interval.
