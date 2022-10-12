import React, {useState} from 'react'
import './Photo.css'
const PhotoAnim = () => {
    const [onScroll, setOnScroll] = useState(false)
    let parallaxTitle = document.querySelectorAll(".parallax-title");
  
    const scrollProgress = () => {
      setOnScroll(!onScroll)
    };
  
    const raf = () => {
      if (onScroll) {
        parallaxTitle.forEach((element) => {
          element.style.transform = "translateX(" + window.scrollY / 8 + "%)";
        });
      }
    };
  
    requestAnimationFrame(raf);
    window.addEventListener("scroll", scrollProgress);
  
    return (
       <div class="smooth-scroll-wrapper">
              <div class="content">
                  <div class="container">
                      <div class="image-container">
                          <h2 class="text text-dark">
                              <span class="parallax-title">
                                  we live in the details
                              </span>
                          </h2>
                      </div>
  
                      <h2 class="text">
                          <span class="parallax-title">
                              we live in the details
                          </span>
                      </h2>
                  </div>
              </div>
          </div>
    )
}

export default PhotoAnim