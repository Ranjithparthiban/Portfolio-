// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add the animation class to progress bars when in viewport
  function animateProgressBars(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-progress');
      }
    });
  }
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver(animateProgressBars, {
    threshold: 0.2 // Adjust the threshold as needed to control when the animation triggers
  });
  
  // Observe each progress bar
  const progressBars = document.querySelectorAll('.progress_inner');
  progressBars.forEach(progressBar => observer.observe(progressBar));
  