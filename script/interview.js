// For interview btn

const allInterviewButtons = document.querySelectorAll('.interview-btn');
for(const btn of allInterviewButtons){
    btn.addEventListener('click',function(event){
        const step1 = event.target.parentNode;
        
        const step2 = step1.parentNode;
        
        const step3 = step2.parentNode;
        
        const notAppliedBtn = step3.querySelector('.not-applied-btn');
        
        notAppliedBtn.innerText = 'Interview';

        const interviewCountElement = document.getElementById('interview-count');
        const currentCountText = interviewCountElement.innerText;
        let currentCount = Number(currentCountText);
        interviewCountElement.innerText = currentCount +1;
        step2.style.display = 'none';

        

        const fullCard = step3.parentNode;
        const interViewContainer = document.getElementById('interview-cards-container');
        interViewContainer.appendChild(fullCard);

        const emptyView = document.getElementById('empty-img');
        if(emptyView){
            emptyView.classList.add('hidden')
        }
        
        
    },{once:true})
}


// for reject btn

const allRejectedButtoms = document.querySelectorAll('.rejected-btn');
for(const btn of allRejectedButtoms){
    btn.addEventListener('click',function(event){
        const step1 = event.target.parentNode;
        const step2 = step1.parentNode;
        const step3 = step2.parentNode;
        const notAppliedBtn = step3.querySelector('.not-applied-btn');
        notAppliedBtn.innerText = 'Rejected';

        const rejectedCountElement = document.getElementById('rejected-count');
        const currentCountText = rejectedCountElement.innerText;
        let currentCount = Number(currentCountText);
        rejectedCountElement.innerText = currentCount + 1;
        step2.style.display = 'none';


        const fullCard = step3.parentNode;
        const rejectContainer = document.getElementById('reject-cards-container');
        rejectContainer.appendChild(fullCard);

        const rejectEmptyImg = document.getElementById('reject-emty-img');
        if(rejectEmptyImg){
            rejectEmptyImg.classList.add('hidden');
        }

    },{once:true})
}





// active trash icon

const allTrash = document.querySelectorAll('.fa-trash-can');

for (const icon of allTrash){
    icon.addEventListener('click',function(event){
        const card = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(card)
        card.remove();

        const jobCounts = document.getElementById('job-counts');
        let currentCount = parseInt(jobCounts.innerText);
        if(currentCount>0){
            jobCounts.innerText = (currentCount - 1 ) + "jobs";
        }

        const totalCounts = document.getElementById('total-count');
        let currentCount2 = parseInt(totalCounts.innerText);
        if(currentCount2>0){
            totalCounts.innerText = currentCount2 - 1;
        }

    });
    
}


















// FOR ID 
// document.getElementById('interview').addEventListener('click', function(){
//     const notAppliedInput = document.getElementById('not-applied');
//     notAppliedInput.innerText = 'Interview';
    
//     const interviewCountElement = document.getElementById('interview-count');
//     const currentCountText = interviewCountElement.innerText;
//     let currentCount = Number(currentCountText);
//     interviewCountElement.innerText = currentCount + 1;
    
// },{once:true})