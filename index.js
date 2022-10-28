document.querySelector('.share-icon').addEventListener('mouseover', (whenHover) =>{
        document.querySelector('.share-icon').style.backgroundColor = 'hsl(217, 19%, 35%)';
        document.querySelector('.after-hover').classList.remove('display');
        document.querySelector('.triangle').classList.remove('display');
});
document.querySelector('.share-icon').addEventListener('mouseout', (noHover)=>{
        document.querySelector('.share-icon').style.backgroundColor = 'hsl(212, 23%, 69%, 0.5)';
        document.querySelector('.after-hover').classList.add('display');
        document.querySelector('.triangle').classList.add('display');
});

