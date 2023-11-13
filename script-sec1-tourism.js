document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-scroll', 'in');
      }
    });
  });

  const scrollContainer = document.querySelector('#scroll-container h2');
  observer.observe(scrollContainer);
});



document.addEventListener('DOMContentLoaded', function() {
    // Set the options for the Intersection Observer
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    // Create the Intersection Observer instance
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          // Optionally, stop observing the element after the animation has played
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    // Select all the target elements
    let targets = document.querySelectorAll('.scroll-container p, .grey-rectangle p, .chart-content p, .content');
  
    // Observe each target for entering the viewport
    targets.forEach(target => {
      observer.observe(target);
    });
  });
  
  









document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content');
    const circles = document.querySelectorAll('.circle');
    const nextButton = document.getElementById('content-next');
    const backButton = document.getElementById('content-back');
  
    let currentContentIndex = 1; // 设置当前内容为第一个
    let currentCircleIndex = 0; // 设置当前圆点为第一个
    let currentColorIndex = 0;  // 设置当前颜色为第一个圆点

    // 函数：显示指定索引的内容
    function showContent(contentIndex) {
        // 隐藏所有内容
        contents.forEach(content => {
            content.style.display = 'none';
        });
        // 显示当前索引的内容
        contents[contentIndex].style.display = 'block';
    }

    // 函数：放大指定索引的圆点
    function enlargeCircle(circleIndex) {
        circles.forEach((circle, i) => {
            circle.style.transform = i === circleIndex ? 'scale(1.7)' : 'scale(1)';
        });
    }

    // 函数：改变指定索引的圆点颜色
    function changeCircleColor(colorIndex) {
        circles.forEach((circle, i) => {
            circle.style.backgroundColor = i === colorIndex ? 'grey' : 'white';
        });
    }

    // 显示第一个内容并放大第一个圆点并改变其颜色
    showContent(currentContentIndex);
    enlargeCircle(currentCircleIndex);
    changeCircleColor(currentColorIndex);

    // 为 Next 按钮添加点击事件
    nextButton.addEventListener('click', function() {
        // 增加内容和圆点的索引，如果到达末尾则回到开始
        currentContentIndex = (currentContentIndex + 1) % contents.length;
        currentCircleIndex = (currentCircleIndex + 1) % circles.length;
        currentColorIndex = currentCircleIndex;
        showContent(currentContentIndex);
        enlargeCircle(currentCircleIndex);
        changeCircleColor(currentColorIndex);

        // 如果是最后一个内容，则切换按钮显示
        nextButton.style.display = currentContentIndex === contents.length - 1 ? 'none' : 'block';
        backButton.style.display = currentContentIndex === contents.length - 1 ? 'block' : 'none';
    });

    // 为 Back 按钮添加点击事件
    backButton.addEventListener('click', function() {
        // 回到第一个内容和圆点
        currentContentIndex = 1;
        currentCircleIndex = 0;
        currentColorIndex = currentCircleIndex;
        showContent(currentContentIndex);
        enlargeCircle(currentCircleIndex);
        changeCircleColor(currentColorIndex);
        // 显示 Next 按钮并隐藏 Back 按钮
        nextButton.style.display = 'block';
        backButton.style.display = 'none';
    });
});

// 其余 CSS 和 HTML 代码保持不变
