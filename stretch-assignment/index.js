let blocks = document.querySelectorAll('.block')
blocks.forEach((block) => {
    block.addEventListener('mousedown', () => {
        TweenMax.to(block, 4, {x:800});
    });
});

document.querySelector('body').addEventListener('mouseup', () => {
    TweenMax.to(blocks, 4, {x:0});
});
