// For interview
// let interviewTab = [];
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


// for rejected

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

    },{once:true})
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