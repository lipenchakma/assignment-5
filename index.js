
// Blog button to go blog page
    document.getElementById('blog').addEventListener("click", function(){
    window.location.href='blog.html';
});

// History button
    const historyBtn=document.getElementById('history-btn');
    const donationBtn= document.getElementById('donation-btn');

    historyBtn.addEventListener("click", function(){
    historyBtn.classList.add('bg-[#B4F461]')
    const donationBtn = document.getElementById('donation-btn');
    donationBtn.classList.remove('bg-[#B4F461]');
    const mainSection = document.getElementById('main-section');
    mainSection.classList.add('hidden');

    const historyDisplay=document.getElementById('donation-history');
        historyDisplay.classList.remove('hidden');
    // const historyItems=document.createElement("div");
    // historyItems.innerHTML=`
    // <p>${new Date().toLocaleDateString}</p>
    // `
    // const historySection=document.getElementById('history-section');
    // historySection.insertBefore(historyItems,firstChild);
})

// donationButton
    donationBtn.addEventListener("click", function(){
    donationBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('bg-[#B4F461]');
    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden');
    const historyDisplay=document.getElementById('donation-history');
    historyDisplay.classList.add('hidden');
})

// Noakhali donation section
    document.getElementById('donate-now').addEventListener("click",function(){
    const donateAmount = donateInput('donate-input');
    const totalAmount = parseFloat(document.getElementById('total-Amount').innerText);
    const donationAmountNoakhali = parseFloat(document.getElementById('donate-amount-noakhali').innerText);

    if(donateAmount <= 0 || isNaN(donateAmount) == true || donateAmount > totalAmount){
        return alert("invalid data is found, please input valid number.");
    }

    document.getElementById('donate-amount-noakhali').innerText=donationAmountNoakhali+donateAmount;
    document.getElementById('total-Amount').innerText=totalAmount-donateAmount;

    // const modal = Document.getElementById('my_modal_1');
    // modal.showModal();
    document.getElementById("my_modal_1").showModal();



    // history button
    const date = new Date();
    const p1 = document.createElement('p');
    p1.style.border='1px solid gray'
    p1.style.borderRadius='10px'
    p1.style.padding='8px'
    p1.innerText=`${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh.
    ${date}`
    document.getElementById('donation-container').appendChild(p1);
    // const p2 = document.createElement('p');
    // p2.style.color='gray';
    // p2.style.fontSize='16px'
    // p2.innerText=`Date: ${date}`;
    // document.getElementById('donation-container').appendChild(p2);
})








