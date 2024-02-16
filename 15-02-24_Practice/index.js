document.getElementById('btn').addEventListener('click', function() {
    let getkg = parseFloat(document.getElementById('kg').value);
    let getfeet = parseFloat(document.getElementById('feet').value);
    let getinches = parseFloat(document.getElementById('inches').value);
    let getname=document.getElementById('name').value;
    let progress=document.getElementById('progress');
    let radial=document.getElementById('radial')
    let cover=document.getElementById('cover')
    const result=document.getElementById('result');

    let name=getname.toUpperCase();
    let kg = parseInt(getkg);
    let feet = parseInt(getfeet);
    let inches = parseInt(getinches);
    let totInches = (feet * 12) + inches;
    let meters = totInches / 39.37;
    let bme = kg / (meters * meters);
    let bmi =bme.toFixed(2);
    if (isNaN(bmi)) {
        alert("Sorry!All Values Are Required!");
        return;
    }
    let sbmi=bmi.toString();
    
    
    document.getElementById('kg').value = '';
    document.getElementById('inches').value = '';
    document.getElementById('feet').value = '';
    document.getElementById('name').value = '';
    progress.setAttribute('value',`${sbmi}`)
    radial.setAttribute('style',`--value:${(sbmi*100)/40};--size:10rem; --thickness: 1rem;`)
    radial.innerText=`${sbmi}`;
    const p=document.createElement('p')

    const l =result.children
    if(l.length>0)
    {
        result.children[0].remove(result.children[0]);
    }
    
    p.style.fontSize='1rem';
    p.style.fontWeight='700';
    p.style.textAlign='center';
    p.innerText=name+' Your BMI is :'+bmi;
    if(bmi>=18.50 && bmi<=25.00)
    {
        p.innerText=name+' তুমি তো মিয়া রিত্তিক রোসান,অডিশন কবে? ';
        radial.style.color='lightgreen'
        p.style.color='lightgreen'
        cover.setAttribute('style',`background-image: url('./hrithik-roshan-oq74orkp625wlwu2.jpg'); background-repeat: no-repeat; background-size: cover;background-position: center; object-fit: cover;`)
       
    }
    else if(bmi>25.00 && bmi<=29.00)
    {
        p.innerText=name+'কি অবস্থা ব্রো? তোমার তো ভুড়ি দেখা যায়';
        radial.style.color='goldenrod'
        p.style.color='cyan'
        cover.setAttribute('style',`background-image: url('./overweight.jpg'); background-repeat: no-repeat; background-size: cover;background-position: center; object-fit: cover;`)
        
    }
    else if(bmi>29 && bmi<=35)
    {
        p.innerText=name+'তোমার পেট থেকে তো কিছুদিন পর নতুন শিশু জন্ম নিবে ব্রো';
        radial.style.color='orange'
        p.style.color='cyan'
        cover.setAttribute('style',`background-image: url('./obesity-1.jpg'); background-repeat: no-repeat; background-size: cover;background-position: center; object-fit: cover;`)
       
    }
    else if(bmi>35.00 && bmi<=40.00)
    {
        p.innerText=name+'তোমার বোধ হয় আর রক্ষে নেই';
        radial.style.color='pink'
        p.style.color='cyan'
        cover.setAttribute('style',`background-image: url('./obesity-2.jpg'); background-repeat: no-repeat; background-size: cover;background-position: center; object-fit: cover;`)
        
    }
    else if(bmi>40)
    {
        p.innerText=name+'আরেহ! তুমি বেচে আছ কিভাবে?';
        radial.style.color='red'
        p.style.color='cyan'
        cover.setAttribute('style',`background-image: url('./dead.jpg'); background-repeat: no-repeat; background-size: cover;background-position: center; object-fit: cover;`)
        
    }
    else
    {
        p.innerText=name+'ঝড় ,তুফান উঠলে নিজেকে সামলে রেখ উড়ে যেতে পার';
        radial.style.color='blueviolet'
        p.style.color='cyan'
        cover.setAttribute('style',`background-image: url('./ronaldo.jpg'); background-repeat: no-repeat; background-size: cover;background-position: center; object-fit: cover;`)
        
        
    }
    
   
    result.appendChild(p);

});