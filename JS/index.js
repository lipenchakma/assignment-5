
// Blog button Section
    document.getElementById('blog-page').addEventListener("click", function(){
    window.location.href='blog.html';
});

// History button Section
    const historyBtn=document.getElementById('history-btn');
    const donationBtn= document.getElementById('donation-btn');
    historyBtn.addEventListener("click", 
    function(){
    historyBtn.classList.add('bg-[#B4F461]')
    const donationBtn = document.getElementById('donation-btn');
    donationBtn.classList.remove('bg-[#B4F461]');
    const mainSection = document.getElementById('main-section');
    mainSection.classList.add('hidden');
    const historyDisplay=document.getElementById('donation-history');
    historyDisplay.classList.remove('hidden');
});

// donation Button Section
    donationBtn.addEventListener("click", 
    function(){
    donationBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('bg-[#B4F461]');
    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden');
    const historyDisplay=document.getElementById('donation-history');
    historyDisplay.classList.add('hidden');
});

// Noakhali donation section
    document.getElementById('donate-now').addEventListener("click",function(){
    const totalAmount = parseFloat(document.getElementById('total-donation').innerText);
    const donateAmount = donateInput('donate-input');
    const donationAmountNoakhali = parseFloat(document.getElementById('donate-amount-noakhali').innerText);
    if(donateAmount <= 0 || isNaN(donateAmount) == true || donateAmount > totalAmount){
        return alert("invalid Amount number.");
    }
    document.getElementById('donate-amount-noakhali').innerText=donationAmountNoakhali+donateAmount;
    document.getElementById('total-donation').innerText=totalAmount-donateAmount;
    document.getElementById("my_modal_1").showModal();
    document.getElementById('donate-input').value = (' ');

    
    // history container Section
    const date = new Date();
    const p = document.createElement('p');
    p.style.border='1px solid gray'
    p.style.borderRadius='10px'
    p.style.padding='15px'
    p.style.margin='10px 0px'
    p.innerText=`${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh.
    ${date}`
    document.getElementById('donation-container').appendChild(p);
})

// Feni donation section

document.getElementById('donate-now-feni').addEventListener("click", function(){
    const totalAmount = parseFloat(document.getElementById('total-donation').innerText);
    const donateFeniValue =donateInput('donate-feni-input');
    if(donateFeniValue <= 0 || isNaN(donateFeniValue) == true || donateFeniValue > totalAmount){
        return alert("invalid Amount number.");
    }
    const feniDonateAmount = parseFloat(document.getElementById('feni-donate-amount').innerText);
    document.getElementById('feni-donate-amount').innerText = donateFeniValue + feniDonateAmount;
    document.getElementById('total-donation').innerText= totalAmount - donateFeniValue;
    document.getElementById("my_modal_1").showModal();
    document.getElementById('donate-feni-input').value = (' ');
    // history container
    const date = new Date();
    const p = document.createElement('p');
    p.style.border='1px solid gray'
    p.style.borderRadius='10px'
    p.style.padding='15px'
    p.style.margin='10px 0px'
    p.innerText=`${donateFeniValue} Taka is Donated for Flood Relief in Feni, Bangladesh.
    ${date}`
    document.getElementById('donation-container').appendChild(p);
})


// Quota donation section

    document.getElementById('donate-quota-btn').addEventListener("click", function(){
    const totalAmount = parseFloat(document.getElementById('total-donation').innerText);
    const donateQuotaValue =donateInput('quota-donate-value');
    if(donateQuotaValue <= 0 || isNaN(donateQuotaValue) == true || donateQuotaValue > totalAmount){
        return alert("invalid Amount number.");
    }
    document.getElementById('total-donation').innerText= totalAmount-donateQuotaValue;
    const quotaDonateAmount = parseFloat(document.getElementById('quota-donate-amount').innerText);
    document.getElementById('quota-donate-amount').innerText = quotaDonateAmount + donateQuotaValue;
    document.getElementById("my_modal_1").showModal();
    document.getElementById('quota-donate-value').value = (' ');
    // history container
    const date = new Date();
    const p = document.createElement('p');
    p.style.border='1px solid gray'
    p.style.borderRadius='10px'
    p.style.padding='15px'
    p.style.margin='10px 0px'
    p.innerText=`${donateQuotaValue} Taka is Donated for Injured in the Quota Movement, Bangladesh.
    ${date}`
    document.getElementById('donation-container').appendChild(p);
});


