let blocks = document.querySelectorAll('.block')
blocks.forEach((block) => {
    block.addEventListener('mousedown', () => {
        TweenMax.to(block, 3, {x:1000});
        TweenMax.to(block, 2, {y:"-800"});
    });
});

document.querySelector('body').addEventListener('mouseup', () => {
    TweenMax.to(blocks, 3, {x:0});
    TweenMax.to(blocks, 2, {y:"0%"});
});
