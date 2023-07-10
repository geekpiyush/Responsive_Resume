let linkvalue = document.querySelectorAll('.horizontal-list a');

for(let i=0; i<linkvalue.length; i++)
{
    linkvalue[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        // getting id names for scroll
        let linkvalueID=this.textContent.trim();
        
        // getting sections for target

        let linkvaluesec = document.getElementById(linkvalueID)
 
        let scrollstart= setInterval(function()
        {
            let targetcordinates = linkvaluesec.getBoundingClientRect();
            
                if(targetcordinates.top < 0)
                {
                    clearInterval(scrollstart);
                    return;
                }
                window.scrollBy(0,50)
        },50);
    });
}

//  autofill progressBar code starts here

let progressBar = document.querySelectorAll('.skill-progress > div');
let skillContainer = document.getElementById('skill-container');

window.addEventListener('scroll',checkScroll);

var AnimationDone = false;

function inhertiProgress()
{
    for (var bar of progressBar)
    {
        bar.style.width= 0 + "%"
    }
}

inhertiProgress();

// create a function for fill progress bar 

function fillProgressBar()
{
    for (let bar of progressBar)
    {
        let targetWidth= bar.getAttribute('data-width-val');
        let currentWidth=0;
        let interval = setInterval(function()
        {
            if(currentWidth>targetWidth)
            {
                clearInterval(interval);
            }
            currentWidth++;
            bar.style.width=currentWidth + "%";
        },30);
    }
}



function checkScroll()
{
    let corrdinates = skillContainer.getBoundingClientRect();

    if(!AnimationDone && corrdinates.top <= window.innerHeight)
    {
        AnimationDone = true;

        // console.log("skill section is visible on screen")
        fillProgressBar();
    }
    else if(corrdinates.top >window.innerHeight)
    {
        AnimationDone = false;
        inhertiProgress();
    }
}

// percantageScroll

function getScrollProgress()
{
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop)
    const totalHeight= document.documentElement.scrollHeight-document.documentElement.clientHeight;
    console.log(totalHeight)
    const progress= (scrollTop / totalHeight) * 100;
    console.log(progress)
    return Math.round(progress)

}

function updateScrollBox()
{
    const progressContainer = document.getElementById('percantageScroll');
    const scrollBox = getScrollProgress();
    progressContainer.innerHTML = scrollBox + "%";
}   
window.addEventListener('scroll',updateScrollBox)