// 


const allJobsContainers = document.getElementById('all-jobs-container');
const interviewPage = document.getElementById('interview-page-view');
const rejectedViewPage = document.getElementById('rejected-page-view')


document.getElementById('all').addEventListener('click',function(){
    allJobsContainers.classList.remove('hidden');
    interviewPage.classList.add('hidden');
    rejectedViewPage.classList.add('hidden');
})


//

document.getElementById('interview').addEventListener('click',function(){
    allJobsContainers.classList.add('hidden');
    interviewPage.classList.remove('hidden');
    rejectedViewPage.classList.add('hidden');
    console.log('interview worked');
})

document.getElementById('rejected').addEventListener('click',function(){
    allJobsContainers.classList.add('hidden');
    interviewPage.classList.add('hidden')
    rejectedViewPage.classList.remove('hidden');
    console.log('rejected worked');
})

